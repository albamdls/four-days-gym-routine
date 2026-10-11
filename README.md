# Mi rutina

Web sencilla para seguir mi rutina de gimnasio y anotar pesos y repeticiones desde el móvil.

Está hecha con HTML, CSS y JavaScript en un único archivo (`index.html`), sin dependencias ni servidor, y desplegada en GitHub Pages.

## Qué hace

- Una pestaña por día de entrenamiento (torso/pierna, 4 días) y se abre en el día que toca.
- Registro de peso y repeticiones por serie.
- Muestra los datos de la última vez en cada ejercicio.
- Botón "Guardar datos" por ejercicio para ir guardando durante el entrenamiento.
- Botón "Guardar sesión" para cerrar el entrenamiento y pasarlo al historial.
- Historial de sesiones, con opción de borrarlas.
- Exportar e importar una copia de seguridad en JSON.

## Dónde se guardan los datos

En el `localStorage` del navegador. No se sube nada a ningún servidor ni a este repositorio.

Esto implica que los datos no se sincronizan entre dispositivos y que se pierden si se borran los datos del navegador. Conviene exportar una copia de vez en cuando desde la pestaña "Historial".

## Uso

Abrir la URL de GitHub Pages en el móvil y añadirla a la pantalla de inicio.

Para probarla en local basta con abrir `index.html` en el navegador.

## Cambiar la rutina

Los ejercicios están en la constante `ROUTINE`, al principio del script de `index.html`. Cada ejercicio es una línea con nombre, número de series y rango de repeticiones:

```js
["Jalón al pecho", 3, "8-12"],
```

El historial se guarda por nombre de ejercicio, así que al renombrar uno deja de enlazarse con sus registros anteriores.

## Despliegue

Cada cambio subido a la rama `main` se publica automáticamente (Settings → Pages → Deploy from a branch → `main` / root).
