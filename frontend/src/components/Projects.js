import React from 'react';
import { LampDemo } from '../components/ui/lamp';
import { EvervaultCard } from './ui/evervault-card'; // Import EvervaultCard

const Projects = () => {
  return (
    <div className='w-full min-h-screen relative flex flex-col justify-center items-center'>
      {/* Lamp Demo */}
      <LampDemo />

      {/* EvervaultCard Demo */}
      <div className="mt-12 flex flex-wrap justify-center space-x-4"> {/* Changed to flex-wrap for responsiveness */}
        <div className="w-full sm:w-[300px] h-[400px] mb-4"> {/* Responsive width and margin-bottom for spacing */}
          <EvervaultCard text="Animated Card 1" />
        </div>
        <div className="w-full sm:w-[300px] h-[400px] mb-4"> {/* Responsive width and margin-bottom for spacing */}
          <EvervaultCard text="Animated Card 2" />
        </div>
        <div className="w-full sm:w-[300px] h-[400px] mb-4"> {/* Responsive width and margin-bottom for spacing */}
          <EvervaultCard text="Animated Card 3" />
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center space-x-4"> {/* Changed to flex-wrap for responsiveness */}
        <div className="w-full sm:w-[300px] h-[400px] mb-4"> {/* Responsive width and margin-bottom for spacing */}
          <EvervaultCard text="Animated Card 1" />
        </div>
        <div className="w-full sm:w-[300px] h-[400px] mb-4"> {/* Responsive width and margin-bottom for spacing */}
          <EvervaultCard text="Animated Card 2" />
        </div>
        <div className="w-full sm:w-[300px] h-[400px] mb-4"> {/* Responsive width and margin-bottom for spacing */}
          <EvervaultCard text="Animated Card 3" />
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
