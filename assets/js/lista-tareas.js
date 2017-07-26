var aDatos=[
  {
    "userId": 1,
    "id": 1,
    "title": "Delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "Et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "Laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "Qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "Illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "Quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "Molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "Illo est ratione doloremque quia maiores aut",
    "completed": true
  }
];

  //var aDatos=[];
  var listando = document.getElementById('mostrar');
  function ListarTarea(title) 
  {
    this.userId = 1;
    this.id = 1;
    this.title = title;
    this.completed= false;
  }
  ListarTarea.prototype.toHTML = function () 
  {
    var la = '';
    la += this.title;
    
    return la;
    console.log(la);
  }
  function concatenarArray ()
  {
    var html = '';
    for (var i =0; i<aDatos.length;i++)
 {
  var dato_1 = aDatos[i];
  var s = "<div>" + "<li>"+ dato_1.title +"</li>"+"</div>";
    html += s;
 
 }
    return html;
  }
  /*function imprimirArray (html)
  {
    listando.innerHTML = html;
  }*/
  var botonAgregar = document.getElementById('agregarBtn');
  botonAgregar.onclick = function () 
  {
    var agregar = document.getElementById('agregarInput').value;
    var list = new ListarTarea(agregar);
    aDatos.push(list);
    document.getElementById('agregarInput').value="";
    listando.innerHTML = concatenarArray();
    //imprimirArray(concatenarArray());

};
listando.innerHTML = concatenarArray();

var vinietas = document.getElementsByTagName('li');
for(var i = 0; i< aDatos.length; i++)
{
  vinietas[i].addEventListener('click',redireccionar,false);
}

function redireccionar(event)
{
  var a = event.target.textContent;
  var tacharDiv =document.getElementById("tacharDiv");
  tacharDiv.innerHTML = a;
  var vinieta = event.target;
}
