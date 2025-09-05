import { useState, useEffect } from 'react';
import JobListingCard from './JobListingCard';

const JobListings = ({ isHome, jobs, setJobs }) => {
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [loading, setLoading] = useState(true)

useEffect(() => {
  fetch("/api/jobs")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch jobs"); 
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setTimeout(() => {
      setJobs(data);
      setLoading(false)
      }, 1000)
    })
    .catch((error) => {
      console.error("Error fetching jobs:", error);
      setLoading(false)
    });
}, [setJobs]);


   
  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

      
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {loading ? (<div className="col-span-full flex justify-center items-center py-20">
      <div className="w-15 h-15 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>) : (
            jobs.slice(0, isHome ? 3 : jobs.length).map((job) => {
  const isExpanded = expandedJobId === job.id; // ← this defines showFullJob
  const desc = isExpanded ? job.description : job.description.slice(0, 90) + '...'

  return (
    <JobListingCard
      key={job.id}
      id={job.id}
      title={job.title}
      type={job.type}
      description={desc}
      salary={job.salary}
      location={job.location}
      showFullJob={isExpanded}               
      onclick={() =>
        setExpandedJobId(isExpanded ? null : job.id)
      }                                     
    />
  );
}))}
          </div>
     
      </div>
    </section>
  );
};
export default JobListings
