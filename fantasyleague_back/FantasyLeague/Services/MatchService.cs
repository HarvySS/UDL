using Fantasy_League.Models;
using FantasyLeague.Models;
using FantasyLeague.Models.ViewModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace FantasyLeague.Services
{
    public interface IMatchService
    {

        public ResponseModel GetAllMatches(RequestModel req);
        //public ResponseModel Match();
        public ResponseModel TeamGoals();
    }
    public class MatchService : IMatchService
    {
        private readonly AppDbContext _context;
        private readonly ICommon _common;
        private readonly AppSettings _appSettings;
        public MatchService(AppDbContext context, IOptions<AppSettings> settings, ICommon common)
        {
            _context = context;
            _common = common;
            _appSettings = settings.Value;
        }
        /// <summary>
        /// method is used to get current and previous seasom matches 
        /// </summary>
        /// <param name="req">this parameter is used for pagination</param>
        /// <returns></returns>
        public ResponseModel GetAllMatches(RequestModel req)
        {
            //var data = _context.Match.Where(x => x.is_active).Select(x => new
            //{
            //    x.match_id,
            //    x.is_draw,
            //    x.match_date,
            //    x.team1_goals,
            //    x.Team1_id,
            //    x.team1_points,
            //    x.team2_goals,
            //    x.Team2_id,
            //    x.team2_points,
            //    x.won_id,
            //    x.team2,
            //    x.team1
            //}).Skip(req.Page * req.Size).Take(req.Size).ToList();
            var data = _context.Match.Where(x => x.is_active && x.Season.start_date <= DateTime.Now).Select(x => new
            {
                x.match_id,
                x.is_draw,
                x.match_date,
                x.team1_goals,
                x.Team1_id,
                x.team1_points,
                x.team2_goals,
                x.Team2_id,
                x.team2_points,
                x.won_id,
                x.team2,
                x.team1
            });
            return new ResponseModel
            {
                Data = data,
                IsSuccess = true
            };
        }
        //public ResponseModel GetLeaderBoard(RequestModel req)
        //{
        //    var data = _context.Match.Where(x => x.is_active).Select(x => new
        //    {
        //        x.match_id,
        //        x.is_draw,
        //        x.match_date,
        //        x.team1_goals,
        //        x.Team1_id,
        //        x.team1_points,
        //        x.team2_goals,
        //        x.Team2_id,
        //        x.team2_points,
        //        x.won_id,
        //        team1 = _context.Team.FirstOrDefault(y => y.is_active && y.team_id == x.Team1_id),
        //        team2 = _context.Team.FirstOrDefault(y => y.is_active && y.team_id == x.Team2_id),
        //    }).Skip(req.Page * req.Size).Take(req.Size).ToList();
        //    return new ResponseModel
        //    {
        //        Data = data,
        //        IsSuccess = true
        //    };
        //}


        //public ResponseModel Match()
        //{

        //    var random = new Random();
        //    List<Team> list = _context.Team.ToList();
        //    Dictionary<int, List<Team>> d = new Dictionary<int, List<Team>> { };
        //    var count = list.Count();
        //    for (int i = 0; i < count / 2; i++)
        //    {
        //        List<Team> temp = new List<Team>();
        //        int index1 = random.Next(list.Count);
        //        temp.Add(list[index1]);
        //        list.RemoveAt(index1);
        //        int index2 = random.Next(list.Count);
        //        temp.Add(list[index2]);
        //        list.RemoveAt(index2);
        //        d.Add(i, temp);
        //    }

        //    return new ResponseModel
        //    {
        //        //Data = list.OrderBy(t => random.Next()).Chunk(2),
        //        Data = d.Values,
        //        IsSuccess = true
        //    };
        //}
        /// <summary>
        /// this method is used to get randomly generated goals and set points to specific match
        /// </summary>
        /// <param name="match">Match parameter to generate random goals and update the points to this match</param>
        /// <returns>updated match with auto generated goals and points</returns>
        public Match getRandomGoals(Match match)
        {
            Random random = new Random();
            int team1goals = random.Next(0, 5);
            int team2goals = random.Next(0, 5);
            int diff = team1goals - team2goals;
            match.team1_goals = team1goals;
            match.team2_goals = team2goals;

            if (team1goals > team2goals)
            {
                match.team1_points = 3;
                match.team2_points = 0;
                match.is_draw = false;
                match.won_id = match.Team1_id;
            }

            if (team1goals < team2goals)
            {

                match.team2_points = 3;
                match.team1_points = 0;
                match.is_draw = false;
                match.won_id = match.Team2_id;

            }

            if (team1goals == team2goals)
            {
                match.team1_points = 1;
                match.team2_points = 1;
                match.is_draw = true;
                match.won_id = 0;
            }
            return match;
        }
        /// <summary>
        /// this method is used to update user points. Whenever a match completed each user points will be updated who have predicted on a specific match
        /// </summary>
        /// <param name="match">match parameter from which users points are calculated</param>
        /// <param name="prediction">prediction parameter to update user prediction</param>
        /// <returns>returns updated prediction</returns>
        public MatchPrediction UpdateUserPredictions(Match match, MatchPrediction prediction)
        {
            if (prediction.user_team1_score == match.team1_goals && prediction.user_team2_score == match.team2_goals)
            {
                prediction.user_points = 10;

            }
            else if ((match.team1_goals > match.team2_goals && prediction.user_team1_score > prediction.user_team2_score) || (match.team2_goals > match.team1_goals && prediction.user_team2_score > prediction.user_team1_score))
            {
                prediction.user_points = 5;
            }
            else
            {
                prediction.user_points = 0;
            }
            //get HTML template
            var mail = _common.GeTemplate("wwwroot/Templates/ReminderEmail.html");
            //repalce fields from template
            mail = mail.Replace("{{name}}", prediction.User.first_name + " " + prediction.User.last_name);
            mail = mail.Replace("{{frontendUrl}}", _appSettings.FrontendUrl);
            mail = mail.Replace("{{apiUrl}}", _appSettings.apiUrl);
            _common.SendSupportMail(prediction.User.email, "Results Has Been Generated", mail, "");

            return prediction;
        }
        /// <summary>
        /// this method is used to randomly generate results for each match before specific date, and also updates the user and team points
        /// </summary>
        /// <returns>returns success true/false</returns>
        public ResponseModel TeamGoals()
        {
            var db_matches = _context.Match.Where(x => x.match_date <= DateTime.Now && x.is_active == true && x.won_id == null && x.is_draw == null && x.team1_goals == null && x.team2_goals == null).ToList();
            foreach (var match in db_matches)
            {
                var result_match = getRandomGoals(match);
                while (Math.Abs(result_match.team1_goals.Value - result_match.team2_goals.Value) >= 3)
                {
                    result_match = getRandomGoals(match);
                }

                if (result_match.team1_goals == 4 && result_match.team2_goals == 4 || result_match.team1_goals == 5 && result_match.team2_goals == 5)
                {
                    result_match = getRandomGoals(match);
                }

                var userPredictions = _context.MatchPrediction.Include("User").Where(x => x.match_id == match.match_id).ToList();
                foreach (var pr in userPredictions)
                {
                    UpdateUserPredictions(match, pr);
                }
            }

            _context.SaveChanges();
            return new ResponseModel
            {
                IsSuccess = true
            };
        }
        /// <summary>
        /// this method is used to send email whenever the prediction is updated for specific user
        /// </summary>
        /// <param name="to">user email</param>
        /// <param name="subject">email subjet</param>
        /// <param name="msg">email body</param>
        /// <param name="cc">email parameter for Carbon Copy mils. (not mendatory)</param>
        public void SendReminderEmail(string to, string subject, string msg, string cc)
        {
            try
            {

                string SenderEmailAddress = _appSettings.SenderEmailAddress;
                string SenderEmailPassword = _appSettings.SenderEmailPassword;
                string SenderSMTPServer = _appSettings.SenderSMTPServer;
                int Port = Convert.ToInt32(_appSettings.Port);
                bool IsSsl = Convert.ToBoolean(_appSettings.IsSsl);
                string DisplayName = _appSettings.DisplayName;
                bool IsLive = Convert.ToBoolean(_appSettings.IsLive);
                MailMessage message = new MailMessage();
                string[] addresses = to.Split(';');
                foreach (string address in addresses)
                {
                    message.To.Add(new MailAddress(address));
                }
                if (IsLive == false)
                {

                }
                message.From = new MailAddress(SenderEmailAddress, DisplayName);
                message.Subject = subject;
                message.Body = msg;
                message.IsBodyHtml = true;
                SmtpClient client = new SmtpClient();
                client.Host = SenderSMTPServer;
                if (Port > 0)
                    client.Port = Port;
                client.UseDefaultCredentials = false;
                System.Net.NetworkCredential nc = new System.Net.NetworkCredential(SenderEmailAddress, SenderEmailPassword);
                client.EnableSsl = IsSsl;
                client.Credentials = nc;
                client.Send(message);
            }

            catch (Exception ex)
            {
                throw ex;
            }


        }
            }
    }
