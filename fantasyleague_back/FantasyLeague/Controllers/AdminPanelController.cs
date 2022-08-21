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
    public class AdminPanelController : ControllerBase
    {
        private readonly IAdminPanel _adminpanelservice;
        public AdminPanelController(IAdminPanel adminPanel)
        {
            _adminpanelservice = adminPanel;

        }

        [HttpGet("Get_User")]

        public IActionResult GetUsers(RequestModel req)
        {

            var res = _adminpanelservice.GetUsers(req);
            return Ok(res);
        }

        [HttpDelete("deleteuser/{id}")]

        public IActionResult deleteuser(int id)
        {
            var res = _adminpanelservice.DeleteUser(id);
            return Ok(res);
        }



        [HttpGet("edituser/{id}")]

        public IActionResult edituser(int id)
        {
            var res = _adminpanelservice.EditUsers(id);
            return Ok(res);
        }

        [HttpPost("updateuser")]

        public IActionResult updateuser(Users users)
            {
            var res = _adminpanelservice.UpdateUser(users); 
            return Ok(res);
        }

        

        [HttpGet("pagination/{pageNumber}/{pageSize}")]
        public IActionResult GetAlldata(int pageNumber, int pageSize)
        {
            var res = _adminpanelservice.GetAlldata(pageNumber,pageSize);
            return Ok(res);
        }

    }
}
