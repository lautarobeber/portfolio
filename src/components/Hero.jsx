const Hero = () => {
  return (
    <section id="home" className="font-outfit min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-12 bg-sand">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-dark mb-8 leading-tight">
            Lautaro Beber — Ssr Developer
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate leading-relaxed max-w-2xl mx-auto mb-12">
        Construyo y lanzo productos digitales, combinando código, negocio y experiencia de usuario.
        </p>

        {/* Companies */}
        {/* <p className="text-sm text-slate/60 uppercase tracking-wider mb-8">
          transforma ideas en productos que funcionan y escalan.
        </p> */}

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-block text-sm font-medium tracking-wide text-sand bg-slate-dark px-6 py-3 rounded-xl border border-transparent transition-colors duration-300 hover:bg-slate-dark-hover"
        >
          Trabajemos juntos
        </a>
      </div>
    </section>
  );
};

export default Hero;
