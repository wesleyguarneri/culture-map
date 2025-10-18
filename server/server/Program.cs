using Amazon.S3;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// AWS SDK setup 
builder.Services.AddDefaultAWSOptions(builder.Configuration.GetAWSOptions());
builder.Services.AddAWSService<IAmazonS3>();

builder.Services.AddControllers();

// Register connection string 
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddSingleton(connectionString);

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "SimpleAPI", Version = "v1" });
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                "https://www.writtenworld.net",
                "http://localhost:3000",
                "http://127.0.0.1:3000",
                "https://thewrittenworld.vercel.app"
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var port = Environment.GetEnvironmentVariable("PORT") ?? "5050";
builder.WebHost.ConfigureKestrel(options =>
{
    var port = Int32.Parse(Environment.GetEnvironmentVariable("PORT") ?? "5050");
    options.ListenAnyIP(port); 
});


var app = builder.Build();

app.UseSwagger(); // optional: enable always
app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SimpleAPI v1"));

app.UseRouting();
app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers().RequireCors("AllowFrontend");

app.MapGet("/health", () => Results.Ok("Healthy"));
app.MapGet("/", () => "App is working!");

app.Run();
