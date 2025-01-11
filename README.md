# TradeSparkChallange



## Getting started

### Prerequisites
Docker and docker-compose. for installation instructions see [here](https://docs.docker.com/install/)

#### Make sure that the docker daemon is running.


### Run the challange
1. Clone the repository
2. Run `docker-compose up` in the root directory of the repository
3. enter to localhost:4200 in your browser
4. Your has to see the following screen:
![example image](images/main_screen.png)


## Especificaciones de la entrega

### Primer punto (Angular, Front-side):
- Construir un filtro sobre la tabla en la sección "Book store", el cual sea capaz de filtrar por título, autor o categoría.

Implementé el filtro dentro del componente BookStore con el html correspondiente para capturar el texto ingresado por el usuario. En el archivo TypeScript, creé un método llamado "applyFilter" que, al detectar cambios en el campo de busqueda del input, filtra la lista de libros basada en coincidencias con el título, el autor o las categorías. El resultado del filtro se muestra dinámicamente en la tabla.

Con el método "getBooks" obtengo la lista de libros desde la API al inicializar el componente. Los datos recibidos se asignan tanto a books ( la lista completa) como a filteredBooks (lista filtrada), asegurando que la tabla se rellene correctamente y permita el filtrado desde el inicio.

Este inciso se resolvió desde el lado del cliente pero obviamente se podría optimizar implementando el filtrado en el backend, ya que sirve para listas chicas o medianas pero no es tan eficiente para un volumen de libros mayor. Como el enunciado decía Front-side lo hice de esta manera :)

### Segundo punto (Django, Back-side):
- Dado el título de un libro y el nombre de una categoría, implementar la eliminación de esa categoría para el libro asociado.

Es mi primera vez usando Django por lo cual tal vez haya mejores prácticas pero la manera en la que lo resolví fue implementando una acción personalizada debtri de la clase BookViewSet llamada remove_category, ahí valido que la categoria exista y tambien que esté asociada al libro. 
Luego en url.py se agrega la ruta: path('books/<int:pk>/remove_category/<int:category_id>/', BookViewSet.as_view({'delete': 'remove_category'}), name='remove_category') para que vincule el método HTTP DELETE al método remove_category dentro de la clase BookViewSet y el backend sepa exactamente qué libro y qué categorías están involucradas en la acción.

### Tercer punto (Opcional):
- Implementar un botón en la sección book store que permite eliminar una categoría perteneciente a un libro. Este botón, al ser clickeado, deberá interactuar con el backend, el cual ejecutará la lógica implementada en el segundo punto para hacer efectiva la eliminación.

Primero cree un componente CategoryChip inspirandome en los que tiene angular material para que se utiliza dentro de la tabla. Su html esta compuesto del nombre de la categoria y a la derecha un botón con simbolo de cruz que al ser clickeado permite eliminar la categoria del libro. La idea era poder independizarlo pensando también en re-utilizarlo en el form para agregar un libro (en una proxima mejora). 

Visualización de Categorías: Entonces cada libro tiene una lista de categorías asociadas que se renderiza dinámicamente en una sección llamada chips-container. Cada categoría es representada como un chip reutilizable mediante el componente CategoryChip
  
Interacción: Cuando el usuario hace click en el icono de cruz dentro del chip-categoria, se emite un evento (deleteCategory) hacia el componente padre BookStore. El evento lleva el id del libro y el id de la categoria, entonces el metodo "deleteCategoryBook" dentro del BookStore se encarga de capturarlo y llamar al servicio "deleteCategory" que realiza la solicitud HTTP al backend.

### Funcionalidad Adicional 

![image](https://github.com/user-attachments/assets/ecf20107-8887-4463-ba37-2a2a3f59889c)


![image](https://github.com/user-attachments/assets/8822331a-3473-4f59-8c4c-0a7d0c6aa85c)


![image](https://github.com/user-attachments/assets/10fdfa19-8ed0-4738-a798-b9ce4d0f1049)


![image](https://github.com/user-attachments/assets/80b6d915-f9e5-44a0-acc5-7b30ca51f48e)



![image](https://github.com/user-attachments/assets/491a292c-e905-4bf0-9076-5749369a0925)

## Notas


