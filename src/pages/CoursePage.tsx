import React from "react";
import MainLayout from "../layout/MainLayout";
import { useParams } from "react-router-dom";

function Course() {
  const { level, id } = useParams();
  return (
    <MainLayout>
      <div>
        Course for Level: {level} and Id: {id}
      </div>
    </MainLayout>
  );
}
export default Course;
