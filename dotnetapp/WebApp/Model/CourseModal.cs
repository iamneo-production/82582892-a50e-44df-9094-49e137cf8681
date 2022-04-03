using System;
using System.Collections.Generic;

#nullable disable

namespace Academy_Backend.Model
{
    public partial class CourseModal
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public string CourseDescription { get; set; }
        public string CourseDuration { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public int? AcademyId { get; set; }
    }
}