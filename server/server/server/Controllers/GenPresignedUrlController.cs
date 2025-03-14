using Microsoft.AspNetCore.Mvc;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using System;
namespace server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GenPresignedUrlController : Controller
{
    private readonly IAmazonS3 _s3Client;

    public GenPresignedUrlController(IAmazonS3 s3Client)
    {
        _s3Client = s3Client;
    }

    [HttpGet("{*objectKey}")] // Enables full S3 paths to be handled as a single parameter
    public async Task<IActionResult> GetPresignedUrl(string objectKey)
    {
        string bucketName = "bookimage-bucket";
        int expiryDuration = 3600; // 1 hour

        try
        {
            var request = new GetPreSignedUrlRequest
            {
                BucketName = bucketName,
                Key = objectKey,
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