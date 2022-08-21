using Fantasy_League.Models;
using FantasyLeague.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace FantasyLeague.Services
{
    public interface IMatchPrediction
    {
        public ResponseModel userprediction();
    }

    public class MatchPredictionService : IMatchPrediction
    {
        private readonly AppDbContext _context;

        public ResponseModel userprediction()
        {
            //var userid = User.FindFirst(ClaimTypes.Sid).Value;


            return new ResponseModel
            {

            };
        }
    }
}
