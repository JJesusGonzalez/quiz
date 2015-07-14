JJesusGonzalez ® 2015

Curso Desarrollo de servicios en la nube con HTML5, Javascript y node.js


Modulo 9. Proyecto Quiz IV: Creación y Moderación de Comentarios a Quizes; Relaciones entre Tablas de la Base de Datos; Sesiones, Autenticación y Autorización; HTTP Seguro (HTTPS)
Ejercicio P2P Obligatorio

Explicación de la tarea

Añadir auto-logout de sesión
 
Se pide añadir a la gestión de sesiones un mecanismo de autologout, de forma que si un usuario está inactivo (sin enviar ninguna solicitud HTTP) más de 2 minutos, la sesión se desconecte y deba volver a autenticarse para continuar.

Para implementar esta funcionalidad se recomienda añadir un middleware de auto-logout en app.js que guarde en cada transacción la hora del reloj del sistema en una variable de la sesión a la que está asociada. El middleware debe comprobar en cada transacción con una sesión activa si la han transcurrido más de 2 minutos desde la transacción anterior en dicha sesión, en cuyo caso destruirá la sesión.

Una vez realizados los cambios, debe guardarse una nueva versión (commit).

Ampliación opcional: Añadir una página de estadisticas
 
Las personas interesadas en practicar más con express y MVC, pueden añadir una página de estadisticas. La página de estadisticas estará accesible directamente desde la barra de navegación y mostrará las siguientes informaciones extraidas de la base de datos:

El número de preguntas
El número de comentarios totales
El número medio de comentarios por pregunta
El número de preguntas sin comentarios
El número de preguntas con comentarios
Para implementar esta funcionalidad habra que crear una nueva entrada en el interfaz REST de quizes asociada a la ruta

     GET /quizes/statistics

Además habra que crear un nuevo controlador que extraiga la información de la base de datos y una nueva vista que la presente.

Una vez realizado habra que guardar esta funcionalidad en una nueva versión (commit). a continuación se desplegará la rama en heroku y se subirá a GitHub.