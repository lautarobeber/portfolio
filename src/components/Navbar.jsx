import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import recortada from '../assets/recortada.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre mí', href: 'home' },
    { label: 'Proyectos', href: 'projects' },
    { label: 'Contacto', href: 'contact' },
  ];

  const linkClass =
    'px-3 py-1.5 md:px-3.5 md:py-2 text-xs md:text-sm font-medium text-slate-dark border-b-2 border-transparent hover:border-slate-dark transition-colors duration-300';

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="bg-sand/40 backdrop-blur-xl rounded-3xl shadow-lg shadow-slate-dark/5 border border-slate-light/20">
        <div className="flex items-center justify-between md:justify-center gap-2 md:gap-3 px-3 py-2 md:py-2.5">
          {/* Avatar + enlaces juntos en desktop */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => setAvatarModalOpen(true)}
              className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full bg-gradient-to-br from-slate-light to-slate overflow-hidden flex items-center justify-center cursor-pointer ring-2 ring-transparent hover:ring-slate-light/50 transition-all focus:outline-none focus-visible:ring-slate-dark/40"
              aria-label="Ver foto de perfil"
            >
              <img
                src={recortada}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                className={linkClass}
              >
                {link.label}
              </a>
            ))}
          </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-2xl hover:bg-slate-dark/10 transition-colors"
          >
            {isOpen ? <X size={20} className="text-slate-dark" /> : <Menu size={20} className="text-slate-dark" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-slate-light/20 mt-2">
            <div className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className={`${linkClass} block text-center`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {avatarModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-slate-dark/80 backdrop-blur-md"
            onClick={() => setAvatarModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Foto de perfil"
          >
            <div
              className="relative flex flex-col items-center max-w-[min(90vw,28rem)] sm:max-w-[min(92vw,36rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setAvatarModalOpen(false)}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-sand text-slate-dark shadow-lg ring-2 ring-slate-light/40 hover:bg-slate-light hover:scale-105 transition-all"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5 stroke-[2.5]" />
              </button>
              <div className="overflow-hidden rounded-2xl bg-sand shadow-2xl ring-1 ring-slate-light/30">
                <img
                  src={recortada}
                  alt="Foto de perfil"
                  className="block max-h-[min(75vh,520px)] max-w-[min(90vw,520px)] w-auto h-auto object-contain"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
};

export default Navbar;
