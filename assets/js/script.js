console.log("Está funcionando");

// Verificar si la variable `carrito` ya está definida
if (typeof carrito === 'undefined') {
    var carrito = [];
}

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el stock de los productos a 15 al cargar la página
    inicializarStock();

    // Obtener todos los botones de agregar y agregarles un evento de clic
    const agregarButtons = document.querySelectorAll('.agregar');
    if (agregarButtons.length > 0) {
        agregarButtons.forEach(button => {
            button.addEventListener('click', agregarAlCarrito);
        });
    }

    // Mostrar el modal al cargar la página
    var myModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    myModal.show();

    // Cargar el carrito desde el localStorage
    cargarCarritoDesdeLocalStorage();
    actualizarCarrito();
    actualizarCarritoCount(); // Llamar a esta función para mostrar el contador al cargar la página
});

// Función para inicializar el stock de los productos
function inicializarStock() {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        producto.dataset.stock = 15;
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
    const producto = event.target.parentElement.querySelector('.producto');
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);
    let stock = parseInt(producto.dataset.stock);

    if (stock > 0) {
        let productoEnCarrito = carrito.find(item => item.nombre === nombre);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            carrito.push({ nombre, precio, cantidad: 1 });
        }

        producto.dataset.stock = stock - 1;
        actualizarCarrito();
        guardarCarritoEnLocalStorage();
        actualizarCarritoCount(); // Llamar a esta función para refrescar el contador
    } else {
        alert('¡Producto agotado!');
    }
}


// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    actualizarCarritoCount(); // Llamar a esta función para actualizar el contador
    guardarCarritoEnLocalStorage();
}

// Función para actualizar la lista de productos en el carrito
function actualizarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    if (carritoElemento) {
        carritoElemento.innerHTML = '';

        carrito.forEach((producto, index) => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio} x ${producto.cantidad}`;

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', () => eliminarDelCarrito(index));

            li.appendChild(botonEliminar);
            carritoElemento.appendChild(li);
        });
    }
}

// Función para actualizar el contador del carrito
function actualizarCarritoCount() {
    const carritoCount = document.getElementById('carrito-count');
    if (carritoCount) {
        const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        carritoCount.textContent = totalProductos;
    }
}

// Función para guardar el carrito en el localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde el localStorage
function cargarCarritoDesdeLocalStorage() {
    var carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}
