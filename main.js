function datos(){

  this.Nombre = "";
  this.Apellido = "";
  this.Usuario = "";

  this.getNombre = function(){
    return Nombre;
  }

  this.getApellido = function(){
    return Apellido;
  }

  this.getUsuario = function(){
    return Usuario;
  }


  this.setNombre = function(Nom){
    Nombre = Nom;
  }

  this.setApellido = function(Ape){
    Apellido = Ape;
  }

  this.setUsuario = function(Usu){
    Usuario = Usu;
  }
}

function salida(){
  
  var obj= new datos();

  var Nom = document.getElementById("nombre").value;
  var Ape = document.getElementById("apellido").value;
  var Usu = document.getElementById("usuario").value;

  obj.setNombre(Nom);
  obj.setApellido(Ape);
  obj.setUsuario(Usu);

  var nr1= obj.getNombre();
  var nr2= obj.getApellido();
  var nr3= obj.getUsuario();

  var capa = document.getElementById("capa");
  var label = document.createElement("label");

  label.innerHTML = ("<br> <h1> SUS DATOS SON LOS SIGUIENTES: </h1> <br> NOMBRE: "+nr1+"<br> APELLIDOS: "+nr2+"<br> USUARIO: "+nr3+"<br>");

  capa.appendChild(label);
}