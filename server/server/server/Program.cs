using Amazon;
using Amazon.S3;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddAWSService<IAmazonS3>();

var awsOptions = builder.Configuration.GetSection("AWS");
builder.Services.AddSingleton<IAmazonS3>(sp =>
    new AmazonS3Client(
        awsOptions["AccessKey"],
        awsOptions["SecretKey"],
        RegionEndpoint.GetBySystemName(awsOptions["Region"])
    )
);

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "SimpleAPI", Version = "v1" });
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                .AllowAnyHeader() 
                .AllowAnyMethod(); 
        });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

//if (app.Environment.IsDevelopment())
//{
  //  app.UseDeveloperExceptionPage();
    //app.UseSwagger();
    //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SimpleAPI v1"));
//}

app.UseRouting();

app.UseAuthorization();
app.MapControllers();

app.Run();