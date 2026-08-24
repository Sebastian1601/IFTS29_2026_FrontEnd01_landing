# IFTS29_2026_FrontEnd01_landing
Repositorio Creado para el proyecto de la materia Front End en la Tecnicatura en desarrollo de software del IFTS N°29

Desarrollo de la landing page basada en mi, como CV digital y en linea para presentarme, mostrar habilidades y competencias y desplegar en vercel la misma.

## Tecnologías
- HTML
- CSS

## Enlaces
- [Repositorio en Github](https://github.com/Sebastian1601/IFTS29_2026_FrontEnd01_landing)

- [IFTS29 2026 Frontend landing en Vercel](https://ifts-29-2026-front-end01-landing-sebastian1601s-projects.vercel.app/)

## Creación de la página principal

La estructura completa se basa en el universo del juego de fantasía The Witcher. La IA usada es ChatGPT porque, en principio, es gratuita, y aparte, no solicita abonar un plan como actualmente solicitan otras para generar imágenes. La experiencia con esta IA es mínima, le suelo solicitar correcciones en parte de código cuando no entiende, o pedirle hojas de ruta para seguir estudiando y profundizando mis conocimientos en backend con Node.JS, y el lenguaje C y C#.

El prompt para solicitar la página semicompleta fue el siguiente:

**"crea una landing page en html, css y cuando mucho algo de js usando la libreria gsap para animar un scroll suave, y alguna animación minima, con tematica de the witcher 3, deja un lugar para poner una foto mia, pero que la landing tenga estilo, sea de al menos 4 secciones hero, tenga al menos un 1 form de contacto para ingrear nombre del interesado, su mail, y algun campo de notas pequeño, y usa etiquetas semánticas habituales, verifica que queden todas las etiquetas cerradas correctamente, integra 4 lugares para imagenes que luego agregaré yo, y que dichas tengan una leve animación de rotacion minima cuando se hace hover. ponle un fondo que corresponda a la temática indicada"**

Respuesta:
"Listo. Preparé una landing completa con estética de **fantasía oscura inspirada en The Witcher 3**, pero sin depender de imágenes oficiales.

Incluye:

- **5 secciones**: Hero, Sobre mí, Proyectos, Habilidades y Contacto.
- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `figure`, `form`, `footer`, etc.
- Fondo oscuro con textura, niebla, degradados y estética medieval.
- Tipografías **Cinzel + Inter**.
- GSAP para:
    - scroll suave entre secciones.
    - pequeñas animaciones de entrada.
    - rotación mínima de **0.8°** al hacer hover sobre las imágenes.
- **4 espacios principales para imágenes de proyectos + 1 para tu foto**.
- Formulario con:
    - nombre
    - email
    - notas
- Diseño responsive para móvil.
- `prefers-reduced-motion` para usuarios que prefieren reducir animaciones.
- Los archivos HTML/CSS/JS fueron comprobados mediante un parser HTML y **el HTML se pudo parsear correctamente**.
- No requiere Node.js: GSAP se carga mediante CDN.



## Creacion de Logos con IA ChatGPT
La creación de imágenes gratuita de la herramienta es muy buena, aunque limitada para un uso de trabajo normal diría yo. Apenas creando 5 imágenes ya me solicitó abonar algún plan.

### Logo de github
nuevamente, solicitado a ChatGPT dado que es el que no se anda con vueltas al momento de crear las imágenes. Las demás IA que conozco, que no son muchas, solicitan registrarse, y encima ahora tienen planes pagos para todo esto.
De hecho, el diseño que presentó chatgpt está bastante bien a mi criterio. No desentona con el resto de la página.

**Prompt:** 
"crea el logo de github pero basado en the witcher 3, con colores oscuros dominando el logo"

### Logo de LinkedIn

**Prompt:**
crea otro logo con la misma base en the witcher 3, pero que este sea de linked in

### Logo de tecnologías con estilo visual Witcher
**Prompt**
genera una imagen de tamaño similar a la anterior, donde los logos de los lenguajes de javascript, html, css, mysql, nodejs, c# y git se vean como los símbolos de los poderes del witcher, formando un circulo o estrella, pero todo estilizado como el universo witcher, que tenga colores acentuados brillantes, y un fondo de tinte oscuro

## Agregados manuales
En particular, me gustó desde un primer momento como quedó la landing basada en este universo. A partir de ahi, solicité a la IA me cree los logos necesarios mencionados junto con la imagen de confirmación de envío de formulario.
Las imágenes de los proyectos las descargué de internet directamente, con método tradicional de buscador y "guardar imagen como..."

Agregué la sección de los logos de Github y LinkedIn, junto con el CSS correspondiente, y la parte del modal al confirmar el formulario también fue de confección manual, sumando el miniDavid.
