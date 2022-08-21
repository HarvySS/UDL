using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fantasy_League.Models
{
    public class MatchPrediction
    {
        [Key]
        public int match_prediction_id { get; set; }
        
        public int user_id { get; set; }

        public int match_id { get; set; }

        public int? user_team1_score { get; set; }

        public int? user_team2_score { get; set; }

        public int user_points { get; set; }

        public DateTime prediction_date { get; set; }

        public bool is_active { get; set; }

        public DateTime created_date { get; set; }

        public int created_by { get; set; }

        public DateTime? updated_date { get; set; }

        public int? updated_by { get; set; }

        public DateTime? deleted_date { get; set; }

        public int? deleted_by { get; set; }
        [ForeignKey("user_id")]
        public virtual Users User { get; set; }
    }
}
