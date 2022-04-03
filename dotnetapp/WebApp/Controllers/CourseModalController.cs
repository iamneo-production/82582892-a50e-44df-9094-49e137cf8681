using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Academy_Backend.Model;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Academy_Backend.Controllers
{
    // Academy_Backend.Model
    [Route("admin/")]
    [ApiController]
    public class CourseModalController : ControllerBase
    {
        private readonly Academy_BackendContext _context;
        public CourseModalController(Academy_BackendContext context)
        {
            _context = context;
        }

        // GET: api/<CourseController>
        [HttpGet("getCourses")]
        public IEnumerable<CourseModal> Get()
        {
            return _context.CourseModals.ToList();
        }

        [HttpGet("getCourses/{id}")]
        public IEnumerable<CourseModal> Get(int id)
        {
            var courses =
                 _context.CourseModals.Where(item => item.AcademyId == id);
            return courses;
        }

        // GET api/<CourseController>/5
        [HttpGet("getCourse/{id}")]
        public IActionResult Getcourse(int id)
        {
            var course = _context.CourseModals.Find(id);
            if (course != null)
            {
                return Ok(new { StatusCode = 200, courses = course });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "Course Not Found"
            });
        }

        // POST api/<CourseController>
        //  [Route("addCourse")]
        [HttpPost("addCourse")]
        public IActionResult Post([FromBody] CourseModal course)
        {
            if (course == null)
            {
                return BadRequest();
            }
            else
            {
                _context.CourseModals.Add(course);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Course Added Successufully"
                });
            }
        }

        [HttpPost("EnrollCourse")]
        public IActionResult Post([FromBody] StudentModal data)
        {
            if (data == null)
            {
                return BadRequest();
            }
            else
            {

                _context.StudentModals.Add(data);
                // _context.RegisteredCourseModals.Add(regdata);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Course Added Successufully"
                });
            }
        }


        // * Course Adding for User
        [HttpPost("EnrolledCourse/{CourseId}/{AcademyId}")]
        public IActionResult Post([FromBody] int StudentId, int CourseId, int AcademyId)
        {
                          
                var course = _context.StudentModals.Find(CourseId);
                if(course != null){
                    RegisteredCourseModal regdata = new RegisteredCourseModal{ StudentId = StudentId,
                    AcademyId = AcademyId,
                    CourseId = CourseId,
                    JoinDate = DateTime.Now
                };

                    _context.RegisteredCourseModals.Add(regdata);
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Course Added Successufully"
                    });

                }
                return BadRequest("Course Already Available");
        }

        [HttpGet("EnrolledCourse/{id}")]
        public IEnumerable<RegisteredCourseModal> GetEnrolledCourses(int id)
        {
            var regcourses = _context.RegisteredCourseModals.Where(c => c.Id == id);
            return regcourses;

        }

        // PUT api/<courseController>/5
        //  [Route("editCourse")]
        [HttpPut("editCourse/{id}")]
            public IActionResult Put(int id, [FromBody] CourseModal course)
            {
                  if (course == null)
                  {
                        return BadRequest();
                  }
                  else
                  {
                        var user = _context.CourseModals.AsNoTracking().FirstOrDefault(e => e.CourseId == course.CourseId);
                        if (user == null)
                        {
                              return NotFound(new
                              {
                                    StatusCode = 404,
                                    Message = "Course not found",
                              });
                        }
                        else
                        {
                              _context.Entry(course).State = EntityState.Modified;
                              _context.SaveChanges();
                              return Ok(new
                              {
                                    StatusCode = 200,
                                    Message = "Course Updated Successfully"
                              });
                        }
                  }
            }

            // DELETE api/<courseController>/5
            //  [Route("deleteCourse")]
            [HttpDelete("deleteCourse/{id}")]
            public IActionResult Delete(int id)
            {
                  var course = _context.CourseModals.Find(id);
                  if (course == null)
                  {
                        return NotFound(new
                        {
                              StatusCode = 404,
                              Message = "Course Not Found",
                        });
                  }
                  else
                  {
                        _context.CourseModals.Remove(course);
                        _context.SaveChanges();
                        return Ok(new
                        {
                              StatusCode = 200,
                              Message = "Course Deleted"
                        });
                  }
            }
      }
}