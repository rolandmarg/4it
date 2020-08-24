import { useState } from 'react';

const RightArrow = ({ next }) => {
  return (
    <div
      onClick={next}
      className='border-gray-500 border-t-2 border-r-2 flex-shrink-0 cursor-pointer
      w-6 h-6 transform rotate-45'
    />
  );
};

const LeftArrow = ({ prev }) => {
  return (
    <div
      onClick={prev}
      className='border-gray-500 border-b-2 border-l-2 flex-shrink-0 cursor-pointer
      w-6 h-6 transform rotate-45'
    />
  );
};

const Dots = ({ idx, childCount, onClick }) => {
  const dots = [];

  for (let i = 0; i < childCount; i++) {
    dots.push(<Dot key={i} id={i} active={i === idx} onClick={onClick} />);
  }

  return (
    <div className='flex flex-wrap space-x-2 max-w-xl justify-center m-2 pt-2 lg:mt-8'>
      {dots}
    </div>
  );
};

const Dot = ({ id, active, onClick }) => {
  return (
    <div
      data-id={id}
      className={`cursor-pointer h-2 w-2 rounded-full ${
        active ? 'bg-black' : 'bg-gray-300'
      }`}
      onClick={() => onClick(id)}
    />
  );
};

export default function Carousel({ children }) {
  const childArray = React.Children.toArray(children);
  const childCount = React.Children.count(children);
  const [activeIdx, setActiveIdx] = useState(0);

  const getNextIdx = (idx) => (idx === childCount - 1 ? 0 : idx + 1);
  const getPrevIdx = (idx) => (idx === 0 ? childCount - 1 : idx - 1);

  const next = () => {
    setActiveIdx(getNextIdx);
  };

  const prev = () => {
    setActiveIdx(getPrevIdx);
  };

  return (
    <div className='m-2 p-2'>
      <div className='flex flex-col items-center'>
        <div className='flex justify-center items-center'>
          <LeftArrow prev={prev} />
          <div className='flex'>
            <div className='z-10 hidden lg:block lg:transform lg:scale-90'>
              {childArray.length > 2 && childArray[getPrevIdx(activeIdx)]}
            </div>
            <div className='z-20 lg:shadow-xl'>{childArray[activeIdx]}</div>
            <div className='z-10 hidden lg:block lg:transform lg:scale-90'>
              {childArray.length > 2 && childArray[getNextIdx(activeIdx)]}
            </div>
          </div>
          <RightArrow next={next} />
        </div>

        <Dots
          idx={activeIdx}
          childCount={childCount}
          onClick={(idx) => setActiveIdx(idx)}
        />
      </div>
    </div>
  );
}
