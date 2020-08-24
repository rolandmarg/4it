import Carousel from './Carousel';

export default function Testimonials({ data }) {
  return (
    <div id='testimonials' className='bg-white p-2 pt-16'>
      <Carousel>
        {data.map((t, index) => {
          return (
            <div key={index} className='bg-gray-100 rounded p-2 max-w-sm'>
              <img
                src={t.companyLogo}
                className='bg-blue-200 rounded-full mx-auto w-24 h-24 -mt-14 border-white border-8'
              />
              <div className='m-2 mt-6 flex items-center'>
                <img
                  src={t.personImage}
                  className='bg-red-400 rounded-full w-16 h-16'
                />
                <h2 className='ml-4 text-2xl font-thin'>{t.personName}</h2>
              </div>
              <p className='p-4 text-xl font-thin'>{t.quote}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

//<div className='flex flex-col mt-28 mb-12 space-y-12 sm:flex-row sm:space-y-0 sm:justify-center'>
