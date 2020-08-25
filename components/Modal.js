import Transition from './Transition';

export default function Modal({ children, isVisible }) {
  return (
    <Transition show={isVisible} appear={true}>
      <div className='z-40 table fixed top-0 left-0 h-full w-full'>
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
        <Transition
          enter='ease-out duration-300'
          enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          enterTo='opacity-100 translate-y-0 sm:scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 translate-y-0 sm:scale-100'
          leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
        >
          <div className='table-cell align-middle mx-4'>
            <div
              className='bg-white rounded-lg overflow-hidden shadow-xl 
            transform transition-all max-w-xs mx-auto'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal-headline'
            >
              {children}
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  );
}
