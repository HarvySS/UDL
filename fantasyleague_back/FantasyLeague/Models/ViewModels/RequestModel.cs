using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantasyLeague.Models.ViewModels
{
    public class RequestModel
    {
        public int Page { get; set; }
        public int Size { get; set; }
        public string Search { get; set; }
    }
}
