using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantasyLeague.Models.ViewModels
{
    public class ResponseModel
    {
        public bool IsSuccess { get; set; }
        public Object Data { get; set; }
        public string Message { get; set; }
        public int TotalCount { get; set; }
    }
}
