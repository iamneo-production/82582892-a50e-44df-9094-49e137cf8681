using Academy_Backend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Academy_Backend.Controllers
{
    [Route("/admin")]
    [ApiController]
    public class RegisteredCourseModalController : ControllerBase
    {
        private readonly Academy_BackendContext _context;

        public RegisteredCourseModalController(Academy_BackendContext context)
        {
            _context = context;
        }

        // GET: api/<courseController>
        [HttpGet("Regetcourses")]
        public IEnumerable<RegisteredCourseModal> Get()
        {
            return _context.RegisteredCourseModals.ToList();
        }

        // GET api/<courseController>/5
        [HttpGet("Regetcourse/{id}")]
        public IActionResult Getcourse(int id)
        {
            var course = _context.RegisteredCourseModals.Where(p => p.StudentId == id);
            if (course != null)
            {
                return Ok(new
                {
                    StatusCode = 200,
                    courses = course
                });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "course Not Found"
            });
        }

        // POST api/<courseController>
        [HttpPost("registercourse")]
        public IActionResult Post([FromBody] RegisteredCourseModal course)
        {
            if (course == null)
            {
                return BadRequest();
            }
            else
            {
                _context.RegisteredCourseModals.Add(course);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "course Added Successfully"
                });
            }
        }

        // // PUT api/<courseController>/5
        // [HttpPut("Reeditcourse/{id}")]
        // public IActionResult Put(int id, [FromBody] RegisteredCourseModal course)
        // {
        //     if (course == null)
        //     {
        //         return BadRequest();
        //     }
        //     else
        //     {
        //         var user = _context.RegisteredCourseModals.AsNoTracking().FirstOrDefault(e => e.courseId == course.courseId);
        //         if (user == null)
        //         {
        //             return NotFound(new
        //             {
        //                 StatusCode = 404,
        //                 Message = "course not found",
        //             });
        //         }
        //         else
        //         {
        //             _context.Entry(course).State = EntityState.Modified;
        //             _context.SaveChanges();
        //             return Ok(new
        //             {
        //                 StatusCode = 200,
        //                 Message = "course Updated Successfully"
        //             });
        //         }
        //     }
        // }

        // // DELETE api/<courseController>/5
        // [HttpDelete("Redeletecourse/{id}")]
        // public IActionResult Delete(int id)
        // {
        //     var course = _context.RegisteredCourseModals.Find(id);
        //     if (course == null)
        //     {
        //         return NotFound(new
        //         {
        //             StatusCode = 404,
        //             Message = "course Not Found",
        //         });
        //     }
        //     else
        //     {
        //         _context.RegisteredCourseModals.Remove(course);
        //         _context.SaveChanges();
        //         return Ok(new
        //         {
        //             StatusCode = 200,
        //             Message = "course Deleted"
        //         });
        //     }
        // }
    }
}
