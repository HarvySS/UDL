using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fantasy_League.Models;
using FantasyLeague.Models.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace FantasyLeague.Services
{

    public interface IAdminPanel
    {
        public ResponseModel GetUsers(RequestModel req);
        public ResponseModel DeleteUser(int id);

        public ResponseModel EditUsers(int id);
        public ResponseModel UpdateUser(Users users);
        
        public ResponseModel GetAlldata(int pageNumber, int pageSize);
    }


    public class AdminPanelService : IAdminPanel
    {
        private readonly AppDbContext _context;
        public AdminPanelService(AppDbContext context)
        {
            _context = context;
        }


        public ResponseModel GetUsers(RequestModel req)
        {
            var data = _context.Users.Where(x => x.is_active == true).Select(x => new
            {
                x.id,
                x.first_name,
                x.last_name,
                x.email

            });
            return new ResponseModel
            {
                Data = data,
                IsSuccess = true
            };


        }

        public ResponseModel DeleteUser(int id)
        {
            var a = _context.Users.FirstOrDefault(x => x.id == id);

            if (a != null)
            {
                a.is_active = false;
                _context.SaveChanges();
                return new ResponseModel
                {
                    IsSuccess = true
                };
            }

            else
            {
                return new ResponseModel
                {
                    IsSuccess = false
                };
            }
        }

        public ResponseModel EditUsers(int id)
        {
            var edit = _context.Users.Where(x => x.id == id).FirstOrDefault();
            return new ResponseModel
            {
                IsSuccess = true,
                Data = edit
            };
        }

        public ResponseModel UpdateUser(Users users)
        {
            if (users == null)
            {
                return new ResponseModel
                {
                    IsSuccess = false,
                };
            }

            var a = _context.Users.FirstOrDefault(x => x.id == users.id);
            if (a != null)
            {

                a.first_name = users.first_name;
                a.last_name = users.last_name;
                a.updated_by = 1;
                a.updated_date = DateTime.Now;
                //_context.Users.Update(users);
                _context.SaveChanges();
                return new ResponseModel
                {
                    IsSuccess = true,
                };

            }
            else
            {
                return new ResponseModel
                {
                    IsSuccess = false,
                };
            }
        }

        public ResponseModel GetAlldata(int pageNumber, int pageSize)
        {
            var data = _context.Users.Where(x=>x.is_active).OrderBy(x => x.id).Skip((pageNumber) * pageSize).Take(pageSize).ToList();
            return new ResponseModel { Data = data, TotalCount = _context.Users.Where(x => x.is_active).Count(), IsSuccess = true };

        }



    }
}

