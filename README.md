# The Written World

An interactive culture map that spotlights essential books from every country. The project pairs a Next.js + Leaflet front end with a .NET 8 API, a PostgreSQL catalog, Amazon S3‑hosted book jackets, and a small Python pipeline that populates the data set from Goodreads.

## Features
- Interactive global map built with React Leaflet and MapTiler vector tiles, plus a Carbon Design–inspired detail panel that surfaces books for the selected country.
- ASP.NET Core API that exposes country, book, and asset endpoints, complete with Swagger docs, health probes, and CORS rules for local and hosted clients.
- Postgres schema for curated book & country metadata, with book jackets stored in S3 and fetched through pre‑signed URLs on demand.
- Python/Selenium scraper and helper scripts that seed the database from Goodreads and upload new cover images through the API.
- Static-friendly Next.js configuration (exported output + Leaflet asset copying) so the client can be deployed to Vercel/Netlify while the API lives on Elastic Beanstalk or another host.

## Architecture
```
React UI (Next.js, Carbon, Sass)
        ↓ fetches
ASP.NET Core API  ──► PostgreSQL (countries + books)
        │
        └──► Amazon S3 (book jackets via pre‑signed URLs)

Python ingestion scripts (Goodreads + requests) write directly into PostgreSQL
and push cover uploads through the API.
```

## Repository Structure
```
client/                 Next 15 front end (TypeScript, React Leaflet, Carbon)
  ├─ public/countries.geojson  // geometric boundaries rendered on the map
  ├─ config.json               // API base URLs for the client & scraper
  └─ src/...                   // UI components (Map, Detail Panel, etc.)
server/
  └─ server/                   // .NET 8 WebApplication (controllers, models)
goodreads-scraper.py           // Selenium-based Goodreads ingestion script
client/public/add_countries.py // Helper script to seed the countries table
images/                        // Local cache of cover images before upload
geckodriver                    // Firefox driver required by the scraper
```

## Tech Stack
| Layer          | Technology |
| -------------- | ---------- |
| Front end      | Next.js 15, React 18, React Leaflet + react-leaflet-vector-tile-layer, Carbon Design, Sass modules |
| API            | ASP.NET Core 8, Minimal hosting model, AWS SDK for S3, Npgsql, Swashbuckle |
| Data           | PostgreSQL, Amazon S3 |
| Tooling        | TypeScript, Node 18+, Python 3.11, Selenium + Firefox/Geckodriver |

## Prerequisites
- Node.js 18+ and npm (or yarn) for the Next.js app.
- .NET 8 SDK for the API.
- PostgreSQL 14+ reachable from both the server and scripts.
- Python 3.10+ plus Firefox + `geckodriver` for the Goodreads scraper.
- AWS credentials (IAM user or role) with S3 access to the bucket that stores cover images.
- A MapTiler (or other tile provider) key if you swap out the demo key inside `client/src/components/Map/DynamicMap.tsx`.

## Configuration

### Client (`client/config.json`)
```json
{
  "API_URL": "http://localhost:5050/api",
  "DEPLOYED_URL": "https://www.writtenworld.net/api"
}
```
- `API_URL` is used by the Next.js app **and** the Python scraper when running locally.
- `DEPLOYED_URL` is available as a convenience when you need to point scripts at the hosted API.
- Keep this file out of version control if you place secrets in it; alternatively, read these values from `process.env` and a `.env.local`.

`next.config.js` currently rewrites `/api/*` requests to the Elastic Beanstalk instance used in production. Comment that block out when you want the client dev server to proxy to a local API instead.

### API (`server/server/appsettings.json`)
Provide values for:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Username=postgres;Password=secret;Database=writtenworld"
  },
  "AWS": {
    "Profile": "default",
    "Region": "us-east-1",
    "AccessKey": "<AWS_ACCESS_KEY_ID>",
    "SecretKey": "<AWS_SECRET_ACCESS_KEY>"
  }
}
```
Use environment variables or `dotnet user-secrets` in development so credentials never get committed:
```bash
cd server/server
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=..."
dotnet user-secrets set "AWS:AccessKey" "..."
```

### Database tables
The API expects `countries` and `books` tables shaped like:
```sql
CREATE TABLE countries (
  iso_a2  varchar(2) PRIMARY KEY,
  iso_a3  varchar(3) NOT NULL,
  numeric varchar(3) NOT NULL,
  name    text NOT NULL,
  region  text,
  subregion text
);

CREATE TABLE books (
  isbn        varchar(32) PRIMARY KEY,
  title       text NOT NULL,
  author      text NOT NULL,
  year        text,
  genre       text,
  country     varchar(3) REFERENCES countries(iso_a3),
  description text,
  language    text
);
```
Run the helper scripts below if you need to seed those tables from scratch.

## Install Dependencies
```bash
# Front end
cd client
npm install

# API
cd server/server
dotnet restore

# Python tooling (optional, for data ingestion)
python -m pip install selenium psycopg2-binary pandas pillow requests boto3
```

## Running Locally
1. **Start PostgreSQL** and confirm the connection string in `appsettings.json` points at the right database.
2. **Run the API**
   ```bash
   cd server/server
   dotnet watch run --urls http://localhost:5050
   ```
   - Swagger UI: `http://localhost:5050/swagger`
   - Health check: `http://localhost:5050/health`
3. **Run the Next.js client**
   ```bash
   cd client
   npm run dev
   ```
   Visit `http://localhost:3000` to load the map. Clicking a country fetches `/api/country/{ISO_A2}` followed by `/api/book/country/{ISO_A3}`. Book cover images are fetched lazily from S3 via `/api/GenPresignedUrl/images/{isbn}`.

For production builds, run `npm run build && npm run start` (or `next export` if you want the static `out/` directory) and `dotnet publish -c Release`.

## API Surface
| Method | Route | Description |
| ------ | ----- | ----------- |
| GET    | `/`                   | Basic readiness ping. |
| GET    | `/health`             | Returns `Healthy` when the API is up. |
| GET    | `/api/country/{iso_a2}` | Fetch metadata for a single country. |
| POST   | `/api/country`        | Insert a new country record. |
| GET    | `/api/book/isbn/{isbn}` | Fetch a single book. |
| GET    | `/api/book/country/{iso_a3}` | List all books tied to a country (ISO A3). |
| POST   | `/api/book`           | Insert a new book record. |
| GET    | `/api/GenPresignedUrl/images/{isbn}` | Returns a 1‑hour S3 pre‑signed URL for the specified cover. |
| POST   | `/api/upload/image?isbn={isbn}` | Accepts a multipart image upload and writes it to the configured S3 bucket. |

All API responses are JSON and CORS is open to `localhost:3000`, `127.0.0.1:3000`, and the production domains listed in `Program.cs`.

## Data Ingestion & Assets
### Seeding countries
`client/public/add_countries.py` reads `public/all.json` (ISO dataset) and posts each record to `/api/country`.
```bash
cd client/public
python add_countries.py
```
Make sure `API_URL` inside the script matches your running API.

### Scraping Goodreads titles
`goodreads-scraper.py` automates Firefox, scrapes book details, and:
1. Inserts the record into PostgreSQL.
2. Downloads the cover image into `images/`.
3. Calls `POST /api/upload/image` so the API persists the cover to S3.

Before running:
- Install Firefox + `geckodriver` (already tracked at the repo root).
- Update the database credentials in `GoodreadsScraper.connect_to_db`.
- Point `client/config.json`’s `API_URL` at the API you want to populate.
- Customize `GoodreadsScraper.run()` to call `get_book(...)` or `get_books_from_list(...)` for the countries you need.

Run the scraper with:
```bash
python goodreads-scraper.py
```
Keep an eye on Goodreads rate limits, and consider throttling or caching to stay within their ToS.

## Deployment Notes
- **Front end:** `next.config.js` is already configured for static export and copies Leaflet assets automatically. Provide the correct MapTiler key and adjust the `rewrites()` destination before running `npm run build && next export`. Deploy the `out/` directory to Vercel, Netlify, or any static host.
- **API:** Deploy via `dotnet publish -c Release -o publish` and push the contents of `server/server/publish` to your hosting provider (Elastic Beanstalk, ECS, etc.). Remember to set `ASPNETCORE_ENVIRONMENT`, `PORT`, `ConnectionStrings__DefaultConnection`, and AWS credentials in the host environment.
- **Assets:** The S3 bucket name is currently hard-coded as `book-image-bucket-us-east-1` in both the upload and pre-signed URL controllers. Change it (and the associated IAM policy) if you deploy to a different account or region.

## Useful Commands
```bash
# Front end
npm run dev      # Next.js dev server
npm run build    # Production build (static export)
npm run start    # Serve the built app

# API
dotnet watch run                  # Hot reload during development
dotnet run --project server/server
dotnet publish -c Release -o publish
```

## Troubleshooting
- **Blank map tiles:** Ensure the MapTiler style URL/key in `DynamicMap.tsx` is valid and that the tile domain is allowed by your CSP.
- **CORS errors:** Verify the origin is listed in `builder.Services.AddCors()` inside `Program.cs` or temporarily use a proxy.
- **Missing book covers:** Confirm `/api/GenPresignedUrl/images/{isbn}` returns a URL. If it 500s, check S3 credentials and bucket ACLs.
- **Database timeouts:** Make sure the Postgres security group allows inbound traffic from both your machine and the API host. Verify the `books` and `countries` tables exist with the schema above.
- **Scraper crashes:** Update the Goodreads CSS selectors when Goodreads changes their DOM, and slow the script down (`time.sleep`) to reduce automation detection.

---

The Written World is still evolving—feel free to extend the data model, add tests, or integrate a proper CMS as the catalog grows.
