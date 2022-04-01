using Academy_Backend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Academy_Backend.Controllers
{
    
    [ApiController]
    public class InstituteModalController : ControllerBase
    {
        private readonly Academy_BackendContext _context;
        

        public InstituteModalController(Academy_BackendContext context)
        {
            _context = context;
        }
        // GET: api/<InstituteModalController>
        [HttpGet("admin/getInstitutes")]
        public IEnumerable<InstituteModal> Get()
        {
            return _context.InstituteModals.ToList();
        }

        // GET: api/<InstituteModalController>
        [HttpGet("user/getInstitutes")]
        public IEnumerable<InstituteModal> UserGet()
        {
            return _context.InstituteModals.ToList();
        }

        // GET api/<InstituteModalController>/5
        [HttpGet("admin/getInstitute/{id}")]
        public IActionResult GetInstitute(int id)
        {
            var institute = _context.InstituteModals.Find(id);
            if ( institute != null)
            {
                return Ok(new {
                    StatusCode = 200,
                    institutes = institute
                });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "Institute Not Found"
            });
        }

        // POST api/<InstituteModalController>
        [HttpPost("admin/addInstitute")]
        public IActionResult Post([FromBody] InstituteModal institute)
        {
            if(institute == null)
            {
                return BadRequest();
            }
            else
            {
                _context.InstituteModals.Add(institute);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Institute Added Successfully"
                });
            }
        }

        // PUT api/<InstituteModalController>/5
        [HttpPut("admin/editInstitue/{id}")]
        public IActionResult Put(int id, [FromBody] InstituteModal institute)
        {
            if (institute == null)
            {
                return BadRequest();
            }
            else
            {
                var user = _context.InstituteModals.AsNoTracking().FirstOrDefault(e => e.InstituteId == institute.InstituteId);
                if (user == null)
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "Institute not found",
                    });
                }
                else
                {
                    _context.Entry(institute).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Institute Updated Successfully"
                    });
                }
            }
        }

        // DELETE api/<InstituteModalController>/5
        [HttpDelete("admin/deleteInstitute/{id}")]
        public IActionResult Delete(int id)
        {
            var institute = _context.InstituteModals.Find(id);
                  if (institute == null)
                  {
                        return NotFound(new
                        {
                              StatusCode = 404,
                              Message = "Institute Not Found",
                        });
                  }
                  else
                  {
                        _context.InstituteModals.Remove(institute);
                        _context.SaveChanges();
                        return Ok(new
                        {
                              StatusCode = 200,
                              Message = "Institute Deleted"
                        });
                  }
        }
    }
}
