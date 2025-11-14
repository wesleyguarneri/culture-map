# The Written World

URL: https://www.writtenworld.net/ (Backend currently down to save on AWS costs)

The goal of this project is to create an interactive map that highlights classic works of literature from every country in the world. A 'classic' is defined by its timeless quality and lasting influence on a culture. I would also colloquialy define a classic as a book widely taught in a nation’s classrooms and frequently referenced within its culture. My current is goal is to curate at least five classic books from each nation based on research into that country’s literary and cultural history. This is to create a baseline of works for each nation and I plan on implementing a feature that allows users to contribute their own recommendations.

## Features
- Interactive global map built with React Leaflet and MapTiler vector tiles, plus a Carbon Design–inspired detail panel that surfaces books for the selected country.
- ASP.NET Core API that exposes country, book, and asset endpoints, complete with Swagger docs, health probes, and CORS rules for local and hosted clients.
- Postgres schema for curated book & country metadata, with book jackets stored in S3 and fetched through pre‑signed URLs on demand.
- Python/Selenium scraper and helper scripts that seed the database from Goodreads and upload new cover images through the API.
- Static-friendly Next.js configuration (exported output + Leaflet asset copying) so the client can be deployed to Vercel/Netlify while the API lives on Elastic Beanstalk or another host.

## Future Features
- User accounts with favorites/to-read lists
- Map filters for language, genre, and time period
- Country panels with literary history/context
- Timeline slider to explore publication eras

## Architecture
```
React UI (Next.js, Carbon, Sass)
        ↓ fetches
ASP.NET Core API  ──► PostgreSQL (countries + books)
        │
        └──► Amazon S3 (book jackets via pre‑signed URLs)

```


## Tech Stack
| Layer          | Technology |
| -------------- | ---------- |
| Front end      | Next.js 15, React 18, React Leaflet + react-leaflet-vector-tile-layer, Carbon Design, Sass modules |
| API            | ASP.NET Core 8, Minimal hosting model, AWS SDK for S3, Npgsql, Swashbuthckle |
| Data           | PostgreSQL, Amazon S3 |
| Tooling        | TypeScript, Node 18+ |


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





