using System.Collections.Generic;  
using System.Linq;

namespace TM.Repository.Contracts {  
    public interface IBaseRepository < T > 
    {  
        T Get<TKey>(TKey id);
        IQueryable<T> GetAll();
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);  
    }  
}  