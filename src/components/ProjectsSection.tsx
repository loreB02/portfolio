import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Dashboard de Ventas E-commerce',
      description: 'Análisis completo del comportamiento de compra y tendencias de ventas para una plataforma de e-commerce. Incluye segmentación de clientes, análisis de cohortes y predicción de churn.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZCUyMHByb2plY3R8ZW58MXx8fHwxNzU2OTA3MjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Pandas', 'Tableau', 'SQL', 'PostgreSQL'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Modelo Predictivo de Demanda',
      description: 'Desarrollo de un modelo de machine learning para predecir la demanda de productos basado en datos históricos, estacionalidad y variables externas como el clima y eventos especiales.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBhbmFseXRpY3MlMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc1NjkwNzI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Jupyter', 'Plotly'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Análisis de Sentimientos en Redes Sociales',
      description: 'Procesamiento de texto y análisis de sentimientos de menciones de marca en redes sociales para identificar tendencias de percepción y oportunidades de mejora en el servicio al cliente.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGNoYXJ0cyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTY5MDcyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'NLTK', 'MongoDB', 'Power BI', 'Twitter API'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proyectos
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pixel-purple to-pixel-cyan mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Una selección de proyectos que demuestran mi experiencia en análisis de datos, 
            machine learning y visualización
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-pixel-purple/50 overflow-hidden bg-card/80 backdrop-blur-sm h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pixel-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-pixel-purple transition-colors duration-300 font-bold">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-foreground/80 text-sm leading-relaxed font-medium flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-foreground">Tecnologías utilizadas:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="outline"
                            className="text-xs px-2 py-1 border-pixel-purple/30 text-pixel-purple hover:bg-pixel-purple hover:text-white transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        size="sm"
                        className="w-full bg-gradient-to-r from-pixel-purple to-pixel-pink hover:from-pixel-purple-dark hover:to-pixel-pink text-white shadow-lg"
                        onClick={() => window.open(project.demoLink, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Ver Demo
                      </Button>
                    </motion.div>
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        size="sm"
                        variant="outline"
                        className="w-full border-2 border-pixel-cyan text-pixel-cyan hover:bg-pixel-cyan hover:text-background shadow-lg"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Código
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}