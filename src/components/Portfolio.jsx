import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Rainbow Figures Ep.35',
      description: 'Soap For Breakfast (featuring as Victoria)',
      video: '/portfolio-imnida/videos/rainbowFigures35.mp4',
    },
    {
      title: 'Rainbow Figures Ep.38',
      description: 'Holy Shit (featuring as Victoria)',
      video: '/portfolio-imnida/videos/rainbowFigures38.mp4',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#2E4B47] px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-[#90A875] text-center mb-12">
          Short Animation
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#203936] rounded-xl overflow-hidden shadow-lg"
            >
              <video
                className="w-full aspect-video object-cover"
                controls
                preload="metadata"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-[#dca864] mb-2">
                  {project.title}
                </h2>

                <p className="text-[#FDD8A7]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#90A875] text-center mb-12">
          Spy x Family Manga Fan Dub
        </h1>
      </div>


    </div>
  );
};

export default Portfolio;
