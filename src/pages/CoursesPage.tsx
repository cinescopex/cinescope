import React from "react";
import MainLayout from "../layout/MainLayout";
import { useParams } from "react-router-dom";

function Courses() {
  const { level } = useParams();
  return (
    <MainLayout>
      <div>Courses for Level: {level}</div>
    </MainLayout>
  );
}
export default Courses;
