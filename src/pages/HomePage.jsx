import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = ({jobs, setJobs}) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListings isHome={true} jobs={jobs} setJobs={setJobs}/>
      <ViewAllJobs/>
    </div>
  )
}

export default HomePage