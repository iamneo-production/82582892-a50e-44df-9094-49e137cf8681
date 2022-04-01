using Academy_Backend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Academy_Backend.Controllers
{
    [Route("admin/users/")]
    [ApiController]
    public class UserModalController : ControllerBase
    {
        private readonly Academy_BackendContext _context;
        public UserModalController(Academy_BackendContext context)
        {
            _context = context;
        }

        [HttpPost("CheckUser")]
        public async Task<IActionResult> CheckUser(string email){
            var user = await _context.UserModals.FindAsync(email);
            if(user != null){
                return Ok(new {check = 1 , Id = user.Id});
            }
            return Ok(new {check = 0});
        }

        // GET: api/<UserModalController>
        [HttpGet("getUsers")]
        public async Task<IEnumerable<UserModal>> Get()
        {
            return await _context.UserModals.ToListAsync();
        }

        // GET api/<UserModalController>/5
        [HttpGet("getUser/email")]
        public async Task<IActionResult> GetUser(string email)
        {
            var user = await _context.UserModals.FindAsync(email);
            if (user != null)
            {
                return Ok(new { StatusCode = 200, Userss = user });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "User Not Found"
            });
        }

        // POST api/<UserModalController>
        [HttpPost("addAdmission")]
        public async Task<IActionResult> Post([FromBody] UserModal user)
        {
            if (user == null)
            {
                return BadRequest(new
                {
                    Message = "Invalid Data"
                });
            }
            else
            {
                await _context.UserModals.AddAsync(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "User Added Successufully"
                });
            }
        }


        // PUT api/<UserModalController>/5
        [HttpPut("editAdmission/Email")]
        public async Task<IActionResult> Put(string email, [FromBody] UserModal users)
        {
            if (users == null)
            {
                return BadRequest();
            }
            else
            {
                var user = await _context.UserModals.AsNoTracking().FirstOrDefaultAsync(e => e.Email.Equals(email));
                if (user == null)
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "User not found",
                    });
                }
                else
                {
                    _context.Entry(users).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "User Updated Successfully"
                    });
                }
            }
        }

        // DELETE api/<UserModalController>/5
        [HttpDelete("deleteAdmission/Email")]
        public async Task<IActionResult> Delete(string email)
        {
            var user = await _context.UserModals.FindAsync(email);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User Not Found",
                });
            }
            else
            {
                _context.UserModals.Remove(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "User Deleted"
                });
            }
        }
    }
}
