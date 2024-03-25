import React, { useState } from "react";
import Select from "react-select";

const GenerateSemester = () => {
  const Semester = [
    { value: "select Semester", label: "Select Semester" },
    { value: "1", label: "1 Semester" },
    { value: "2", label: "2 Semester" },
    { value: "3", label: "3 Semester" },
    { value: "4", label: "4 Semester" },
    { value: "5", label: "5 Semester" },
    { value: "6", label: "6 Semester" },
    { value: "7", label: "7 Semester" },
    { value: "8", label: "8 Semester" },
    { value: "9", label: "9 Semester" },
  ];

  return Semester;
};

const Dailyattendance = ({ subjectname, subcode, examination }) => {
  const [selectedSemester, setSelectedSemester] = React.useState({
    value: "Select Semester",
    label: "Select Semester",
  });

  return (
    <section className="left-50 absolute">
      <div className="absolute flex left-10 top-4">
        <button className="bg-sky-500 rounded-md w-fit text-lg">
          Daily Attendance
        </button>
      </div>

      <div className="border-1 px-10 py-5 h-auto h-60vh w-auto overflow-hidden rounded-md border-black flex flex-col justify-center items-center mx-10 mt-20">
        <div className="overflow-hidden block">
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-10 text-balance">
            <h6>Name: ABC</h6>
            <h6>Registration Number: 22097001</h6>
            <Select
              value={selectedSemester}
              onChange={setSelectedSemester}
              options={GenerateSemester()}
              className="w-15vw"
            />
            <h6>GPA: 0.00</h6>
            <h6>CGPA: 0.00</h6>
            <h6>Total Credits Earned: 24</h6>
          </div>
          <form>
            <div className="flex w-70vw h-40vh border-1 mt-4 rounded-tl-3xl rounded-tr-3xl overflow-auto border-black rounded-xl">
              <table className="w-full h-10 text-center rounded-md border-collapse">
                <thead>
                  <tr>
                    <th className="border bg-blue-950 text-white px-4 py-2">
                      Date
                    </th>
                    <th className="border bg-blue-950 text-white px-4 py-2">
                      Day
                    </th>
                    <th className="border bg-blue-950 text-white px-4 py-2">
                      Subject Code
                    </th>
                    <th className="border bg-blue-950 text-white px-4 py-2">
                      Subject Name
                    </th>
                    <th className="border bg-blue-950 text-white px-4 py-2">
                      Attendance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-4 py-2">10/03/2024</td>
                    <td className="border border-black px-4 py-2">MONDAY</td>
                    <td className="border border-black px-4 py-2">SUB123</td>
                    <td className="border border-black px-4 py-2">PHYSICS</td>
                    <td className="border border-black px-4 py-2"><span style={{color:"red"}}>ABSENT</span></td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">11/03/2024</td>
                    <td className="border border-black px-4 py-2">TUESDAY</td>
                    <td className="border border-black px-4 py-2">SUB124</td>
                    <td className="border border-black px-4 py-2">MATHS</td>
                    <td className="border border-black px-4 py-2"><span style={{color:"green"}}>PRESENT</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Dailyattendance;
