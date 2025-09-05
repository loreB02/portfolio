import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre Mí', id: 'sobre-mi' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <footer className="bg-gradient-to-br from-pixel-purple/5 via-pixel-pink/5 to-pixel-cyan/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <motion.div 
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pixel-purple to-pixel-cyan bg-clip-text text-transparent">
              LB - Portfolio
            </h3>
            <p className="text-foreground/80 max-w-md font-medium">
              Analista de datos apasionada por transformar información compleja en insights valiosos 
              que impulsan decisiones estratégicas y generan impacto real.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/loreB02", color: "hover:text-pixel-purple" },
                { icon: Linkedin, href: "https://linkedin.com/in/loredana-bejarano", color: "hover:text-pixel-cyan" },
                { icon: Mail, href: "mailto:loredana.bejarano@gmail.com", color: "hover:text-pixel-orange" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                    rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    className={`text-foreground/70 ${social.color} transition-colors duration-300`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: index % 2 === 0 ? 5 : -5
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.id}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground/70 hover:text-pixel-purple transition-colors duration-200 text-left font-medium"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-foreground">Contacto</h4>
            <div className="space-y-2 text-foreground/80 font-medium">
              <p>loredana.bejarano@email.com</p>
              <p>Buenos Aires, Argentina</p>
              <p>Disponible para colaboraciones</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-foreground/70 font-medium">
              <span>© 2024 Loredana Bejarano. Hecho con</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ["#ec4899", "#a855f7", "#06b6d4", "#ec4899"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart size={16}/>
              </motion.div>
              <span>.</span>
            </div>
            
            <div className="text-sm text-foreground/70 font-medium">
              <p>Diseñado y desarrollado con React, TypeScript y Tailwind CSS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}