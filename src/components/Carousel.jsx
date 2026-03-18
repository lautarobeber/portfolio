import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const Carousel = ({ projects, onSelectProject }) => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      dragFree: true,
      containScroll: false,
    },
    [AutoScroll({ speed: 1, stopOnInteraction: false })]
  );

  return (
    <section className="py-16 bg-sand overflow-hidden border-y border-slate-light/30">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="embla__slide flex-shrink-0 w-[500px] md:w-[600px] lg:w-[700px]"
            >
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="w-full group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-light/30 text-left"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-dark/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Overlay con título */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-sand">{project.title}</h3>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
