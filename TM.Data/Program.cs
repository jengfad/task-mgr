using System;
using TM.Data.Model;
using TM.Data.Repositories;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace TM.Data
{
    class Program
    {
        static void Main(string[] args)
        { 

            Console.WriteLine("Starting run");
            //setup our DI
            var services = new ServiceCollection()

            .AddSingleton<IDataAccess< Board, int >, DataAccessRepository>()
            .BuildServiceProvider();
            Console.WriteLine("Configuring services done");

            var bar = services.GetService<IDataAccess< Board, int >>();
            Console.WriteLine("After configuring bar");

            bar.AddBoard(new Board(){Title = "huhubels"});
            
            Console.WriteLine("success");
            Console.ReadLine();
        }

    }
}