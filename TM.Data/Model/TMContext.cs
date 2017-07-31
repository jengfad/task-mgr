using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TM.Data.Model
{
    public partial class TMContext : DbContext
    {
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

        public virtual DbSet<Board> Board { get; set; }
    }
}