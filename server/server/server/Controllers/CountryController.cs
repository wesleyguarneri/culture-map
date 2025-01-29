using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CountryController : Controller
{
    private readonly List<Country> _countries = new List<Country>();

    public CountryController()
    {
        
    }
    
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
        _countries.Add(country);
        return country;
    }
}