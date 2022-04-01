using System;
using System.Collections.Generic;

#nullable disable

namespace Academy_Backend.Model
{
    public partial class UserModal
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public string MobileNumber { get; set; }
        public string UserRole { get; set; }
        public int Id { get; set; }
    }
}
