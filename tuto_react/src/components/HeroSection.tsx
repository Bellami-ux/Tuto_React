import Video1 from '/videos/video1.mp4';
import video2 from '/videos/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl lg:text-7xl text-center sm:text-6xl tracking-wide">
       Bellami builds tools 
        <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
          {' '}
            for <br /> developers
        </span>
      </h1>
      <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl">
        Discover a world of creativity and productivity with Bellami. Our
        tutorials will guide you through every feature, helping you make the
        most of our platform.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="py-3 mx-3
         px-4 bg-orange-500 text-white rounded-md hover:bg-orange-800 transition duration-300 cursor-pointer"
        >
          start for free
        </a>
        <a href="#" className="py-3 mx-3 px-4 border cursor-pointer rounded-md ">
          Documentation
        </a>
      </div>
      <div className='flex mt-10 justify-center'>
        <video autoPlay muted loop  className="w-1/2 border border-orange-700 rounded-lg shadow-orange-400 mx-2 my-4">
          <source src={Video1} type="video/mp4" />
        </video>
        <video autoPlay muted loop  className="w-1/2 border border-orange-700 rounded-lg shadow-orange-400 mx-2 my-4">
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
