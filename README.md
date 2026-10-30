# hola-mundo-node

App de prueba "Hola Mundo" en Node.js + Express, lista para desplegar en Hostinger.

## Ejecutar localmente

```bash
npm install
npm start
```

Abre http://localhost:3000

## Rutas

- `/` — página "¡Hola Mundo!"
- `/api/saludo` — respuesta JSON

## Despliegue en Hostinger

- Framework: Express
- Comando de instalación: `npm install`
- Comando de inicio / archivo de entrada: `npm start` / `index.js`
- El puerto se toma de la variable de entorno `PORT` (Hostinger la asigna).
