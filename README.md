## Frontend del ejercicio del anime One Piece
En este repositorio se almacena la codificación del módulo de frontend con el lenguaje JavaScript y el framework React.

Se realizaron 3 pantallas para visualizar la información obtenida mediante el consumo de las api rest realizadas en el módulo de backend. 

A continuación, se describe la información de las pantallas:

- La primera pantalla muestra un listado de las películas en formato cards con la imagen de la película, el título y un enlace de información completa que redirige al url brindado como dato. Adicionalmente al presionar la imagen o el texto de la película se redirige a la segunda pantalla. Para acceder a la primera pantalla es a través del siguiente endpoint:
```
/
```
- La segunda pantalla muestra un listado de los personajes en formato cards con la imagen del personaje, el nombre, el rol y un enlace de información completa que redirige al url brindado como dato. Adicionalmente al presionar la imagen o el texto del personaje se redirige a la tercera pantalla. Para acceder a la segunda pantalla es a través del siguiente endpoint:
```
/characters/{id}
```

- La tercera pantalla muestra un listado de los personajes al completo en formato cards con la imagen del personaje, el nombre, los nicknames, el "about" del personaje y un enlace de información completa que redirige al url brindado como dato. Para acceder a la tercera pantalla es a través del siguiente endpoint:
```
/fullCharacters/{id}
```

- Adicionalmente, se desarrolló una pantalla default en caso se acceda a una dirección no contemplada en el código, la cual mostrará un mensaje que al presionarse se hará un redireccionamiento a la primera pantalla.
