using System.Collections.Generic;
using System.Linq;
using TM.Data.Model;

namespace TM.Data.Repositories
{
    public interface IDataAccess< TEntity,U > where TEntity : class
    {
        IEnumerable< TEntity > GetBoards();
        TEntity GetBoard(U id);
        int AddBoard(TEntity b);
        int UpdateBoard(U id,TEntity b);
        int DeleteBoard(U id); 
    }

    public class DataAccessRepository : IDataAccess< Board, int >
    {
        TMContext ctx;

        public DataAccessRepository(TMContext c)
        {
            ctx = c;
        }

        public int AddBoard(Board b)
        {
            ctx.Board.Add(b);
            int res = ctx.SaveChanges();
            return res;
        }
 
        public int DeleteBoard(int id)
        {
            int res = 0;
            var board = ctx.Board.FirstOrDefault(b => b.Id == id);
            if (board != null)
            {
                ctx.Board.Remove(board);
                res = ctx.SaveChanges();
            }
            return res;
        }
 
        public Board GetBoard(int id)
        {
            var board = ctx.Board.FirstOrDefault(b=>b.Id==id);
            return board;
        }
 
        public IEnumerable< Board > GetBoards()
        {
            var boards = ctx.Board.ToList();
            return boards;
        }
 
        public int UpdateBoard(int id,Board b)
        {
            int res = 0;
            var board = ctx.Board.Find(id);
            if (board != null)
            {
                board.Title = b.Title;
                res = ctx.SaveChanges();
            }
            return res;
        }
    }
}