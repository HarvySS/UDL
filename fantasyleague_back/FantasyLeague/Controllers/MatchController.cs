using Fantasy_League.Models;
using FantasyLeague.Models.ViewModels;
using FantasyLeague.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;

namespace FantasyLeague.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatchController : ControllerBase
    {

        private readonly IMatchService _matchService;
        public MatchController(IMatchService matchService)
        {
            _matchService = matchService;
        }
        [HttpPost("GetAllMatches")]
        public IActionResult GetAllMatches(RequestModel req)
        {
            try
            {
                var res = _matchService.GetAllMatches(req);

                return Ok(res);
            }
            catch (Exception exc)
            {
                return BadRequest(exc);
            }
        }


        //[HttpGet("Match")]
        //public IActionResult Match()
        //{
            
        //    var res= _matchService.Match();
        //    return Ok(res);
        //}

        [HttpGet("TeamGoals")]
        public IActionResult TeamGoals()
        {
            
                var res = _matchService.TeamGoals();

            return Ok(res);
            
            
        }



    }
}
