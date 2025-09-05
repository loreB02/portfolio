import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no tiene un formato válido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es obligatorio';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Por favor, completa todos los campos correctamente');
      return;
    }

    setIsSubmitting(true);

    try {
      // Configuración de EmailJS
      const emailParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'loredana.bejarano@gmail.com', // Tu email de destino
      };

      await emailjs.send(
        'service_6vo37sa',     // 👈 Reemplaza con tu Service ID de EmailJS
        'template_lid6u4j',    // 👈 Reemplaza con tu Template ID de EmailJS
        emailParams,
        'wPt3yznirOkXZfI2d'      // 👈 Reemplaza con tu Public Key de EmailJS
      );

      toast.success('¡Mensaje enviado correctamente! Te contactaré pronto.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pixel-purple to-pixel-cyan mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            ¡Hablemos! 
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-purple/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
                  Enviar Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={`${errors.subject ? 'border-destructive' : ''}`}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple to-cyan hover:from-purple/90 hover:to-cyan/90 text-white py-3 text-lg"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>

          {/* Contact info and social */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-cyan/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-center bg-gradient-to-r from-cyan to-orange bg-clip-text text-transparent">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple to-lilac rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:loredana.bejarano@gmail.com"
                      className="text-muted-foreground hover:text-purple transition-colors"
                    >
                      loredana.bejarano@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan to-orange rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-orange/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-center bg-gradient-to-r from-orange to-lilac bg-clip-text text-transparent">
                  Seguíme en Redes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="https://github.com/loreB02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple to-lilac rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-sm text-muted-foreground">@loreB02</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/loredana-bejarano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan to-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Loredana Bejarano</p>
                  </div>
                </a>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}