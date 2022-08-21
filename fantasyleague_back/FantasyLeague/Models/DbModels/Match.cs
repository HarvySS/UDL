using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fantasy_League.Models
{
    public class Match
    {
        [Key]
        public int match_id { get; set; }
        public string season { get; set; }
        public int Team1_id { get; set; }

        public int Team2_id { get; set; }

        public DateTime match_date { get; set; }

        public int? team1_goals { get; set; }

        public int? team2_goals { get; set; }

        public int? won_id { get; set; }

        public bool? is_draw { get; set; }

        public int? team1_points { get; set; }

        public int? team2_points { get; set; }

        public bool is_active { get; set; }

        public DateTime created_date { get; set; }

        public int created_by { get; set; }

        public DateTime? updated_date { get; set; }

        public int? updated_by { get; set; }

        public DateTime? deleted_date { get; set; }
        public int season_id { get; set; }
        public int? deleted_by { get; set; }
        [ForeignKey("Team1_id")]
        public virtual Team team1 { get; set; }
        [ForeignKey("Team2_id")]
        public virtual Team team2 { get; set; }
        [ForeignKey("season_id")]
        public virtual Season Season { get; set; }

    }
}
