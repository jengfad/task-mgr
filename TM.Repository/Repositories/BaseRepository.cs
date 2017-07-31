using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using TM.Repository.Contracts;
using TM.Models;

namespace TM.Repository.Repositories
{
    public class BaseRepository<T> : IBaseRepository <T> where T : class
    {
        protected readonly DbContext Context;
        protected DbSet<T> DbSet;

        public BaseRepository(TMContext context)
        {
            Context = context;
            DbSet = context.Set<T>();
        }

        public void Add(T entity)
        {
            Context.Set<T>().Add(entity);

            Save();
        }

        public void Delete(T entity)
        {
            Context.Set<T>().Remove(entity);
            Save();
        }

        public T Get<TKey>(TKey id)
        {
            return DbSet.Find(id);
        }

        public IQueryable<T> GetAll()
        {
            return DbSet;
        }

        public void Update(T entity)
        {
            Save();
        }

        private void Save()
        {
            Context.SaveChanges();
        }
    }

}