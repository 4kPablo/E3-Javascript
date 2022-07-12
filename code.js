function Pizza(nombre, ingredientes, precio) {
  this.nombre = nombre;
  this.ingredientes = ingredientes;
  this.precio = precio;
}

let muzzarella = new Pizza('muzarella', ['queso'], 600);
let napolitana = new Pizza('napolitana', ['queso', 'tomate', 'albahaca'], 780);
let hawaiana = new Pizza('hawaiana', ['queso', 'ananá'], 850);
let pepperoni = new Pizza('pepperoni', ['queso', 'peperoni'], 800);
let champiñones = new Pizza('champiñones', ['queso', 'champiñones'], 970);
let fugazza = new Pizza('fugazza', ['queso, cebolla'], 750);
let pizzas = [muzzarella, napolitana, hawaiana, pepperoni, champiñones, fugazza];

let pizza_name = document.querySelector('.pizza-name');
let pizza_price = document.querySelector('.pizza-price');
let buscarBtn = document.getElementById('buscarBtn')

buscarBtn.addEventListener('click', () => {
  let idInput = document.getElementById('idInput').value;
  let pizza_encontrada = false;

  pizzas.forEach(pizza => {
    if (pizzas.indexOf(pizza) == idInput) {
      pizza_encontrada = true;
      pizza_name.innerHTML = pizza.nombre.toLocaleUpperCase();
      pizza_price.innerHTML = `$${pizza.precio}`;
    }
  });

  if (!pizza_encontrada) {
    pizza_name.innerHTML = 'ERROR ❌';
    pizza_price.innerHTML = 'Pizza no encontrada.'
  }

  if (idInput == "") {
    pizza_name.innerHTML = 'ERROR ❌';
    pizza_price.innerHTML = 'Campo vacío.'
  }
})



