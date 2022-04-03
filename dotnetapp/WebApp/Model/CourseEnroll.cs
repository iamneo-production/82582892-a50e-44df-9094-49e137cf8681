namespace Academy_Backend.Model
{
    public interface CourseEnroll
    {
        public StudentModal student { get; set; }
        public int AcademyId { get; set; }
        public int courseId { get; set; }

    }
}