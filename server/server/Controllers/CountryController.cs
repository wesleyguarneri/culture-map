using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CountryController : Controller
{
    private readonly string _connectionString = "Host=localhost;Port=5432;Username=admin;Password=postgres;Database=postgres";
    

    [HttpGet("{IsoA2}")]
    public ActionResult<String> GetByIsoA2(string isoA2)
    {
        Country? country = null;

        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            string sql = "SELECT c.* FROM public.countries AS c WHERE c.iso_a2=@isoA2";
            
            using (var command = new NpgsqlCommand(sql, connection))
            {
                command.Parameters.AddWithValue("@isoA2", isoA2);
                using (var reader = command.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        country = new Country
                        {
                            IsoA2 = reader.GetString(reader.GetOrdinal("iso_a2")),
                            IsoA3 = reader.GetString(reader.GetOrdinal("iso_a3")),
                            Numeric = reader.GetString(reader.GetOrdinal("numeric")),
                            Name = reader.GetString(reader.GetOrdinal("name")),
                            Region = reader.GetString(reader.GetOrdinal("region")),
                            Subregion = reader.GetString(reader.GetOrdinal("subregion"))
                        };
                        Console.WriteLine($"Found Country: {country.Name} ({country.IsoA2})");
                    }   
                }
            };
        }
        if (country == null)
        {
            return NotFound($"Country with ISO_A2 '{isoA2}' not found.");
        }

        return Ok(country);
    }

    [HttpPost]
    public ActionResult<Country> Add(Country country)
    {
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            string sql = "INSERT INTO countries (name, iso_a2, iso_a3, numeric, region, subregion) VALUES (@name, @isoA2, @isoA3, @numeric, @region, @subregion)";

            using (var command = new NpgsqlCommand(sql, connection))
            {
                command.Parameters.AddWithValue("name", country.Name);
                command.Parameters.AddWithValue("isoA2", country.IsoA2);
                command.Parameters.AddWithValue("isoA3", country.IsoA3);
                command.Parameters.AddWithValue("numeric", country.Numeric);
                command.Parameters.AddWithValue("region", country.Region);
                command.Parameters.AddWithValue("subregion", country.Subregion);

                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Failed to insert country.");
                }
            }
        }
        return CreatedAtAction(nameof(GetByIsoA2), new { isoA2 = country.IsoA2 }, country);

    }
}