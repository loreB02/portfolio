import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Heart, Target } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Mí
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pixel-purple to-pixel-cyan mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mi Historia */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-pixel-purple/50 bg-card/80 backdrop-blur-sm h-full">
              <CardHeader className="text-center pb-4">
                <motion.div 
                  className="mx-auto w-16 h-16 bg-gradient-to-br from-pixel-purple to-pixel-pink rounded-lg flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <CardTitle className="text-2xl text-foreground font-bold">
                  Mi Historia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                  Mi pasión por los datos comenzó durante mis estudios universitarios, cuando descubrí 
                  el poder de transformar hechos en historias significativas. 
                </p>             
                <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                  Cuando no estoy trabajando en código, me encanta leer y aprender cosas nuevas, ya sea sobre tecnología, datos o historias que me inspiren a seguir creciendo.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mis Intereses */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-pixel-cyan/50 bg-card/80 backdrop-blur-sm h-full">
              <CardHeader className="text-center pb-4">
                <motion.div 
                  className="mx-auto w-16 h-16 bg-gradient-to-br from-pixel-cyan to-pixel-green rounded-lg flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
                <CardTitle className="text-2xl text-foreground font-bold">
                  Mis Intereses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    {
                      title: "Machine Learning:",
                      description: "Explorar algoritmos predictivos y modelos de inteligencia artificial para resolver problemas complejos.",
                      color: "bg-pixel-purple"
                    },
                    {
                      title: "Data Storytelling:",
                      description: "Crear narrativas convincentes que transformen datos abstractos en historias comprensibles.",
                      color: "bg-pixel-cyan"
                    },
                    {
                      title: "Visualización Interactiva:",
                      description: "Desarrollar dashboards dinámicos que permitan explorar datos de manera intuitiva.",
                      color: "bg-pixel-orange"
                    },
                    {
                      title: "Automatización:",
                      description: "Implementar procesos automatizados para mejorar la eficiencia en el análisis de datos.",
                      color: "bg-pixel-pink"
                    },

                  ].map((interest, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-3 h-3 ${interest.color} rounded-lg mt-2 flex-shrink-0 shadow-sm`}></div>
                      <p className="text-foreground/80 font-medium">
                        <span className="font-bold text-foreground">{interest.title}</span> {interest.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}