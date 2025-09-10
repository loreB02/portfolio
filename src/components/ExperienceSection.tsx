import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Calendar, MapPin, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
  type: 'work' | 'internship' | 'freelance';
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Pasante de Análisis de Datos',
      company: 'ARTECH | Fundación Pescar',
      location: 'Buenos Aires, Argentina',
      period: 'Julio 2025 - Diciembre 2025',
      description: [
        'Formación profesional especializada en Análisis de Datos. Desarrollo intensivo en Python y SQL, complementado con el fortalecimiento de habilidades blandas para el ambiente profesional.',
        'Formación Técnica (237hs)',
        'Formación de Habilidades interpersonales (180hs)',
      ],
      technologies: ['Python', 'SQL Server', 'Power BI', 'DataBricks', 'Power Apps', 'Inteligencia Artificial'],
      type: 'internship'
    },
  ];

  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'work':
        return 'bg-pixel-purple';
      case 'internship':
        return 'bg-pixel-orange';
      case 'freelance':
        return 'bg-pixel-cyan';
      default:
        return 'bg-pixel-purple';
    }
  };

  const getTypeLabel = (type: Experience['type']) => {
    switch (type) {
      case 'work':
        return 'Tiempo Completo';
      case 'internship':
        return 'Práctica Profesional';
      case 'freelance':
        return 'Freelance';
      default:
        return 'Trabajo';
    }
  };

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiencia Profesional
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pixel-purple to-pixel-cyan mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Mi trayectoria profesional en análisis de datos y transformación digital
          </p>
        </motion.div>

        

        {/* Experience Cards */}
        <div className="grid gap-8 max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 40px rgba(139, 92, 246, 0.15)"
              }}
            >
              <Card className="bg-card/70 backdrop-blur-sm border border-border/50 hover:border-pixel-purple/30 transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pixel-purple/5 to-pixel-cyan/5 border-b border-border/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 ${getTypeColor(experience.type)} rounded-lg`}>
                          <Briefcase className="text-white" size={20} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-foreground font-bold">
                            {experience.title}
                          </CardTitle>
                          <p className="text-pixel-purple font-semibold flex items-center gap-2 mt-1">
                            <Building2 size={18} />
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span className="font-medium">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span className="font-medium">{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Badge 
                      className={`${getTypeColor(experience.type)} text-white border-none font-medium px-4 py-2 text-sm`}
                    >
                      {getTypeLabel(experience.type)}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  {/* Descripción */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-pixel-purple rounded-full"></div>
                      Descripción
                    </h4>
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <motion.li 
                          key={i}
                          className="text-foreground/80 font-medium flex items-start gap-3 leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-1.5 h-1.5 bg-pixel-cyan rounded-full mt-2.5 flex-shrink-0"></span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Logros */}
                  {experience.achievements && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp size={16} className="text-pixel-green" />
                        Logros Destacados
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {experience.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="bg-pixel-green/10 border border-pixel-green/20 rounded-lg p-3 flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="w-2 h-2 bg-pixel-green rounded-full flex-shrink-0"></div>
                            <span className="text-foreground/80 font-medium text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tecnologías */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-pixel-orange rounded-full"></div>
                      Tecnologías Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-muted/80 text-foreground hover:bg-pixel-purple/20 transition-colors duration-200 font-medium px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>      
      </div>
    </section>
  );
}