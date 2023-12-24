import Sidebar from "@/components/Sidebar";
import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col-reverse text-sm md:flex-row">
      <Sidebar />
      <main className="min-h-screen grow">Project</main>
    </div>
  );
};

export default Project;
