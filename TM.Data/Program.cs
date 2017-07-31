using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using TM.Data.Model;
using TM.Data.Repositories;

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
            .AddSingleton<IDataAccess< Board, int >, DataAccessRepository>()
            .BuildServiceProvider();

            Console.WriteLine("Done services config");

            var bar = services.GetService<IDataAccess< Board, int >>();
            Console.WriteLine("After configuring bar");

            bar.AddBoard(new Board(){Title = "kat edison"});

            Console.WriteLine("end run");
            Console.ReadLine();
        }

    }
}