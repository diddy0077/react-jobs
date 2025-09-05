import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import EditJobPage from "./pages/EditJobPage";


const App = () => {
  const [job, setJob] = useState(null)
  const [jobs, setJobs] = useState([])
  return (
    <>
       <Router>
      {/* Navbar always visible */}

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<HomePage jobs={jobs} setJobs={setJobs} />} />
        <Route path="/jobs" element={<JobsPage jobs={jobs} setJobs={setJobs}/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/jobs/:id" element={<JobPage job={job} setJob={setJob} />} />
        <Route path="/add-job" element={<AddJobPage jobs={jobs} setJobs={setJobs} />} />
        <Route path="/edit-job/:id" element={<EditJobPage job={job} />} />
      </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
