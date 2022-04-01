using System;
using System.Collections.Generic;

#nullable disable

namespace Academy_Backend.Model
{
    public partial class RegisteredCourseModal
    {
        public int? StudentId { get; set; }
        public int? CourseId { get; set; }
        public int? AcademyId { get; set; }
        public string CourseName { get; set; }
        public int Id { get; set; }
        public DateTime? JoinDate { get; set; }
    }
}
