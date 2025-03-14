using Microsoft.AspNetCore.Mvc;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using System;
namespace server.Controllers;

public class GenPresignedUrl : Controller
{
    static async Task Main(string[] args)
    {
        string bucketName = "bookimage-bucket";
        string objectKey = "9780743273565.jpg";
        int expiryDuration = 3600; // 1 hour

        string presignedUrl = await GeneratePresignedUrlAsync(bucketName, objectKey, expiryDuration);
        Console.WriteLine("Presigned URL: " + presignedUrl);
    }

    static async Task<string> GeneratePresignedUrlAsync(string bucketName, string objectKey, int expiryDuration)
    {
        string urlString = string.Empty;
        using var s3Client = new AmazonS3Client(RegionEndpoint.USEast2);

        try
        {
            var request = new GetPreSignedUrlRequest
            {
                BucketName = bucketName,
                Key = objectKey,
                Expires = DateTime.UtcNow.AddSeconds(expiryDuration),
                Verb = HttpVerb.GET // Can be PUT for uploads
            };
            urlString = s3Client.GetPreSignedURL(request);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return urlString;
    }
}