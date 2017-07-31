using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
// using TM.Data.Model;
// using TM.Data.Repositories;

using TM.Models;
using TM.Models.Entities;
using TM.Repository.Contracts;
using TM.Repository.Repositories;

namespace TM.Data
{
    class Program
    {
        private static IConfigurationRoot Configuration { get; set; }

        static void Main(string[] args)
        { 
            
            Console.WriteLine("Start Run");

#region Configuration Settings
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            Configuration = builder.Build();

#endregion

            var services = new ServiceCollection()
            .AddDbContext< TMContext >(opts=>
            opts.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")))
            //.AddSingleton<IDataAccess< Board, int >, DataAccessRepository>()
            .AddSingleton(typeof(IBaseRepository<>), typeof(BaseRepository<>))
            .BuildServiceProvider();

            Console.WriteLine("Done services config");

            var bar = services.GetService<IBaseRepository<Board>>();
            Console.WriteLine("After configuring bar");
            
            bar.Add(new Board(){Title = "test 123"});

            var boards = bar.GetAll();
            foreach(var item in boards)
            {
                Console.WriteLine("Title: {0}", item.Title);
            }

            Console.WriteLine("end run");
        }

    }
}