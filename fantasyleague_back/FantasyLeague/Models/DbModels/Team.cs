using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fantasy_League.Models
{
    public class Team
    {
        [Key]
        public int team_id { get; set; }

        public string team_name { get; set; }

        public string logo_path { get; set; }

        public string description { get; set; }

        public string page_content { get; set; }

        public bool is_active { get; set; }

        public DateTime created_date { get; set; }

        public int created_by { get; set; }

        public DateTime? updated_date { get; set; }

        public int? updated_by { get; set; }

        public DateTime? deleted_date { get; set; }

        public int? deleted_by { get; set; }
        //public virtual List<Match> Matches1 { get; set; }
    }
}
