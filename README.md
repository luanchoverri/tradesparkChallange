# TradeSparkChallange

## Vista Previa

![image](https://github.com/user-attachments/assets/ecf20107-8887-4463-ba37-2a2a3f59889c)

## Especificaciones de la entrega

### Primer punto (Angular, Front-side):
- Construir un filtro sobre la tabla en la sección "Book store", el cual sea capaz de filtrar por título, autor o categoría.

Implementé el filtro dentro del componente BookStore con el html correspondiente para capturar el texto ingresado por el usuario. En el archivo TypeScript, creé un método llamado "applyFilter" que, al detectar cambios en el campo de busqueda del input, filtra la lista de libros basada en coincidencias con el título, el autor o las categorías. El resultado del filtro se muestra dinámicamente en la tabla.

Con el método "getBooks" obtengo la lista de libros desde la API al inicializar el componente. Los datos recibidos se asignan tanto a books ( la lista completa) como a filteredBooks (lista filtrada), asegurando que la tabla se rellene correctamente y permita el filtrado desde el inicio.

Este inciso se resolvió desde el lado del cliente pero obviamente se podría optimizar implementando el filtrado en el backend, ya que sirve para listas chicas o medianas pero no es tan eficiente para un volumen de libros mayor. Como el enunciado decía Front-side lo hice de esta manera :)

### Segundo punto (Django, Back-side):
- Dado el título de un libro y el nombre de una categoría, implementar la eliminación de esa categoría para el libro asociado.

Es mi primera vez usando Django por lo cual tal vez haya mejores prácticas pero la manera en la que lo resolví fue implementando una acción personalizada debtri de la clase BookViewSet llamada "remove_category", ahí valido que la categoria exista y tambien que esté asociada al libro. 
Luego en el archivo url.py se agrega la ruta: *path('books/<int:pk>/remove_category/<int:category_id>/', BookViewSet.as_view({'delete': 'remove_category'}), name='remove_category')* para que vincule el método HTTP DELETE al método remove_category dentro de la clase BookViewSet y el backend sepa exactamente qué libro y qué categorías están involucradas en la acción.

### Tercer punto (Opcional):
- Implementar un botón en la sección book store que permite eliminar una categoría perteneciente a un libro. Este botón, al ser clickeado, deberá interactuar con el backend, el cual ejecutará la lógica implementada en el segundo punto para hacer efectiva la eliminación.

Primero cree un componente CategoryChip inspirandome en los que tiene angular material para que se utiliza dentro de la tabla. Su html esta compuesto del nombre de la categoria y a la derecha un botón con simbolo de cruz que al ser clickeado permite eliminar la categoria del libro. La idea era poder independizarlo pensando también en re-utilizarlo en el form para agregar un libro (en una proxima mejora). 

**Visualización de Categorias**: Entonces cada libro tiene una lista de categorías asociadas que se renderiza dinámicamente en una sección llamada chips-container. Cada categoría es representada como un chip reutilizable mediante el componente CategoryChip
  
**Interacción**: Cuando el usuario hace click en el icono de cruz dentro del chip-categoria, se emite un evento (deleteCategory) hacia el componente padre BookStore. El evento lleva el id del libro y el id de la categoria, entonces el metodo "deleteCategoryBook" dentro del BookStore se encarga de capturarlo y llamar al servicio "deleteCategory" que realiza la solicitud HTTP al backend.

## Vistas + Funcionalidad Adicional 


### Vista para el borrado de la categoria :

![image](https://github.com/user-attachments/assets/8822331a-3473-4f59-8c4c-0a7d0c6aa85c)

### Vista del cargar libro (Adicional):

![image](https://github.com/user-attachments/assets/10fdfa19-8ed0-4738-a798-b9ce4d0f1049)

Para cargar el libro agregué el botón en el BookStore y el formulario reactivo lo separé en AddBookFormComponent. A todos los campos le puse required aunque desde Postman me dejaba crear un libro sin categorías, faltaria mensajes del estilo "este campo es requerido" que podrían mejorar la experiencia del usuario. 

onSumit() valida el form y tambien convierte los datos en el formato que espera el backend, llama al servicio "addBook" y cierra el formulario con closeDialog() una función que emite el evento isClose para notificar que el formulario se debe cerrar y resetea los campos. 

dentro del BookStore el botón de addBook llama al método que abre el dialogo de formulario seteando una variable como true

El html se ve asi :

<app-add-book-form
  [isOpen]="isModalOpen"
  (isClose)="closeAddBookDialog()"
  (bookAdded)="getBooks()"
></app-add-book-form>

(isOpen): es la variable que controla si el modal dialogs está abierto o cerrado.
(isClose): Es un evento de salida que se emite desde el formulario y llama al método closeAddBookDialog() en el componente principal para cerrar el dialogo al recibir el evento.
(bookAdded): es otro evento de salida, ahí llamo a getBooks para actualizar la lista de libros una vez que se añadió uno nuevo.

Me llevó un poquito darle estilos a esta parte aunque con angular material hubieran quedado mucho mas estéticos la idea era también mostrar que puedo se utilizar css

### Vista del filtro:

![image](https://github.com/user-attachments/assets/80b6d915-f9e5-44a0-acc5-7b30ca51f48e)


### Vista del borrado de un libro (Adicional):

![image](https://github.com/user-attachments/assets/491a292c-e905-4bf0-9076-5749369a0925)

El borrado es muy simple y no me costaba nada implementarlo, sigue una lógica parecida a la de antes.. es un botón que está en la tabla del BookStore y al clickearlo llama al método "deleteBook" pasandole el *book.id*. El metodo del componente, emite una alerta-mensaje como los demás para confirmar el borrado y llama al servicio en caso de confirmacion. El servicio no hace más que hacer la solicitud HTTP al backend

## Notas

Me hubiera gustado deployarlo pero en vercel me daba errores por la versión de Node, traté de configurar la variable de entorno con  *"$env:NODE_OPTIONS="--openssl-legacy-provider"* que soluciona temporalmente el problema 
de las dependencias pero no pude. Por eso van a ver la carpeta docs que crea el build, de todas maneras localmente puede verse. Gracias por leer!
