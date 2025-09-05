import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, BarChart3, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      icon: Code,
      gradient: 'from-pixel-purple to-pixel-pink',
      skills: ['Python', 'R', 'SQL', 'C']
    },
    {
      title: 'Bases de Datos',
      icon: Database,
      gradient: 'from-pixel-pink to-pixel-cyan',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLServer', 'SQLite']
    },
    {
      title: 'Herramientas de BI',
      icon: BarChart3,
      gradient: 'from-pixel-orange to-pixel-yellow',
      skills: ['Tableau', 'Power BI', 'Looker', 'Qlik Sense', 'Google Analytics']
    },
    {
      title: 'Librerías de Python',
      icon: Layers,
      gradient: 'from-pixel-purple to-pixel-green',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter']
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Habilidades
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pixel-purple to-pixel-cyan mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Dominio técnico y personal que me permite transformar datos en valor empresarial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-pixel-purple/50 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-6">
                    <motion.div 
                      className={`mx-auto w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5 
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-foreground font-bold">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary"
                            className={`px-4 py-2 text-sm font-medium bg-gradient-to-r ${category.gradient} text-white cursor-default shadow-md border border-white/20`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional soft skills section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-card/50 to-pixel-purple/10 border-2 border-pixel-purple/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground mb-4 font-bold">
                Habilidades Personales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                <motion.div 
                  className="space-y-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-pixel-purple to-pixel-pink rounded-lg mx-auto flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 5 }}
                  >
                    <span className="text-2xl">💡</span>
                  </motion.div>
                  <h4 className="font-bold text-foreground">Pensamiento Analítico</h4>
                  <p className="text-sm text-foreground/70 font-medium">
                    Capacidad para descomponer problemas complejos y encontrar soluciones estructuradas
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-pixel-cyan to-pixel-green rounded-lg mx-auto flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: -5 }}
                  >
                    <span className="text-2xl">🎯</span>
                  </motion.div>
                  <h4 className="font-bold text-foreground">Orientación a Resultados</h4>
                  <p className="text-sm text-foreground/70 font-medium">
                    Enfoque meticuloso en la entrega de insights accionables y valor empresarial
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-pixel-orange to-pixel-yellow rounded-lg mx-auto flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 5 }}
                  >
                    <span className="text-2xl">🤝</span>
                  </motion.div>
                  <h4 className="font-bold text-foreground">Comunicación Efectiva</h4>
                  <p className="text-sm text-foreground/70 font-medium">
                    Habilidad para traducir hallazgos técnicos en narrativas comprensibles para stakeholders
                  </p>
                </motion.div>

                {/* New skills */}
                <motion.div 
                  className="space-y-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-pixel-pink to-pixel-purple rounded-lg mx-auto flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: -5 }}
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>
                  <h4 className="font-bold text-foreground">Innovación Tecnológica</h4>
                  <p className="text-sm text-foreground/70 font-medium">
                    Pasión por adoptar nuevas tecnologías y metodologías para optimizar procesos de datos
                  </p>
                </motion.div>

                <motion.div 
                  className="space-y-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-pixel-yellow to-pixel-orange rounded-lg mx-auto flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 5 }}
                  >
                    <span className="text-2xl">⚡</span>
                  </motion.div>
                  <h4 className="font-bold text-foreground">Adaptabilidad Ágil</h4>
                  <p className="text-sm text-foreground/70 font-medium">
                    Capacidad de adaptarse rápidamente a cambios y trabajar eficientemente en entornos dinámicos
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}