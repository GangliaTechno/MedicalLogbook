import React, { useState, useEffect } from "react";
import LogoNav from "../../Components/Admin/LogoNav";
import Studentnavbar from "../../Components/Student/Studentnavbar";
import Studenttask from "./Studenttask";
import Assessmentstudent from "./Assessmentstudent";

const Pglogstudenthome = () => {
  const [showstudenttask, setshowstudenttask] = useState(false);
  const [showassessment, setshowassessment] = useState(false);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    const storedPreference = sessionStorage.getItem("sidebarCollapsed");
    return storedPreference !== null ? JSON.parse(storedPreference) : false;
  });

  useEffect(() => {
    // Save collapsed state changes to sessionStorage
    sessionStorage.setItem(
      "sidebarCollapsed",
      JSON.stringify(isSidebarCollapsed)
    );
  }, [isSidebarCollapsed]);

  // Collapse toggle function
  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleOptions = (component) => {
    if (component === "Home") {
      setshowstudenttask(false);
      setshowassessment(false);
    } else if (component === "Studenttask") {
      setshowstudenttask(true);
      setshowassessment(false);
    }
    else if(component === "Assessment"){
      setshowstudenttask(false);
      setshowassessment(true);
    }
  };

  return (
    <section>
      <LogoNav />
      <Studentnavbar />
      {showstudenttask && <Studenttask />}
      {showassessment && <Assessmentstudent/>}
      <div className="fixed h-full overflow-auto">
        <nav
          className={`sideb h-full flex flex-col bg-blue-950 ${
            isSidebarCollapsed ? "collapsed-sidebar" : ""
          }`}
        >
          <button
            onClick={toggleSidebarCollapse}
            className="w-100 rounded-md h-10 flex justify-center items-center px-4 text-white bg-blue-600 "
          >
            {isSidebarCollapsed ? (
              <i
                class="fa-solid fa-angles-right p-2"
                style={{ color: "#ffffff" }}
              /> // Expand icon
            ) : (
              <i
                class="fa-solid fa-angles-left p-2"
                style={{ color: "#ffffff" }}
              /> // Collapse icon
            )}
            <p className="relative top-2 text-base">Collapse</p>
          </button>

          <button
            onClick={() => handleOptions("Home")}
            className="w-100 rounded-md h-10 flex justify-center items-center px-4 text-white bg-blue-600 "
          >
            <i
              className="fa-solid fa-house pr-2"
              style={{ color: "#ffffff" }}
            />
            <p className="relative top-2 text-base">Home</p>
          </button>

          <button
            onClick={() => handleOptions("Studenttask")}
            className="w-100 rounded-md h-10 flex justify-center items-center px-4 text-white bg-blue-600 "
          >
            <i
              class="fa-solid fa-list-check p-2"
              style={{ color: "#ffffff" }}
            />
            <p className="relative top-2 text-base">Tasks</p>
          </button>

          <button
            onClick={() => handleOptions("Assessment")}
            className="w-100 rounded-md h-10 flex justify-center items-center px-4 text-white bg-blue-600 "
          >
            <i
              class="fa-regular fa-file-lines p-2"
              style={{ color: "#ffffff" }}
            />
            <p className="relative top-2 text-base">Assessment</p>
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Pglogstudenthome;
