Creación del readme 


Explicacion del sistema:


  Interfaz:
  
![image](https://github.com/user-attachments/assets/91b12f0c-e527-4c8b-9c16-0e942484cc4f)

  - Los usuarios escriben los nombres de los participantes y los añaden con el botón "Añadir".
  - los nombres ingresados se iran mostrando en la parte de abajo
  - Una vez ingresados todos los nombres, se presiona "Sortear amigo" para sortear al amigo secreto de entre toda la lista de amigos.
  - el sistema esoge de manera aleatoria uno de los nombres ingresados y lo muestra en pantalla


 Alertas:
  - si el usuario presiona el boton añadir cuando no ha escrito un nombre aparecera la siguiente alerta:
    
  - si el usuario presiona el boton sortear amigo cuando no ha escrito un nombre aparecera la siguiente alerta


  Funciones de codigo:

  
  actualizarLista(texto)

    Obtiene el elemento HTML con id="listaAmigos" donde se mostrará la lista.
    Borra el contenido actual de listaAmigos para evitar duplicaciones.
    Recorre el arreglo listaAmigos y agrega cada amigo como un elemento <li> dentro de la lista.

![image](https://github.com/user-attachments/assets/26d765be-2338-4ac1-87a9-ec2f5fb78965)

    
  agregarAmigo()
    
    Captura el valor ingresado en el input con id="amigo" y elimina espacios en blanco.
    Verifica que el campo no esté vacío; si lo está, muestra un alert("vacío").
    Verifica que el nombre no esté repetido en listaAmigos; si está repetido, muestra un alert("repetido").
    Si es un nombre válido, lo agrega al array listaAmigos en la posición contador y luego incrementa contador.
    Limpia el campo de entrada llamando a limpiarTexto().
    Llama a actualizarLista(amigo) para mostrar la lista actualizada en la interfaz

![image](https://github.com/user-attachments/assets/fabc75c6-3c1f-4877-a82c-4bb46020d125)


  limpiarTexto()

    Busca el input con id="amigo" y le asigna una cadena vacía ''.

![image](https://github.com/user-attachments/assets/9f9bb53f-68cf-4c10-af03-2fe23b3c2ba8)

    
  sortearAmigo()
  
    Verifica si hay más de un amigo en listaAmigos
    Si hay suficientes amigos, genera un índice con valor 0
    Llama a mostrarResultado(indice, amigoSecreto), donde amigoSecreto es el índice del amigo sorteado.
    Si hay menos de dos amigos, el valor de indice cambia a 1.
    se genera una variable texto que contiene "no hay amigos suficientes"
    se llama a mostrarResultado(indice, texto)

![image](https://github.com/user-attachments/assets/9e846e4b-168e-4c8b-8309-0c8c08984ee6)


  mostrarResultado(indice, texto)

    Busca el elemento con id="resultado".
    Si indice == 0, muestra el nombre del amigo secreto en la interfaz.
    Si indice == 1, muestra el mensaje "no hay amigos suficientes".
        
![image](https://github.com/user-attachments/assets/08c2c088-595d-4d6c-8c3f-3fdc3806703c)

MEJORAS:
