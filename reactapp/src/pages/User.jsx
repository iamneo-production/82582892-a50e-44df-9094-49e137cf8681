import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/User layouts/Navbar/Navbar";
import Academy from "../components/User layouts/pages/Academy";
import Course from "../components/User layouts/pages/Course";
import Enrolledcourse from "../components/User layouts/pages/Enrolledcourse";
import EnrollCourse from "../components/User layouts/pages/EnrollCourse";
import AcademyCourses from "../components/User layouts/pages/AcademyCourses";
import Review from "../components/User layouts/pages/Review";

function User() {
  const [data, setData] = useState([
    {
      CourseName: "cse",
      CourseDuration: "4 months",
      CourseAvialbleTimngs: "11-12",
      Numberofstudents: "40",
      CourseDescription: "This course is for cse students",
    },
    {
      CourseName: "mechanical",
      CourseDuration: "2 months",
      CourseAvialbleTimngs: "1-2",
      Numberofstudents: "50",
      CourseDescription: "This course is for mechanical students",
    },
    {
      CourseName: "aeronautics",
      CourseDuration: "5 months",
      CourseAvialbleTimngs: "7-8",
      Numberofstudents: "25",
      CourseDescription: "This is for aeronautical students",
    },
  ]);

  const onSearch = (item) => {
    setData(
      data.filter((item1) => {
        return item1 === item;
      })
    );
  };

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/academy" component={Academy} element={<Academy />} />
        <Route path="/viewCourse" element={<AcademyCourses />} />
        <Route path="/enrolledcourse" component={Enrolledcourse} element={<Enrolledcourse /> } />
        {/* <Route path="/course" component={Course} />
        <Route path="/enrollcourse" component={EnrollCourse} /> */}
        <Route path="/course" element={<Course />} />
        <Route path="course/enrollcourse/:id" element={<EnrollCourse />} />
        <Route path="enrolledcourse/Review" component={Review} element={<Review/>} />

      </Routes>
    </div>
  );
}

export default User;
