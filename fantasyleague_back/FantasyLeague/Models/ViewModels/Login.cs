using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fantasy_League.Models
{
    public class LoginModel
    {
        [Key]
        [Required]
        public string email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string password { get; set; }
    }
    public class RegisterModel : LoginModel
    {
        
        public string firstname { get; set; }
        public string lastname { get; set; }

        public string username { get; set; }

    }
}
