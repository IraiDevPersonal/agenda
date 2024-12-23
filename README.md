# iniciar Proyecto

1. Ejecutar comando `npm install` o `bun install` o `yarn install`
2. Crear rama de trabajo (la mia es iraidev), evitar trabajar en main (podrian bloquearse los push, no se como xD)

# Estructura de carpetas

La estructura de carpetas es basada en "features" dentro se encontrara una carpeta
que define cada funcionalidad de la aplicación, en general la estructura de de cada funcionaliad.

La carpeta "config" es apra adaptar paquetes externos, siempre deben pasar por aqui, aqui se encontraran clases o funciones adaptadoras, como tambien constantes de variables de entorno o rutas del sistema por ejemplo.

La carpeta "utils" es donde se encuentran las funciones helpers.

### Ejemplo

- config
- features
  - auth
    - components
    - layouts
    - pages
    - hooks
    - stores
    - services
    - utils
    - domain/(entities.ts|models.ts) "aqui se elige entre separar las carpeta o dejar todo en domain"
- utils

En general todas las features conservan esta estructura, pero no hay problema en obviar alguna carpeta o agregar otra mientras tenga sentido.

Se encontrara una carpeta "especial" dentro de features que es "shared" es donde se agregan todos los componetes, paginas, hooks, etc, que suelen compartirse en todas las demas features, tambien aqui se puede adaptar los componentes de paquetes externos y en especial la carpetas routes que es donde se defina el punto de entrara de cada ruta y los "guards/layouts" para proteccion de rutas o proteccion por rol de usuarios.

## Consejos

Para escribir codigo en general y para estilos de componentes, tratar de seguir el mismo patron en estructura, en medidas de bordes, paddings, margins, etc... para mantener homogeneo el proyecto en toda su extension.
