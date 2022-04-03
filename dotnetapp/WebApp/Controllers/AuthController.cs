using Academy_Backend.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Academy_Backend.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly Academy_BackendContext _context;
        public AuthController(Academy_BackendContext context)
        {
            _context = context;
        }

        [HttpGet("getUsers")]
        public IEnumerable<UserModal> Get()
        {
            return _context.UserModals.ToList();
        }

        // POST api/<AuthController>
        [HttpPost("User/Login")]
        public async Task<IActionResult> IsUserPresent( LoginModal data)
        {
            var user = await _context.UserModals.FindAsync(data.Email);

            if (user != null && data.Email.Equals(user.Email) && data.Password.Equals(user.Password))
            {
                if (user.UserRole == "Admin")
                {
                    return Ok(new 
                    { 
                        StatusCode = 200, 
                        Message = "Admin Authenticated", 
                        Allowed = true, UserRole = "admin", 
                        User = user.Username, 
                        Email = user.Email 
                    });
                }
                else if (user.UserRole == "User")
                {
                    return Ok(new 
                    { 
                        StatusCode = 200, 
                        Message = "User Authenticated", 
                        Allowed = true, 
                        UserRole = "user",
                       
                        User = user.Username, 
                        Email = user.Email 
                    });
                }
            }
            return BadRequest(new 
            { 
                StatusCode = 400, 
                Message = "User Not Available", 
                Allowed = false });
        }

        // POST api/<AuthController>
        [HttpPost("User/Signup")]
        public async Task<IActionResult> saveUser(UserModal data)
        {
            var user = await _context.UserModals.FindAsync(data.Email);

            if (user == null)
            {
                await _context.UserModals.AddAsync(data);
                _context.SaveChanges();

                return Ok(new { StatusCode = 200, Message = "User Added" });
            }
            return BadRequest(new { StatusCode = 400, Message = "Already a User Available" });
        }


    }
}