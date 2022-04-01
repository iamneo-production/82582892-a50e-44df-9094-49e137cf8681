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
    public class StudentModalController : ControllerBase
    {
        private readonly Academy_BackendContext _context;

        public StudentModalController(Academy_BackendContext context)
        {
            _context = context;
        }

        // GET: api/<StudentController>
        [HttpGet("getStudents")]
        public IEnumerable<StudentModal> Get()
        {
            return _context.StudentModals.ToList();
        }

        [HttpPost("CheckStudent")]
        public IActionResult GetStudent(string email)
        {
            var student = _context.StudentModals.Where(p => p.StudentEmail == email).ToList();
            if (student != null)
            {
                return Ok(new {checkStudent = 1 , id = student[0].StudentId});
            }
            return Ok(new {checkStudent = 0});
        }

        // GET api/<StudentController>/5
        [HttpGet("getStudent/{id}")]
        public IActionResult GetStudent(int id)
        {
            var student = _context.StudentModals.Find(id);
            if (student != null)
            {
                return Ok(new
                {
                    StatusCode = 200,
                    students = student
                });
            }
            return NotFound(new
            {
                StatusCode = 400,
                Message = "Student Not Found"
            });
        }

        // POST api/<StudentController>
        [HttpPost("addStudent")]
        public IActionResult Post([FromBody] StudentModal student)
        {
            if (student == null)
            {
                return BadRequest();
            }
            else
            {
                _context.StudentModals.Add(student);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Student Added Successfully"
                });
            }
        }

        // PUT api/<StudentController>/5
        [HttpPut("editStudent/{id}")]
        public IActionResult Put(int id, [FromBody] StudentModal student)
        {
            if (student == null)
            {
                return BadRequest();
            }
            else
            {
                var user = _context.StudentModals.AsNoTracking().FirstOrDefault(e => e.StudentId == student.StudentId);
                if (user == null)
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "Student not found",
                    });
                }
                else
                {
                    _context.Entry(student).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Student Updated Successfully"
                    });
                }
            }
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("deleteStudent/{id}")]
        public IActionResult Delete(int id)
        {
            var student = _context.StudentModals.Find(id);
            if (student == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Student Not Found",
                });
            }
            else
            {
                _context.StudentModals.Remove(student);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Student Deleted"
                });
            }
        }
    }
}
