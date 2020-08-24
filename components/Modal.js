import Transition from './Transition';

export default function Modal({ children, isVisible }) {
  return (
    <Transition show={isVisible} appear={true}>
      <div className='absolute inset-0 z-30 flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <Transition
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 transition-opacity'>
            <div className='absolute inset-0 bg-gray-400 opacity-75' />
          </div>
        </Transition>
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className='hidden sm:inline-block sm:align-middle sm:h-screen' />​
        <Transition
          enter='ease-out duration-300'
          enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          enterTo='opacity-100 translate-y-0 sm:scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 translate-y-0 sm:scale-100'
          leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
        >
          {children}
        </Transition>
      </div>
    </Transition>
  );
}
