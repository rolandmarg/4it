import Link from 'next/link';
import Transition from './Transition';
import useVisible from './UseVisible';

export default function Navbar() {
  return (
    <div className='relative'>
      <div className='hidden sm:block'>
        <NavHorizontal />
      </div>
      <div className='sm:hidden'>
        <NavVertical />
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <Link href='/vacancies'>
        <a className='text-red-500'>Vacancies</a>
      </Link>
    </>
  );
}

function NavHorizontal() {
  return (
    <nav className='mr-4 flex text-xl text-center space-x-6'>
      <NavLinks />
    </nav>
  );
}

function NavVertical() {
  const { ref, isVisible, setIsVisible } = useVisible(false);

  return (
    <div ref={ref}>
      <button
        type='button'
        onClick={() => setIsVisible((prevState) => !prevState)}
        className='focus:outline-none transition duration-150 ease-in-out'
        id='main-menu'
        aria-label='Main menu'
        aria-haspopup='true'
      >
        <svg
          className='h-8 w-8'
          stroke='currentColor'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>

      <Transition
        show={isVisible}
        appear={true}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-100 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div
          className='absolute right-0 mt-4 w-56 bg-white rounded-md text-2xl font-semibold text-black'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='main-menu'
        >
          <nav className='flex flex-col p-4 pl-6 space-y-2'>
            <NavLinks />
          </nav>
        </div>
      </Transition>
    </div>
  );
}
