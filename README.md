JJesusGonzalez ® 2015

Curso Desarrollo de servicios en la nube con HTML5, Javascript y node.js


Modulo 7. Proyecto Quiz II: La Base de Datos (DB), Tablas, sequelize.js y SQLite; Despliegue en Heroku utilizando Postgres; Presentación de Listas de Quizes y Autoload  

 
Ejercicio P2P Obligatorio

Explicación de la tarea




Añadir a Quiz un Buscador de Preguntas

Se pide añadir un formulario de búsqueda en la página que muestra la lista de preguntas (/quizes). El formulario tendrá un campo para introducir el texto a buscar, y un botón enviar (submit). El resultado de la búsqueda contendrá todas las preguntas que contengan el texto introducido en el formulario ordenadas alfabéticamente.

Este desarrollo debe realizarse en una rama llamada busquedas, la cual se mezclara con la rama master una vez se haya terminado esta práctica.

La ruta de la lista de preguntas podrá llevar una query opcional con el texto a buscar, quedando la primitiva del interfaz REST así:

GET  /quizes?search=texto_a_buscar

Esta primitiva devolverá la página con el listado de todas las preguntas que contengan el texto indicado, ordenadas alfabeticamente.

El formulario de búsqueda deberá ser de tipo GET y enviar un parámetro "search" con el texto (string) buscado. De esta forma, si en el formulario se escribe Italia, al pulsar el botón de submit, se enviará al servidor: GET /quizes?search=Italia.

Para implementar esta funcionalidad hay que modificar la acción index del controlador (controllers/quiz_controller.js) para que busque las preguntas que contienen el texto especificado en la query.

Para realizar la búsqueda de las preguntas en la base de datos, use la función findAll de sequelize. Debe usar el operador LIKE y el comodín % en la condición WHERE. Debe usar un formato como este:

findAll({where: ["pregunta like ?", search]}]

No olvide delimitar el string contenido en search con el comodín % antes y después y cambie también los espacios en blanco por %. De esta forma, si busca "uno dos" ("%uno%dos%"), mostrará todas las preguntas que tengan "uno" seguido de "dos", independientemente de lo que haya entre "uno" y "dos".

Finalmente, despliegue en heroku su practica y suba los cambios a GitHub.