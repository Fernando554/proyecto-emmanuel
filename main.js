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


  this.setNombre = function(){
    Nombre = Nob;
  }

  this.setApellido = function(){
    Apellido = Ape;
  }

  this.setUsuario = function(){
    Usuario = Usu;
  }
}

function salida(){
  
  var obj= new datos();

  var Nob = document.getElementById("nombre").value;
  var Ape = document.getElementById("apellido").value;
  var Usu = document.getElementById("usuario").value;

  obj.setNombre(Nob);
  obj.setApellido(Ape);
  obj.setUsuario(Usu);

  var nr1= obj.getNombre();
  var nr2= obj.getApellido();
  var nr3= obj.getUsuario();

  document.write("Formularios con datos principales: ");

  document.write("NOMBRE: "+nr1+"<br>");
  document.write("APELLIDOS: "+nr2+"<br>");
  document.write("USUARIO: "+nr3+"<br>");

  
}