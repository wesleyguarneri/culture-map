using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BookController : Controller
{
    private readonly List<Book> _books = new List<Book>();

    public BookController()
    {
        _books.Add(new Book()
            {
             Id = Guid.NewGuid(),
             Title = "War and Peace",
             Author = "Leo Tolstoy",
             Description = "A good book",
             Genre = "Classics"
            });
    }
    
    [HttpGet()]
    public ActionResult<Book> GetBooks()
    {
        return Ok(_books);
    }
    
    [HttpGet("{id}")]
    public ActionResult<Book> GetById(Guid id)
    {
        var book = _books.FirstOrDefault(b => b.Id == id);
        if (book == null)
        {
            return NotFound();
        }
        return Ok(book);
    }

    [HttpPost]
    public ActionResult<Book> Insert(Book book)
    {
        _books.Add(book);
        return book;
    }
}