import React from "react";
import { Link } from 'react-router-dom';

const HomeCard = () => {
  const data = [
    {
      id: 1,
      title: "For Developers",
      desc: "Browse our React jobs and start your career today",
      link: "jobs",
      button: 'Browse Jobs',
      style: {backgroundColor: '#000'},
      className: "bg-black text-white hover:bg-gray-800",
    },
    {
      id: 2,
      title: "For Employers",
      desc: "List your job to find the perfect developer for the role",
      link: "/add-jobs",
      button: 'Add Job',
      style: { backgroundColor: '#6366f1' },
      style2: { backgroundColor: '#e0e7ff' },
      className: "bg-indigo-500 text-white hover:bg-indigo-800",

    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-10 gap-5">
      {data.map((d) => {
        return <div style={d.style2} className="bg-gray-100 rounded-lg p-6 flex flex-col items-start gap-3 shadow-md md:w-1/2">
          <h2 className="font-bold text-2xl">{d.title}</h2>
          <p>{d.desc}</p>
          <Link to={d.link} className={`text-white p-2 px-4 text-[1rem] rounded-lg text-lg transition duration-300 ${d.className}`}>{d.button}</Link>
               </div>;
      })}
    </div>
  );
};

export default HomeCard;
