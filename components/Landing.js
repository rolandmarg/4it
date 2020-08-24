import Modal from './Modal';
import Testimonials from './Testimonials';
import useVisible from './UseVisible';

export default function Landing({ testimonials }) {
  return (
    <>
      <MostImportantDivInYourLife />
      <Testimonials data={testimonials} />
    </>
  );
}

function MostImportantDivInYourLife() {
  const { isVisible, setIsVisible, ref } = useVisible(false);

  return (
    <main id='about' className='bg-yellow-200 p-2 md:h-screen'>
      <div
        className='p-2 mt-16 md:m-32 lg:mt-36 max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl flex flex-col
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
        className='flex flex-col rounded max-w-sm mx-auto m-2 md:my-12 lg:mt-36 px-2 justify-center 
        sm:flex-row sm:space-x-4 sm:max-w-md sm:bg-teal-300'
      >
        <div className='bg-yellow-50 rounded p-2 m-2 w-72 mx-auto'>
          <h1 className='text-2xl font-semibold m-2 mb-4'>For Employers</h1>
          <div className='flex justify-center'>
            <button className='m-2 w-56 btn btn-black'>Schedule Meeting</button>
          </div>
        </div>
        <div className='bg-yellow-50 rounded p-2 m-2 w-72 mx-auto'>
          <h1 className='text-2xl font-semibold m-2 mb-4'>For Job Seekers</h1>
          <div className='flex justify-center'>
            <button
              onClick={() => setIsVisible(true)}
              className='m-2 w-56 btn btn-black'
            >
              Upload Resume
            </button>
            <Modal isVisible={isVisible}>
              <div
                ref={ref}
                className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
                role='dialog'
                aria-modal='true'
                aria-labelledby='modal-headline'
              >
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <h3
                      className='text-lg leading-6 font-medium text-gray-900'
                      id='modal-headline'
                    >
                      Upload Resume
                    </h3>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                    <button
                      type='button'
                      className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-teal-400 text-base leading-6 font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                    >
                      Upload
                    </button>
                  </span>
                  <span className='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
                    <button
                      type='button'
                      onClick={() => setIsVisible(false)}
                      className='inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                    >
                      Cancel
                    </button>
                  </span>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </main>
  );
}
