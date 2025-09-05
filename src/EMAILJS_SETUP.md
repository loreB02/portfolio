# 📧 Configuración de EmailJS para el Portfolio

## Pasos para configurar EmailJS y conectar el formulario con Gmail

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Confirma tu email

### 2. Conectar tu Gmail
1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Autoriza el acceso a tu cuenta de Gmail (loredana.bejarano@gmail.com)
5. Copia el **Service ID** que se genera

### 3. Crear un template de email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura el template con este contenido:

**Subject:** 
```
Nuevo mensaje de contacto: {{subject}}
```

**Content:**
```
Has recibido un nuevo mensaje desde tu portfolio:

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Enviado desde el formulario de contacto de tu portfolio
```

4. Copia el **Template ID** que se genera

### 4. Obtener tu Public Key
1. Ve a **"Account"** → **"General"**
2. Copia tu **Public Key**

### 5. Actualizar el código
En el archivo `/components/ContactSection.tsx`, reemplaza estas líneas:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',     // 👈 Reemplaza con tu Service ID
  'YOUR_TEMPLATE_ID',    // 👈 Reemplaza con tu Template ID
  emailParams,
  'YOUR_PUBLIC_KEY'      // 👈 Reemplaza con tu Public Key
);
```

### 6. Variables del template
El código ya está configurado para enviar estas variables:
- `from_name`: Nombre del usuario
- `from_email`: Email del usuario  
- `subject`: Asunto del mensaje
- `message`: Contenido del mensaje
- `to_email`: Tu email de destino (ya configurado como loredana.bejarano@gmail.com)

### 7. Límites del plan gratuito
- 200 emails por mes
- Sin límite de templates
- Sin límite de servicios

¡Una vez completados estos pasos, tu formulario de contacto enviará emails directamente a tu Gmail! 📧✨