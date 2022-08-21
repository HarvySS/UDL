using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fantasy_League.Models
{
    public class Users
    {
        [Key]
        public int id { get; set; }

        public string first_name { get; set; }

        public string last_name { get; set; }

        public string user_name { get; set; }

        public string email { get; set; }

        public string password { get; set; }
        public string? role_id { get; set; }

        public bool is_active { get; set; }

        public DateTime? created_date { get; set; }

        public int created_by { get; set; }

        public DateTime? updated_date { get; set; }

        public int? updated_by { get; set; }

        public DateTime? deleted_date { get; set; }

        public int? deleted_by { get; set; }

        public string reset_token { get; set; }

        public DateTime? token_expiry { get; set; }
        
        public ICollection<MatchPrediction> matchPredictions { get; set; }
    }
}
