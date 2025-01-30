using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CountryController : Controller
{
    private readonly List<Country> _countries = new List<Country>();
    private readonly string _connectionString = "Host=localhost;Port=5432;Username=admin;Password=postgres;Database=postgres";

    
    [HttpGet("{IsoA2}")]
    public ActionResult<Country> GetByIsoA2(string isoA2)
    {
        var country = _countries.FirstOrDefault(c => c.IsoA2 == isoA2);
        if (country == null)
        {
            return NotFound();
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