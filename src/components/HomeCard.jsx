import React from "react";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const data = [
    {
      id: 1,
      title: "For Developers",
      desc: "Browse our React jobs and start your career today",
      link: "jobs",
      button: "Browse Jobs",
      cardClass:
        "bg-gray-100 dark:bg-gray-900 transition-colors duration-500 ease-in-out",
      buttonClass:
        "bg-black text-white hover:bg-gray-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors duration-300",
    },
    {
      id: 2,
      title: "For Employers",
      desc: "List your job to find the perfect developer for the role",
      link: "add-job",
      button: "Add Job",
      cardClass:
        "bg-indigo-100 dark:bg-gray-900 transition-colors duration-500 ease-in-out",
      buttonClass:
        "bg-indigo-500 text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors duration-300",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500 ease-in-out flex flex-col md:flex-row items-center justify-between p-4 md:p-10 gap-5">
      {data.map((d) => (
        <div
          key={d.id}
          className={`rounded-lg p-6 flex flex-col items-start gap-3 shadow-md md:w-1/2 ${d.cardClass}`}
        >
          <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100 transition-colors duration-500">
            {d.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-500">
            {d.desc}
          </p>
          <Link
            to={d.link}
            className={`p-2 px-4 text-[1rem] rounded-lg text-lg font-medium ${d.buttonClass}`}
          >
            {d.button}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
