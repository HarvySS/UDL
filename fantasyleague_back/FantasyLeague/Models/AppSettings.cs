using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantasyLeague.Models
{
    public class AppSettings
    {
        public string SenderEmailAddress { get; set; }
        public string SenderEmailPassword { get; set; }
        public string SenderSMTPServer { get; set; }
        public int Port { get; set; }
        public bool IsSsl { get; set; }
        public bool IsLive { get; set; }
        public string DisplayName { get; set; }
        public string SecurityKey { get; set; }
        public string FrontendUrl { get; set; }
        public string apiUrl { get; set; }
        public string CypherKey { get; set; }
    }
}
