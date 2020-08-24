import { useState } from 'react';
import Fire from './svg/fire';
import Transition from './Transition';

export default function Vacancy({ data: v }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((prevState) => !prevState)}
      className='relative rounded m-2 p-4 bg-gray-100 sm:max-w-xl'
    >
      <p className='absolute right-0 mr-3 font-thin'>{v.date}</p>
      {v.isHot && (
        <div className='absolute right-0 mt-7 mr-3 flex items-center'>
          <Fire className='inline w-8 h-8' />{' '}
          <span className='font-bold'>Hot</span>
        </div>
      )}
      <div className='flex'>
        <img
          src={v.companyLogo}
          className='bg-red-400 rounded-full w-16 h-16'
        />
        <div className='ml-4'>
          <h2 className='text-2xl font-thin'>{v.jobTitle}</h2>
          <h3>{v.salary}</h3>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <p className='p-4 text-xl font-thin'>
          {v.excerpt}
          {isOpen ? (
            <span>
              {v.description.slice(v.description.length - v.excerpt.length)}
            </span>
          ) : (
            <span className='font-medium pl-1'>...</span>
          )}
        </p>
        {isOpen && (
          <Transition
            show={isOpen}
            appear={true}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='scale-50'
            enterTo='scale-100'
          >
            <button className='btn bg-red-400 text-white m-6'>
              Send a resume
            </button>
          </Transition>
        )}
      </div>
      <div className='flex flex-wrap'>
        {v.tags.map((tag) => {
          return (
            <span
              key={tag}
              className='m-2 p-1 bg-teal-400 text-white px-1 rounded'
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
