import { MessageCircle, Linkedin, Github, Twitter } from 'lucide-react';

const WHATSAPP_NUMBER = '5493455227681';
const WHATSAPP_MESSAGE = 'Buenas Lautaro! Me interesaria comunicarme contigo!';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contact" className="py-20 px-6 bg-sand border-t border-slate-light/30">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-light text-slate-dark mb-6">
          Trabajemos juntos
        </h2>
        <p className="text-lg text-slate mb-12">
          Siempre estoy abierto a hablar sobre diseño de producto o oportunidades de colaboración.
        </p>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-slate-dark text-sand px-8 py-4 rounded-2xl text-base font-medium hover:bg-slate transition-all duration-300 hover:scale-105 mb-12"
        >
          <MessageCircle className="w-5 h-5" />
          Escribime por WhatsApp
        </a>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mt-12 pt-12 border-t border-slate-light/30">
          <a
            href="https://www.linkedin.com/in/lautaro-beber-73709b236/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-slate-dark transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/lautarobeber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-slate-dark transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          
        </div>

        {/* Footer */}
        <p className="text-sm text-slate/60 mt-12 font-mono">
          © 2026 Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
};

export default Contact;
