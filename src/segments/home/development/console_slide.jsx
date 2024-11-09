import React, { useEffect, useState } from 'react';
import { GoQuestion } from 'react-icons/go';
import ConsoleEmulator from './console';

function ConsoleSlide() {
  const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flex h-screen justify-center items-center bg-transparent w-full overflow-hidden relative">
        <div
          className={`w-4/5 h-full sm:h-full md:h-4/5 lg:h-3/5 lg:w-3/5 rounded-[30px] md:shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] md:border border-green-600 md:p-[3%] relative md:bg-[#242424]`}>
              <div
                className="absolute inset-0 z-0 hidden md:block"
                style={{
                backgroundImage: `url('src/assets/stars2.png')`,
                backgroundSize: '100%', // Set to 200% to make it 2x size
                backgroundPosition: 'center 33%',
                backgroundRepeat: 'no-repeat',
                }}
              ></div>
          <ConsoleEmulator />
        </div>
      </div>
    </div>
  );
}

export default ConsoleSlide;