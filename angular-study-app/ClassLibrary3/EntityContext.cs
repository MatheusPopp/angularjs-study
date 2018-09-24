using System;
using System.Collections.Generic;
using System.Text;
using Angular.Study.Entity;
using Microsoft.EntityFrameworkCore;

namespace Angular.Study.DataAccess {

    public class EntityContext : DbContext {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Anotacao> Anotacoes { get; set; }


        public EntityContext(DbContextOptions<EntityContext> options) : base(options) {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>().HasKey(p => p.Id);
            modelBuilder.Entity<Anotacao>().HasKey(p => p.Id);


        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }


    }
}
