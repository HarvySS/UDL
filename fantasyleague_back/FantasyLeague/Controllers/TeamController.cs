using Fantasy_League.Models;
using FantasyLeague.Models.ViewModels;
using FantasyLeague.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantasyLeague.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly ITeamService _teamService;
        public TeamController(ITeamService teamService)
        {
            _teamService = teamService;
        }
        [HttpPost("GetAllTeams")]
        public IActionResult GetAllTeams(RequestModel req)
        {
            try
            {
                var res = _teamService.GetAllTeams(req);

                return Ok(new
                {
                    res.Data,
                    res.IsSuccess
                });
            }
            catch (Exception exc)
            {
                return BadRequest(exc);
            }
        }

       
    }
}
