using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantasyLeague.Models.ViewModels
{
    public class ResetPasswordModel
    {
        public string Password { get; set; }
        public string Token { get; set; }
    }
}
