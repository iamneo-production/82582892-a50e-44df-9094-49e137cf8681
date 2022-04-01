using System;
using System.Collections.Generic;

#nullable disable

namespace Academy_Backend.Model
{
    public partial class InstituteModal
    {
        public int InstituteId { get; set; }
        public string InstituteName { get; set; }
        public string InstituteDescription { get; set; }
        public string InstitueAddress { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Imageurl { get; set; }
    }
}
