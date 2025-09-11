
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListingCard = ({type, title, description, salary, location, id, onclick, showFullJob}) => {

  return (
   <div className='bg-white dark:bg-gray-900 rounded-xl shadow-md relative transition-colors duration-500'>
  <div className='p-4'>
    <div className='mb-6'>
      <div className='text-gray-600 dark:text-gray-400 my-2'>{type}</div>
      <h3 className='text-xl font-bold text-gray-900 dark:text-gray-100'>{title}</h3>
    </div>

    <div className='mb-5 text-gray-700 dark:text-gray-300'>{description}</div>

    <button
      onClick={onclick}
      className='text-indigo-500 mb-5 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer'
    >
      {showFullJob ? 'Less' : 'More'}
    </button>

    <h3 className='text-indigo-500 mb-2'>{salary} / Year</h3>

    <div className='border border-gray-100 dark:border-gray-700 mb-5'></div>

    <div className='flex flex-col lg:flex-row justify-between mb-4'>
      <div className='text-orange-700 dark:text-orange-400 mb-3'>
        <FaMapMarker className='inline text-lg mb-1 mr-1' />
        {location}
      </div>
      <Link
        to={`/jobs/${id}`}
        className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
      >
        Read More
      </Link>
    </div>
  </div>
</div>

  );
};
export default JobListingCard;
