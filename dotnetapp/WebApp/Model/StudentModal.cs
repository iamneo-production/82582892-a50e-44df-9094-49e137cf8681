using System;
using System.Collections.Generic;

#nullable disable

namespace Academy_Backend.Model
{
    public partial class StudentModal
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public string StudentLastname { get; set; }
        public string StudentGender { get; set; }
        public string StudentFathername { get; set; }
        public string StudentMothername { get; set; }
        public string StudentEmail { get; set; }
        public string AlterMobile { get; set; }
        public DateTime? StudentDob { get; set; }
        public string Mobile { get; set; }
        public string HouseNo { get; set; }
        public string StreetName { get; set; }
        public string AreaName { get; set; }
        public string Nationality { get; set; }
        public int? Pincode { get; set; }
        public int? Age { get; set; }
    }
}
