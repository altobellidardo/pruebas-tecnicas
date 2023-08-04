# 01 Reading list 📖

🔗 URL: https://daltobelli-01-reading-list.netlify.app/

Server  status 👇

[![Netlify Status](https://api.netlify.com/api/v1/badges/38b8bd41-1412-4466-ae90-44d11ddd469e/deploy-status)](https://app.netlify.com/sites/daltobelli-01-reading-list/deploys)

🔗 Reference URL: https://darkwool-libreria.netlify.app/

### Technologies :
- Vite
- React 
- Boostrap icons

### Funcionalidad

- [x] Visualización de Libros Disponibles: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

- [x] Creación de Lista de Lectura: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

- [x] Filtrado de Libros por Género: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

- [x] Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

- [ ] Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

- [ ] Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

- [x] Despliegue: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.

- [ ] Test: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.


### Desafíos adicionales

#### ¿Quieres ir más allá? Estos son algunos desafíos adicionales que puedes intentar:

- [x] Implementar una funcionalidad de búsqueda en la lista de libros disponibles.

- [x] Añade un nuevo filtro para filtrar los libros por número de páginas.

- [X] Permitir la reorganización de los libros en la lista de lectura por prioridad.

- [X] Haz que tu diseño sea responsive.

## Configurar proyecto

1. Clonar el repositorio

```bash
git clone https://github.com/altobellidardo/pruebas-tecnicas
```

2. Ir al proyecto

```bash
cd pruebas-tecnicas/01-reading-list/
```

3. Instalar dependiencias

```bash
npm install
```

4. Correr el proyecto

```bash
npm run dev
```

5. Abrir el proyecto en el navegador

🔗 [http://localhost:5173/](http://localhost:5173/)