using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;


namespace server.Controllers
{
    [Route("api/upload")]
    [ApiController]
    public class UploadController : Controller
    {
        private readonly IAmazonS3 _s3Client;
        private const string bucketName = "bookimage-bucket";

        public UploadController()
        {
            _s3Client = new AmazonS3Client(RegionEndpoint.USEast2);
        }
        

        [HttpPost("image")]
        public async Task<IActionResult> UploadImage(IFormFile file,[FromQuery] string isbn)
        {
            if (file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            if (string.IsNullOrWhiteSpace(isbn))
            {
                return BadRequest("ISBN is required.");
            }

            try
            {
                var s3Key = $"images/{isbn}";

                var stream = file.OpenReadStream();
                var putRequest = new PutObjectRequest
                {
                    InputStream = stream,
                    BucketName = bucketName,
                    Key = s3Key,
                    ContentType = file.ContentType
                };
                
                PutObjectResponse response2 = await _s3Client.PutObjectAsync(putRequest);
                return Ok(new { message = "Upload successful", isbn });

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
