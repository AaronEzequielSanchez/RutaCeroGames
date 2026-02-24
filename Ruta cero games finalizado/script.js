// ===============================
// MENÚ HAMBURGUESA
// ===============================

// Capturamos los elementos del menú hamburguesa
const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

// Verificamos que existan antes de usar
if (hamburguesa && menu) {
  hamburguesa.addEventListener("click", () => {
    menu.classList.toggle("activo");
  });
}

// ============================
// CARRITO DE COMPRAS
// ============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  guardarCarrito();
  alert("Producto agregado al carrito");
}

// Eliminar producto
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  mostrarCarrito();
}

// Mostrar carrito
function mostrarCarrito() {
  const contenedor = document.querySelector(".carrito-items");
  const totalTexto = document.querySelector(".carrito-resumen strong");

  if (!contenedor || !totalTexto) return;

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;

    contenedor.innerHTML += `
      <div class="carrito-item">
        <span class="nombre">${item.nombre}</span>
        <span class="precio">$${item.precio}</span>
        <button class="eliminar" onclick="eliminarDelCarrito(${index})">✖</button>
      </div>
    `;
  });

  totalTexto.textContent = `$${total}`;
}

// Finalizar compra
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  alert("Compra realizada con éxito 🎉");
  carrito = [];
  guardarCarrito();
  mostrarCarrito();
}

// Cargar carrito al entrar
document.addEventListener("DOMContentLoaded", mostrarCarrito);
