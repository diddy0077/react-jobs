import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [job, setJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Router>
        {/* Main content grows to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage jobs={jobs} setJobs={setJobs} />} />
            <Route path="/jobs" element={<JobsPage jobs={jobs} setJobs={setJobs} />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/jobs/:id" element={<JobPage job={job} setJob={setJob} />} />
            <Route path="/add-job" element={<AddJobPage jobs={jobs} setJobs={setJobs} />} />
            <Route path="/edit-job/:id" element={<EditJobPage job={job} />} />
          </Routes>
        </main>
      </Router>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
