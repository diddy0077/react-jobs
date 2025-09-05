import React from 'react'
import Navbar from '../components/Navbar'

import JobListings from '../components/JobListings'


const JobsPage = ({jobs, setJobs}) => {
  // const [expandedJobId, setExpandedJobId] = useState(null);
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <JobListings isHome={false} jobs={jobs} setJobs={setJobs}/>
    </div>
  )
}

export default JobsPage