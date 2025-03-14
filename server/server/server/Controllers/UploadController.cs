using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
namespace server.Controllers;

[Route("api/upload")]
[ApiController]
public class UploadController : Controller
{
    private readonly IAmazonS3 _s3Client;

    public UploadController()
    {
        _s3Client = new AmazonS3Client(RegionEndpoint.USEast2);
    }

    [HttpGet("presigned-url")]
    public IActionResult GetPreSignedUrl(string fileName)
    {
        string bucketName = "bookimage-bucket";
        double timeoutDuration = 12;

        var url = GeneratePreSignedURL(_s3Client, bucketName, fileName, timeoutDuration);
        return Ok(new { url });
    }

    private string GeneratePreSignedURL(
        IAmazonS3 client,
        string bucketName,
        string objectKey,
        double duration)
    {
        var request = new GetPreSignedUrlRequest
        {
            BucketName = bucketName,
            Key = objectKey,
            Verb = HttpVerb.PUT,
            Expires = DateTime.UtcNow.AddHours(duration),
        };

        return client.GetPreSignedURL(request);
    }
}