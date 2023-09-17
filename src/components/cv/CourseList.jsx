import React, { useContext } from "react";
import { CourseService } from "../../assets/course";
import { LangContext } from "../../plugins";
import { CourseCard } from "./CourseCard";
import { ListGroup } from "react-bootstrap";

export function CourseList() {
  const { langState } = useContext(LangContext);

  const courses = CourseService.getAll(langState.lang);

  return (
    <ListGroup
      variant="flush"
      className="mx-2"
      style={{ "--bs-list-group-bg": "transparent" }}
    >
      {courses.data.map((course) => (
        <CourseCard key={course.key} course={course} />
      ))}
    </ListGroup>
  );
}
