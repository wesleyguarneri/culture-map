using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BookController : Controller
{
    private readonly string _connectionString = "Host=localhost;Port=5432;Username=admin;Password=postgres;Database=postgres";
    
    [HttpGet("isbn/{isbn}")]
    public ActionResult<Book> GetByIsbn(string isbn)
    {
        Book? book = null;

        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            string sql = "SELECT * FROM public.books WHERE isbn=@isbn";
            
            using (var command = new NpgsqlCommand(sql, connection))
            {
                command.Parameters.AddWithValue("@isbn", isbn);
                using (var reader = command.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        book = new Book
                        {
                            Title = reader.GetString(reader.GetOrdinal("title")),
                            Author = reader.GetString(reader.GetOrdinal("author")),
                            Isbn = reader.GetString(reader.GetOrdinal("isbn")),
                            Year = reader.GetString(reader.GetOrdinal("year")),
                            Genre = reader.GetString(reader.GetOrdinal("genre")),
                            Country = reader.GetString(reader.GetOrdinal("country")),
                            Description = reader.GetString(reader.GetOrdinal("description")),
                            Language = reader.GetString(reader.GetOrdinal("language")),
                        };
                        Console.WriteLine($"Found Book: {book.Title} ");
                    }   
                }
            };
        }
        if (book == null)
        {
            return NotFound($"Book with Isbn '{isbn}' not found.");
        }
        return Ok(book);
    }
    
    [HttpGet("country/{isoA3}")]
    public ActionResult<Book> GetAllByCountry(string isoA3)
    {
        List<Book> books = new List<Book>();

        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            string sql = "SELECT * FROM public.books WHERE country=@isoA3";
            
            using (var command = new NpgsqlCommand(sql, connection))
            {
                command.Parameters.AddWithValue("@isoA3", isoA3);
                
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        books.Add(new Book
                        {
                            Title = reader.GetString(reader.GetOrdinal("title")),
                            Author = reader.GetString(reader.GetOrdinal("author")),
                            Isbn = reader.GetString(reader.GetOrdinal("isbn")),
                            Year = reader.GetString(reader.GetOrdinal("year")),
                            Genre = reader.GetString(reader.GetOrdinal("genre")),
                            Country = reader.GetString(reader.GetOrdinal("country")),
                            Description = reader.GetString(reader.GetOrdinal("description")),
                            Language = reader.GetString(reader.GetOrdinal("language")),
                        });
                    } 
                }
            };
        }
        return books.Count > 0 ? Ok(books) : NotFound();
    }

    [HttpPost]
    public ActionResult<Book> Add(Book book)
    {
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            string sql = "INSERT INTO books (title, author, isbn, year, genre, country, description, language ) VALUES (@title, @author, @isbn, @year, @genre, @country, @description, @language)";

            using (var command = new NpgsqlCommand(sql, connection))
            {
                command.Parameters.AddWithValue("title", book.Title);
                command.Parameters.AddWithValue("author", book.Author);
                command.Parameters.AddWithValue("isbn", book.Isbn);
                command.Parameters.AddWithValue("year", book.Year);
                command.Parameters.AddWithValue("genre", book.Genre);
                command.Parameters.AddWithValue("country", book.Country);
                command.Parameters.AddWithValue("description", book.Description);
                command.Parameters.AddWithValue("language", book.Language);

                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected == 0)
                {
                    return BadRequest("Failed to insert book.");
                }
            }
        }
        return CreatedAtAction(nameof(GetByIsbn), new { isbn = book.Isbn }, book);
    }
}