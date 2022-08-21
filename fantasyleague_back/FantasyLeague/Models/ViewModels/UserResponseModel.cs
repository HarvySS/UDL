using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantasyLeague.Models.ViewModels
{
    public class UserModel
    {
        public int UserId { get; set; }
        public string Email { get; set; }
    }
    public class UserResponse
    {
        public string Token { get; set; }
        public UserModel user { get; set; }
    }
}
