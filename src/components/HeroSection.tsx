import { Button } from './ui/button';
import { TypewriterEffect } from './TypewriterEffect';
import { Github, Linkedin, Mail, Download, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import profilePhoto from '../assets/profile.png';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv/Loredana_Bejarano_CV.pdf'; // ruta dentro de public
  link.download = 'Loredana_Bejarano_CV.pdf'; // nombre con el que se guarda
  link.click();
};

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Pixel art decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 opacity-30"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 w-12 h-12 opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                ¡Hola! Soy{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pixel-purple via-pixel-pink to-pixel-cyan min-h-[1.2em]">
                  <TypewriterEffect 
                    texts={['Loredana Bejarano', 'Analista de Datos']}
                    speed={100}
                    deleteSpeed={50}
                    pauseTime={860}
                  />
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl font-medium">
                Transformo datos complejos en insights valiosos que impulsan decisiones estratégicas 
                y generan impacto real en los negocios.
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-pixel-purple to-pixel-pink hover:from-pixel-purple-dark hover:to-pixel-pink text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="mr-2" size={20} />
                  Descargar CV
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  className="border-2 border-pixel-cyan text-pixel-cyan hover:bg-pixel-cyan hover:text-background px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Contactar
                </Button>
              </motion.div>
            </motion.div>

            {/* Social icons */}
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="https://github.com/loreB02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-pixel-purple transition-colors duration-300"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  color: "var(--pixel-purple)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={32} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/loredana-bejarano" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-pixel-cyan transition-colors duration-300"
                whileHover={{ 
                  scale: 1.2,
                  rotate: -5,
                  color: "var(--pixel-cyan)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={32} />
              </motion.a>
              <motion.a 
                href="mailto:loredana.bejarano@gmail.com"
                target="_blank"
                className="text-foreground/70 hover:text-pixel-orange transition-colors duration-300"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  color: "var(--pixel-orange)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={32} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Adaptado para foto vertical/retrato */}
              <motion.div 
                className="w-72 h-96 rounded-2xl bg-gradient-to-br from-pixel-purple via-pixel-pink to-pixel-cyan p-1 shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-background/90 backdrop-blur-sm">
                  <img
                    src={profilePhoto}
                    alt="Loredana Bejarano - Analista de Datos"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
              
              {/* Floating pixel elements - ajustados para el nuevo tamaño */}
              <motion.div 
                className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-pixel-yellow to-pixel-orange rounded-xl shadow-xl opacity-90"
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-pixel-pink to-pixel-purple rounded-xl shadow-xl opacity-90"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -15, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/3 -left-10 w-8 h-8 bg-gradient-to-br from-pixel-cyan to-pixel-green rounded-lg shadow-lg opacity-80"
                animate={{ 
                  x: [0, -8, 0],
                  scale: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute top-2/3 -right-8 w-6 h-6 bg-gradient-to-br from-pixel-orange to-pixel-yellow rounded-lg shadow-lg opacity-75"
                animate={{ 
                  x: [0, 6, 0],
                  y: [0, -8, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}