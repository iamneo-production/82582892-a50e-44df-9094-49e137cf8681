using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Academy_Backend.Model
{
    public partial class Academy_BackendContext : DbContext
    {
        public Academy_BackendContext()
        {
        }

        public Academy_BackendContext(DbContextOptions<Academy_BackendContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminModal> AdminModals { get; set; }
        public virtual DbSet<CourseModal> CourseModals { get; set; }
        public virtual DbSet<InstituteModal> InstituteModals { get; set; }
        public virtual DbSet<LoginModal> LoginModals { get; set; }
        public virtual DbSet<RegisteredCourseModal> RegisteredCourseModals { get; set; }
        public virtual DbSet<StudentModal> StudentModals { get; set; }
        public virtual DbSet<UserModal> UserModals { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PARTHA-PC\\SQLEXPRESS;Database=Academy_Backend;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AdminModal>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("AdminModal");

                entity.Property(e => e.Email)
                    .HasMaxLength(30)
                    .HasColumnName("email");

                entity.Property(e => e.MobileNumber)
                    .HasMaxLength(10)
                    .HasColumnName("mobileNumber");

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .HasColumnName("password");

                entity.Property(e => e.UserRole)
                    .HasMaxLength(30)
                    .HasColumnName("userRole");
            });

            modelBuilder.Entity<CourseModal>(entity =>
            {
                entity.HasKey(e => e.CourseId)
                    .HasName("PK__CourseMo__2AA84FD18C7E837C");

                entity.ToTable("CourseModal");

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.AcademyId).HasColumnName("academyId");

                entity.Property(e => e.CourseDescription)
                    .HasMaxLength(254)
                    .HasColumnName("courseDescription");

                entity.Property(e => e.CourseDuration)
                    .HasMaxLength(30)
                    .HasColumnName("courseDuration");

                entity.Property(e => e.CourseName)
                    .HasMaxLength(30)
                    .HasColumnName("courseName");

                entity.Property(e => e.FromDate)
                    .HasColumnType("date")
                    .HasColumnName("fromDate");

                entity.Property(e => e.ToDate)
                    .HasColumnType("date")
                    .HasColumnName("toDate");
            });

            modelBuilder.Entity<InstituteModal>(entity =>
            {
                entity.HasKey(e => e.InstituteId)
                    .HasName("PK__Institut__09EC0DBBCAB7879F");

                entity.ToTable("InstituteModal");

                entity.Property(e => e.Email)
                    .HasMaxLength(30)
                    .HasColumnName("email");

                entity.Property(e => e.Imageurl).HasMaxLength(254);

                entity.Property(e => e.InstitueAddress).HasMaxLength(50);

                entity.Property(e => e.InstituteDescription).HasMaxLength(254);

                entity.Property(e => e.InstituteName).HasMaxLength(30);

                entity.Property(e => e.Mobile)
                    .HasMaxLength(10)
                    .HasColumnName("mobile");
            });

            modelBuilder.Entity<LoginModal>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("LoginModal");

                entity.Property(e => e.Email)
                    .HasMaxLength(30)
                    .HasColumnName("email");

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<RegisteredCourseModal>(entity =>
            {
                entity.ToTable("RegisteredCourseModal");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.AcademyId).HasColumnName("academyId");

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.CourseName)
                    .HasMaxLength(254)
                    .HasColumnName("courseName");

                entity.Property(e => e.JoinDate)
                    .HasColumnType("date")
                    .HasColumnName("joinDate");

                entity.Property(e => e.StudentId).HasColumnName("studentId");
            });

            modelBuilder.Entity<StudentModal>(entity =>
            {
                entity.HasKey(e => e.StudentId)
                    .HasName("PK__StudentM__4D11D63CFF8ADF26");

                entity.ToTable("StudentModal");

                entity.Property(e => e.StudentId)
                    .ValueGeneratedNever()
                    .HasColumnName("studentId");

                entity.Property(e => e.AlterMobile)
                    .HasMaxLength(10)
                    .HasColumnName("alterMobile");

                entity.Property(e => e.AreaName)
                    .HasMaxLength(50)
                    .HasColumnName("areaName");

                entity.Property(e => e.HouseNo)
                    .HasMaxLength(10)
                    .HasColumnName("houseNo");

                entity.Property(e => e.Mobile)
                    .HasMaxLength(10)
                    .HasColumnName("mobile");

                entity.Property(e => e.Nationality)
                    .HasMaxLength(30)
                    .HasColumnName("nationality");

                entity.Property(e => e.Pincode).HasColumnName("pincode");

                entity.Property(e => e.StreetName)
                    .HasMaxLength(50)
                    .HasColumnName("streetName");

                entity.Property(e => e.StudentDob)
                    .HasColumnType("date")
                    .HasColumnName("studentDOB");

                entity.Property(e => e.StudentEmail)
                    .HasMaxLength(40)
                    .HasColumnName("studentEmail");

                entity.Property(e => e.StudentFathername)
                    .HasMaxLength(30)
                    .HasColumnName("studentFathername");

                entity.Property(e => e.StudentGender)
                    .HasMaxLength(20)
                    .HasColumnName("studentGender");

                entity.Property(e => e.StudentLastname)
                    .HasMaxLength(30)
                    .HasColumnName("studentLastname");

                entity.Property(e => e.StudentMothername)
                    .HasMaxLength(30)
                    .HasColumnName("studentMothername");

                entity.Property(e => e.StudentName)
                    .HasMaxLength(30)
                    .HasColumnName("studentName");
            });

            modelBuilder.Entity<UserModal>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__UserModa__AB6E616591433FC3");

                entity.ToTable("UserModal");

                entity.Property(e => e.Email)
                    .HasMaxLength(30)
                    .HasColumnName("email");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.MobileNumber)
                    .HasMaxLength(10)
                    .HasColumnName("mobileNumber");

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .HasColumnName("password");

                entity.Property(e => e.UserRole)
                    .HasMaxLength(30)
                    .HasColumnName("userRole");

                entity.Property(e => e.Username)
                    .HasMaxLength(30)
                    .HasColumnName("username");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
