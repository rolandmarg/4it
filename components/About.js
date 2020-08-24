export default function About() {
  return (
    <div id='about' className='bg-yellow-200 p-2 md:h-screen'>
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
            <button className='m-2 w-56 btn btn-black'>
              Schedule a meeting
            </button>
          </div>
        </div>
        <div className='bg-yellow-50 rounded p-2 m-2 w-72 mx-auto'>
          <h1 className='text-2xl font-semibold m-2 mb-4'>For Job Seekers</h1>
          <div className='flex justify-center'>
            <button className='m-2 w-56 btn btn-black'>Upload a resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
