using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TM.Repository.Contracts;
using TM.Models.Entities;

namespace TM.API.Controllers
{
    [Route("api/[controller]")]
    public class BoardController : Controller
    {
        IBaseRepository<Board> _boardRepo;
        // GET api/board
        public BoardController(IBaseRepository<Board> b)
        {
            _boardRepo = b;
        }

        [HttpGet]
        public IQueryable<Board> Get()
        {
            var boards = _boardRepo.GetAll();

            return boards;
        }

        // GET api/board/5
        [HttpGet("{id}")]
        public Board Get(int id)
        {
            var board = _boardRepo.Get(id);
            return board;
        }

        // POST api/board
        [HttpPost]
        public int Post([FromBody]Board board)
        {
            _boardRepo.Add(board);
            return board.Id;
        }

        // PUT api/board/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/board/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
