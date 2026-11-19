# 30 días contigo ♡

Página romántica de 30 cartitas diarias, hecha con HTML, CSS y JavaScript puro. Lista para publicar con GitHub Pages.

## Fecha y desbloqueo
- Inicio: **19 de noviembre de 2026**.
- Día 1: 19 de noviembre.
- Día 30: 18 de diciembre de 2026.
- Las cartas se desbloquean automáticamente según la fecha local del dispositivo.
- Las cartas anteriores siguen disponibles. Las futuras permanecen bloqueadas.

> Importante: el desbloqueo usa la fecha del dispositivo del visitante. No es un sistema de seguridad; alguien podría cambiar la fecha del teléfono.

## Probar en tu computadora
Abre `index.html` en el navegador. No necesita instalar dependencias ni ejecutar un servidor.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub, por ejemplo `30-dias-contigo`.
2. Descomprime esta carpeta y sube **el contenido** del proyecto (index.html, styles.css, script.js, README.md y la carpeta assets).
3. En GitHub entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`, luego pulsa **Save**.
6. Espera unos minutos. GitHub mostrará el enlace público en esa misma sección.

Tu enlace tendrá una forma parecida a:
`https://TU-USUARIO.github.io/30-dias-contigo/`

## Música opcional
El botón de música ya está preparado. Para activarlo:
1. Consigue un archivo de audio que tengas derecho a usar.
2. Renómbralo exactamente `cancion.mp3`.
3. Colócalo dentro de `assets/`, de modo que exista `assets/cancion.mp3`.
4. Sube ese archivo a GitHub junto con el resto.

No se incluye música por defecto. En móviles, el navegador requiere que la persona pulse el botón para iniciar el audio.

## Personalizar
- Cambia los 30 títulos y mensajes en el arreglo `letters` de `script.js`.
- Cambia la fecha de inicio en `START_DATE` si lo necesitas. El rango visible del encabezado también está definido en `renderCalendar()`.
- Cambia la firma en `index.html` (busca `tu persona ♡`).

## Estructura
```text
30-cartitas/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
```


## Vista de prueba (desbloquear las 30 cartitas)
Después de publicar la página, abre tu enlace y añade `?preview=1` al final. Ejemplo:
`https://TU-USUARIO.github.io/30-dias-contigo/?preview=1`

Esto permite revisar todas las cartas antes de enviarla. Para la versión que compartas con tu novia, usa el enlace normal **sin** `?preview=1`; el calendario seguirá desbloqueándose desde el 19 de noviembre. La vista de prueba es una comodidad, no una protección de seguridad: cualquiera que conozca el parámetro puede activarla.
