royecto Tarea Web 2 - Clean Architecture

## 👥 Equipo y Plan de Acción
* **Benjamín Fernández:** Creó el README.md y la capa `domain` inicial.
* **Matías Díaz:** Inicializó configuraciones (TypeScript, package.json) y creó la capa `application` (Casos de Uso).
* **Bastián Pizarro:** Creó la capa de adaptadores/interfaces HTTP (Controladores y Rutas).

---

## 🏗️ Arquitectura del Proyecto (Clean Architecture)

El proyecto está construido usando **Node.js y TypeScript** aplicando los principios de la **Arquitectura Limpia** (Clean Architecture). El objetivo es tener un código altamente mantenible, escalable y en donde la lógica de negocio no dependa de librerías externas o frameworks.

### Estructura de Carpetas

```text
src/
├── domain/                    # CAPA 1: Reglas de Negocio Centrales
│   ├── entities/              # Modelos puros del negocio sin dependencias (ej. Message.ts)
│   └── repositories/          # Interfaces (contratos abstractos) para interactuar con la base de datos
│
├── application/               # CAPA 2: Casos de Uso
│   └── use-cases/             # Lógica específica de la app. Orquestan entidades y repositorios (ej. HolaMundoUseCase.ts)
│
├── infrastructure/            # CAPA 3: Detalles Técnicos (Adaptadores)
│   ├── repositories/          # Implementaciones reales de las bases de datos (SQL, MongoDB, etc.)
│   └── http/                  
│       ├── controllers/       # Reciben las peticiones (Request) y devuelven respuestas (Response)
│       └── routes/            # Definición de las rutas web (Endpoints)
│
├── main/                      # CAPA 4: Root / Configuración
│   └── config/                # Instancia y conecta todas las capas. Configuración del servidor y variables de entorno
│
└── index.ts                   # Archivo de entrada de la aplicación
```

### ¿Por qué esta estructura?
1. **Independencia de Frameworks:** La arquitectura no depende de si usamos Express, Fastify, etc.
2. **Independencia de la Interfaz de Usuario:** La interfaz web puede cambiar por otra consola sin alterar las reglas del negocio.
3. **Independencia de la Base de Datos:** Puedes intercambiar bases de datos porque la lógica del negocio está conectada solo a *Interfaces*.
4. **Fácil de testear:** Las reglas de negocio se pueden probar sin servidor web y sin base de datos real.

---

## 🚀 Guía de Instalación y Uso

### 1. Requisitos Previos
* [Node.js](https://nodejs.org/) instalado.
* TypeScript instalado a nivel de proyecto (`npm install typescript @types/node --save-dev`).

### 2. Instalación
Dentro de la carpeta del proyecto instala las dependencias:
```bash
npm install
```

### 3. Compilación
Para transpilar el código TypeScript a JavaScript en una carpeta de distribución (típicamente `dist/` o `build/`), utiliza:
```bash
npx tsc
```