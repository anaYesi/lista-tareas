var arrayDatos=[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
];
  var aLista=[];
  var listando = document.getElementById('listasBiñetas');
  function ListarTarea(tarea) 
  {
    this.tarea = tarea.toLowerCase();
  }
  ListarTarea.prototype.toHTML = function () 
  {
    var html = '';
    html += "<li>"+this.tarea.toUpperCase()+"</li>";
    html += '<br><br>';
    return html;
  }
  function mergeHTML ()
  {
    var html = '';
    for (var i=0; i<aLista.length; i++)
    {
      html += aLista[i].toHTML();
    }
    return html;
  }
  function printHTML (html)
  {
    listando.innerHTML = html;
    listando.innerHTML = html;
  }
  var botonAñadir = document.getElementById('añadirBtn');
  botonAñadir.onclick = function () 
  {
    var agregar = document.getElementById('añadirInput').value;
    var l  = new ListarTarea(tarea);
    aLista.push(l);
    document.getElementById('añadirInput').value="";
    printHTML(mergeHTML());

};
  var mostrar_string = "";
  for (var i =0; i<arrayDatos.length;i++)
  {
    var dato_1 = arrayDatos[i];
  //alert (dato_1);
    var s ="<div>"+"<li>"+ "Tarea "+ (i+1)+": " + dato_1.title +"</div>";
    mostrar_string += s;
  
  }
document.write( mostrar_string  );
