import Modal from './Modal';
import Testimonials from './Testimonials';
import useVisible from './UseVisible';
import { UploadResumeForm } from './Forms';
import { useState } from 'react';
import Transition from './Transition';
import CloseSVG from './svg/close';

export default function Landing({ testimonials }) {
  return (
    <>
      <Banana />
      <Testimonials data={testimonials} />
    </>
  );
}

function Subscribe() {
  const { isVisible, setIsVisible, ref } = useVisible(false);

  return (
    <div className=''>
      <button
        className='btn btn-black m-2 w-32'
        onClick={() => setIsVisible(true)}
      >
        Subscribe
      </button>
      <Modal isVisible={isVisible}>
        <div ref={ref}>
          <UploadResumeForm onCancel={() => setIsVisible(false)} />
        </div>
      </Modal>
    </div>
  );
}

function ForEmployers() {
  const { isVisible, setIsVisible, ref } = useVisible(false);

  return (
    <div className='bg-yellow-50 rounded p-2 m-2 w-72 mx-auto'>
      <h1 className='text-2xl font-semibold m-2 mb-4'>For Employers</h1>
      <div className='flex justify-center'>
        <button
          onClick={() => setIsVisible(true)}
          className='m-2 w-56 btn btn-black'
        >
          Schedule Meeting
        </button>
        <Modal isVisible={isVisible}>
          <div ref={ref}>
            <UploadResumeForm onCancel={() => setIsVisible(false)} />
          </div>
        </Modal>
      </div>
    </div>
  );
}

function ForJobSeekers() {
  const [didResumeUpload, setDidResumeUpload] = useState(false);
  const { isVisible, setIsVisible, ref } = useVisible(false);

  return (
    <div className='bg-yellow-50 rounded p-2 m-2 w-72 mx-auto'>
      <h1 className='text-2xl font-semibold m-2 mb-4'>For Job Seekers</h1>
      <div className='flex justify-center'>
        <button
          onClick={() => {
            setIsVisible(true);
            setDidResumeUpload(false);
          }}
          className='m-2 w-56 btn btn-black'
        >
          Upload Resume
        </button>
        <Modal isVisible={isVisible}>
          <div ref={ref}>
            {didResumeUpload ? (
              <Transition
                appear={true}
                show={true}
                enter='ease-out duration-500'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-300'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <div className='relative p-4'>
                  <button
                    className='absolute top-2 right-2 h-6 w-6 text-gray-600 focus:outline-none'
                    onClick={() => setIsVisible(false)}
                  >
                    <CloseSVG />
                  </button>
                  <h2 className='text-lg mb-2'>
                    Thanks for uploading the resume! 🎉
                  </h2>
                  <p className='font-light pt-2'>
                    We will try to contact you as soon as possible
                  </p>
                </div>
              </Transition>
            ) : (
              <UploadResumeForm
                onCancel={() => setIsVisible(false)}
                onSuccess={() => setDidResumeUpload(true)}
              />
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
}
function Banana() {
  return (
    <main id='about' className='bg-yellow-200 p-2'>
      <div
        className='p-2 mt-16 md:m-16 lg:mt-36 max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl flex flex-col
        sm:space-x-4 sm:flex-row'
      >
        <div className='p-4'>
          <h1 className='text-2xl tracking-tight font-bold'>
            EXECUTIVE SEARCH
          </h1>
          <p className='mt-2 text-xl font-medium'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </p>
        </div>
        <div className='p-4'>
          <h1 className='text-2xl tracking-tight font-bold'>
            EXECUTIVE SEARCH
          </h1>
          <p className='mt-2 text-xl font-medium'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </p>
        </div>
      </div>

      <div
        className='flex flex-col rounded max-w-sm mx-auto m-2 lg:mt-24 px-2 justify-center 
        sm:flex-row sm:space-x-4 sm:max-w-md sm:bg-teal-300'
      >
        <ForEmployers />
        <ForJobSeekers />
      </div>
      <div className='bg-yellow-50 rounded p-2 m-2 my-4 w-72 mx-auto'>
        <h1 className='text-2xl font-semibold m-2 mb-4'>For You</h1>
        <div className='flex justify-center'>
          <Subscribe />
        </div>
      </div>
    </main>
  );
}
