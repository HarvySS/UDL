using Fantasy_League.Models;
using FantasyLeague.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantasyLeague.Services
{
    public interface ITeamService
    {
        public ResponseModel GetAllTeams(RequestModel req);

    }
    public class TeamService : ITeamService
    {
        private readonly AppDbContext _context;
        public TeamService(AppDbContext context)
        {
            _context = context;
        }
        /// <summary>
        /// get teams leaderboard for current and previous seasons
        /// </summary>
        /// <param name="req">this parameter is used for pagination</param>
        /// <returns></returns>
        public ResponseModel GetAllTeams(RequestModel req)
        {
            var seasons = _context.Season.Where(x=>x.start_date<=DateTime.Now).Select(y => y.season_name).ToList();
            if (string.IsNullOrEmpty(req.Search))
                req.Search = seasons.First();
            var teams = _context.Team.Where(x => x.is_active).Select(x => new
            {
                x.team_id,
                x.description,
                x.logo_path,
                x.page_content,
                x.team_name,
                w = _context.Match.Where(y => y.won_id == x.team_id && y.is_active && (string.IsNullOrEmpty(req.Search) || y.Season.season_name.Trim().ToLower() == req.Search.Trim().ToLower())).Count(),
                d = _context.Match.Where(y => y.won_id == 0 && y.is_draw == true && (y.Team1_id == x.team_id || y.Team2_id == x.team_id) && y.is_active && (string.IsNullOrEmpty(req.Search) || y.Season.season_name.Trim().ToLower() == req.Search.Trim().ToLower())).Count(),
                L = _context.Match.Where(y => y.won_id != null && y.won_id != x.team_id && y.won_id != 0 && (y.Team1_id == x.team_id || y.Team2_id == x.team_id) && y.is_active && (string.IsNullOrEmpty(req.Search) || y.Season.season_name.Trim().ToLower() == req.Search.Trim().ToLower())).Count(),
                mp = _context.Match.Where(y => (y.Team1_id == x.team_id || y.Team2_id == x.team_id) && y.is_active && (string.IsNullOrEmpty(req.Search) || y.Season.season_name.Trim().ToLower() == req.Search.Trim().ToLower()) && (y.is_draw == true || y.won_id != null || y.match_date < DateTime.Now)).Count(),
                pts = _context.Match.Where(y => (y.Team1_id == x.team_id || y.Team2_id == x.team_id) && y.is_active && (string.IsNullOrEmpty(req.Search) || y.Season.season_name.Trim().ToLower() == req.Search.Trim().ToLower()) && (y.is_draw == true || y.won_id != null || y.match_date < DateTime.Now)).Sum(y => (y.is_draw == true ? 1 : (y.won_id == x.team_id ? 3 : 0))),
            }).OrderByDescending(x => x.pts).ToList();
            return new ResponseModel
            {
                Data = new { teams, seasons, selectedSeason = req.Search },
                IsSuccess = true
            };
        }


    }
}
