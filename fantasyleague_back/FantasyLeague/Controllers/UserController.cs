using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;
using Fantasy_League.Models;
using FantasyLeague.Services;
using Microsoft.AspNetCore.Identity;
using FantasyLeague.Models.ViewModels;

namespace Fantasy_League.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserService _authService;
        //private readonly UserManager<Users> _userManager;
        public UserController(AppDbContext context, IUserService authService)
        {
            _authService = authService;

        }


        [HttpPost("Login")]
        public IActionResult Login([FromBody] LoginModel user)
        {
            if (user == null)
                return BadRequest("Invalid Request");

            var Token = _authService.AuthenticateUser(user);
            if (Token==null || String.IsNullOrEmpty(Token.Token))
            {
                return Ok();
            }
            else
            {
                return Ok(Token);
            }

        }

        [HttpPost("Signup")]

        public IActionResult AddUser(RegisterModel model)
        {
            try
            {
                var res = _authService.RegisterUser(model);

                return Ok(res);
            }
            catch (Exception exc)
            {
                return BadRequest(exc);
            }
        }

        [HttpPost("SetUserPredictions")]
        public IActionResult SetUserPredictions(MatchPrediction prediction)
        {
            try
            {
                //var t = User?.Claims?.FirstOrDefault(c => c.Type.Equals(ClaimTypes.NameIdentifier, StringComparison.OrdinalIgnoreCase))?.Value;
                //prediction.user_id = userId;
                var res = _authService.SetUserPredictions(prediction);
                return Ok(new
                {
                    res
                });
            }
            catch (Exception exc)
            {
                return BadRequest(exc);
            }
        }
        [HttpPost("UserLeaderBoard")]
        public IActionResult UserLeaderBoard(RequestModel req)
        {
            try
            {
                var res = _authService.UserLeaderBoard(req);
                return Ok(res);
            }
            catch (Exception exc)
            {
                return BadRequest(exc);
            }
        }
        [HttpPost("ResetPassword")]
        public IActionResult ResetPassword(Users user)
        {
            try
            {
                var res = _authService.ResetPassword(user);
                return Ok(res);
            }
            catch (Exception exc)
            {
                return BadRequest(exc);
            }
        }

        [HttpGet("GetUserPredictions/{user_id}/{match_id}")]
        public IActionResult GetUserPredictions(int user_id, int match_id)
        {
            try
            {
                var res = _authService.GetUserPredictions(user_id, match_id);
                return Ok(res);
            }
            catch (Exception exc)
            {
                return BadRequest(exc);
            }
        }

        [HttpPost("UpdatePassword")]
        public IActionResult UpdatePassword(ResetPasswordModel user)
        {
            try
            {
                var res = _authService.UpdatePassword(user);
                return Ok(res);
            }
            catch (Exception exc)
            {
                return BadRequest(exc);
            }
        }
    }
}
