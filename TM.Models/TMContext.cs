using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using TM.Models.Entities;

namespace TM.Models
{
    public partial class TMContext : DbContext
    {
        public virtual DbSet<Board> Board { get; set; }

        public TMContext(DbContextOptions<TMContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Board>(entity =>
            {
                entity.Property(e => e.Title).IsRequired();
            });
        }
    }
}