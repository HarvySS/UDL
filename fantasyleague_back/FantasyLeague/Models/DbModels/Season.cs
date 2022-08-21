using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Fantasy_League.Models
{
    public class Season
    {
        [Key]
        public int season_id { get; set; }
        public DateTime start_date { get; set; }
        public int end_date { get; set; }
        public string season_name { get; set; }
        public virtual ICollection<Match> Matches  { get; set; }
    }
}
