// creacion del objeto persona con sus atributos
class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }

    //funcion para mostrar generacion
    mostrarGeneracion() {
      let generacion = '';
      if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        generacion = 'Generación Z: Irreverencia';
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = 'Generación Y: Frustración';
      } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        generacion = 'Generación X: Obsesión por el éxito';
      } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        generacion = 'Generación Baby Boom: Ambición';
      } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
        generacion = 'Generación Silent Generation: Austeridad';
      } else {
        generacion = 'No se puede determinar la generación';
      }
      alert(generacion);
    }

    //funcion para mostrar el mayor de edad
    esMayorDeEdad() {
      if (this.edad >= 18) {
        alert(`${this.nombre} es mayor de edad.`);
      } else {
        alert(`${this.nombre} no es mayor de edad.`);
      }
    }
//funcion para deslgosar los datos del obejto
    mostrarDatos() {
      return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de Nacimiento: ${this.anioNacimiento}`;
    }
  }
// funcion para crear a los objetos 
  function crearPersona() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value.toUpperCase();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);

    const nuevaPersona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
    alert(nuevaPersona.mostrarDatos());
  }

  function mostrarGeneracion() {
    const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);
    const persona = new Persona('', 0, '', '', 0, 0, anioNacimiento);
    persona.mostrarGeneracion();
  }

  function esMayorDeEdad() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value.toUpperCase();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);

    const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
    persona.esMayorDeEdad();
  }

  function mostrarInfo() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value.toUpperCase();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);

    const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
    alert(persona.mostrarDatos());
  }