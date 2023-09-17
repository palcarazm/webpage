import React, { useContext } from "react";
import { CourseService } from "../../assets/course";
import { LangContext } from "../../plugins";
import { CourseCard } from "./CourseCard";

export function CourseList() {
  const { langState } = useContext(LangContext);

  const courses = CourseService.getAll(langState.lang);

  return courses.data.map((course) => (
    <CourseCard key={course.key} course={course} />
  ));
}
