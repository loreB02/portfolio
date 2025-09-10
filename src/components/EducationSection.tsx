import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { GraduationCap, Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  status: 'completed' | 'in-progress';
  gpa?: string;
  relevantCourses?: string[];
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  status: 'active' | 'expired';
  credentialId?: string;
}

export function EducationSection() {
  const education: Education[] = [
    {
      id: '1',
      degree: 'Ingeniería Informática',
      institution: 'Universidad Nacional de La Matanza (UNLaM)',
      period: '2021 - Presente',
      location: 'Buenos Aires, Argentina',
      description: 'Actualmente cursando 2do año.',
      status: 'completed',
      gpa: '8.3',
    }
  ];

  const certifications: Certification[] = [
    {
      id: '1',
      name: 'Data Processing + Power BI',
      issuer: 'Quales Group',
      date: '2025',
      status: 'active'
    },
    {
      id: '2',
      name: 'Python para Análisis de Datos',
      issuer: 'Talento Tech',
      date: '2025',
      status: 'active'
    },
    {
      id: '3',
      name: 'Business Intelligence',
      issuer: 'Talento Tech',
      date: '2025',
      status: 'active'
    },
    {
      id: '4',
      name: 'Python Inicial',
      issuer: 'Talento Tech',
      date: '2023',
      status: 'active'
    }
  ];

  const handleViewCertificates = () => {
    window.open('https://drive.google.com/drive/folders/1i16v9EU6x9lOFwdSmgRcuCuRz9qnKILZ', '_blank');
  };

  return (
    <section id="educacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            Educación y Certificaciones
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pixel-orange to-pixel-pink mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Formación académica y certificaciones profesionales que respaldan mi expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pixel-purple to-pixel-pink rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={20} />
                </div>
                Educación
              </h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-card/70 backdrop-blur-sm border border-border/50 hover:border-pixel-purple/30 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl text-foreground font-bold mb-2">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-pixel-purple font-semibold flex items-center gap-2 mb-1">
                            <BookOpen size={16} />
                            {edu.institution}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span className="font-medium">{edu.period}</span>
                            </div>
                            <span className="font-medium">{edu.location}</span>
                            {edu.gpa && (
                              <Badge variant="outline" className="bg-pixel-green/10 text-pixel-green border-pixel-green/30 font-medium">
                                Promedio: {edu.gpa}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Badge 
                          className={`${
                            edu.status === 'completed' 
                              ? 'bg-pixel-green text-white' 
                              : 'bg-pixel-orange text-white'
                          } border-none font-medium`}
                        >
                          {edu.status === 'completed' ? 'Completado' : 'En curso'}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-foreground/80 font-medium leading-relaxed">
                        {edu.description}
                      </p>
                      
                      {edu.relevantCourses && (
                        <div>
                          <h4 className="font-semibold text-foreground/80 mb-2">Materias Relevantes:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCourses.map((course, i) => (
                              <motion.div
                                key={course}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge 
                                  variant="secondary" 
                                  className="bg-muted/80 text-foreground hover:bg-pixel-purple/20 transition-colors duration-200 font-medium"
                                >
                                  {course}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pixel-orange to-pixel-cyan rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  Certificaciones
                </h3>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={handleViewCertificates}
                    className="bg-gradient-to-r from-pixel-orange to-pixel-pink hover:from-pixel-orange-dark hover:to-pixel-pink-dark text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Ver Certificados
                  </Button>
                </motion.div>
              </div>

              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(139, 92, 246, 0.1)"
                    }}
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-pixel-orange/30 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground mb-1">
                              {cert.name}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-foreground/70">
                              <span className="font-medium text-pixel-orange">{cert.issuer}</span>
                              <span>•</span>
                              <span className="font-medium">{cert.date}</span>
                            </div>
                          </div>
                          <Badge 
                            className={`${
                              cert.status === 'active' 
                                ? 'bg-pixel-green text-white' 
                                : 'bg-foreground/20 text-foreground/70'
                            } border-none font-medium`}
                          >
                            {cert.status === 'active' ? 'Activo' : 'Expirado'}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="text-center mt-6 p-4 bg-gradient-to-r from-pixel-purple/10 to-pixel-cyan/10 rounded-lg border border-pixel-purple/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-foreground/70 font-medium">
                  🚀 <strong>Compromiso con el aprendizaje continuo:</strong> Actualizo constantemente mis certificaciones para mantenerme al día con las últimas tecnologías y metodologías del sector.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}