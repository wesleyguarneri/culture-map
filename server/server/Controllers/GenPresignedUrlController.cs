using Microsoft.AspNetCore.Mvc;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using System;
namespace server.Controllers;
using Microsoft.AspNetCore.Cors;


[Route("api/[controller]")]
[ApiController]
public class GenPresignedUrlController : Controller
{
    private readonly IAmazonS3 _s3Client;

    public GenPresignedUrlController(IAmazonS3 s3Client)
    {
        _s3Client = s3Client;
    }

    [HttpGet("images/{isbn}")] 
    public async Task<IActionResult> GetPresignedUrl(string isbn)
    {
        string bucketName = "book-image-bucket-us-east-1";
        int expiryDuration = 3600; 
        Console.WriteLine($"isbn: {isbn}");
        try
        {
            var request = new GetPreSignedUrlRequest
            {
                BucketName = bucketName,
                Key = "images/"+isbn,
                Expires = DateTime.UtcNow.AddSeconds(expiryDuration),
                Verb = HttpVerb.GET
            };

            string presignedUrl = _s3Client.GetPreSignedURL(request);
            return Ok(new { url = presignedUrl });
        }
        catch (Exception e)
        {
            return StatusCode(500, $"Error generating pre-signed URL: {e.Message}");
        }
    }
}