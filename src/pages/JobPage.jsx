import React from 'react'
import { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';



const JobPage = ({job, setJob}) => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const nav = useNavigate()
useEffect(() => {
  fetch(`/api/jobs/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch jobs"); 
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setTimeout(() => {
      setJob(data.jobs);
      setLoading(false)
      }, 1000)
    })
    .catch((error) => {
      console.error("Error fetching jobs:", error);
      setLoading(false)
    });
}, [id, setJob]);
  
  
  const deleteJob = () => {
    fetch(`/api/jobs/${id}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) {
        throw new Error('Error deleting job')
      }
      })
      .then(() => {
        toast.success('Job deleted Successfully')
         nav('/jobs')
      })
      .catch((error) => {
      console.log('Error deleting job', error)
    })
   
  }

  return (
    <>
      <Navbar/>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/jobs'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      {loading ? (<div className="col-span-full flex justify-center items-center py-20">
      <div className="w-15 h-15 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>) : (<section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='flex gap-7 flex-col md:flex-row'>
            <main className='flex-1'>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{job.type}</div>
                <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{job.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  Job Description
                </h3>

                <p className='mb-4'>{job.description}</p>

                <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                  Salary
                </h3>

                <p className='mb-4'>{job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside className='md:max-w-[350px]'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Company Info</h3>

                <h2 className='text-2xl'>{job.company.name}</h2>

                <p className='my-2'>{job.company.description}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {job.company.contactEmail}
                </p>

                <h3 className='text-xl'>Contact Phone:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {' '}
                  {job.company.contactPhone}
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                <Link to={`/edit-job/${job.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Job
                </Link>
                  <button
                    onClick={() => setShowModal(true)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block cursor-pointer'
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>)}
      
      {showModal && <div className='fixed inset-0 flex items-center justify-center h-screen bg-black/40 h-full w-full'>
        <div className='bg-white shadow-md rounded-lg p-4 px-6'>
          <p className='font-semibold text-lg'>Are you sure you want to delete this Listing?</p>
          <div className='flex items-center justify-center gap-6 mt-2'>
            <button onClick={() => setShowModal(false)} type='button' className='bg-red-500 p-1.5 shadow-md text-white px-3 rounded-full transition duration-300 active:scale-[0.95] cursor-pointer'>Cancel</button>
            <button onClick={deleteJob} type='button' className='bg-indigo-500 p-1.5 shadow-md text-white px-3 rounded-full transition duration-300 active:scale-[0.95] cursor-pointer'>Confirm</button>
          </div>
        </div>
      </div>}
    </>
  )
}

export default JobPage