import { X } from 'lucide-react';

const Projects = ({ projects, selectedProject, onSelectProject }) => {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-baseline mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-sand">
            Trabajos seleccionados
          </h2>
          <span className="text-slate-light/60 text-sm font-mono">
            0{projects.length} Proyectos
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectProject(project);
              }}
              className="group text-left w-full cursor-pointer outline-none"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-slate/20 border border-slate/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-1">
                <p className="text-[10px] font-mono tracking-wider text-slate-light uppercase">
                  {project.tag}
                </p>
                <h3 className="text-xl font-light text-sand group-hover:text-slate-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-light/60 font-mono">
                  {project.category}
                </p>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3 inline-flex items-center justify-center border border-sand/50 text-slate-dark text-xs px-4 py-2 rounded-lg bg-sand/90 hover:bg-sand hover:border-sand transition-colors"
                >
                  Ver demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-dark/90 backdrop-blur-sm"
          onClick={() => onSelectProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-sand border border-slate-light/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => onSelectProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-2xl bg-slate-dark/80 text-sand hover:bg-slate-dark transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="aspect-video overflow-hidden rounded-t-2xl bg-slate/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <p className="text-xs font-mono tracking-wider text-slate uppercase mb-2">
                {selectedProject.tag}
              </p>
              <h3 className="text-3xl font-light text-slate-dark mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate/80 font-mono mb-6">
                {selectedProject.category}
              </p>

              <p className="text-slate-dark leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-light/30">
                <p className="text-sm">
                  <span className="font-medium text-slate-dark">Rol:</span>{' '}
                  <span className="text-slate">{selectedProject.role}</span>
                </p>
                <p className="text-sm">
                  <span className="font-medium text-slate-dark">Herramientas:</span>{' '}
                  <span className="text-slate font-mono">{selectedProject.tech}</span>
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-slate-dark/20 text-slate-dark text-sm px-6 py-3 rounded-xl bg-sand hover:bg-sand/95 hover:border-slate-dark/30 transition-colors"
                >
                  Ver demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
