// Carrito de compras
var carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    // Cargar el carrito desde el localStorage al cargar la página
    cargarCarritoDesdeLocalStorage();
    // Actualizar el contenido del carrito al cargar la página
    actualizarCarrito();
    // Actualizar el contador del carrito al cargar la página
    actualizarCarritoCount();
});

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
    const productoElemento = event.target.parentElement.querySelector('.producto');
    if (!productoElemento) {
        console.error('No se pudo encontrar el elemento del producto');
        return;
    }
    
    const nombre = productoElemento.dataset.nombre;
    const precio = parseFloat(productoElemento.dataset.precio);
    const stock = parseInt(productoElemento.dataset.stock);

    const productoEnCarrito = carrito.find(item => item.nombre === nombre);
    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad < stock) {
            productoEnCarrito.cantidad++;
        } else {
            alert('No hay suficiente stock disponible');
        }
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    actualizarCarrito();
    guardarCarritoEnLocalStorage();
    actualizarCarritoCount(); // Actualizar el contador después de agregar un producto
}

// Función para actualizar la lista de productos en el carrito en la página del carrito
function actualizarCarrito() {
    var carritoElemento = document.getElementById('carrito');
    if (!carritoElemento) {
        console.error('No se pudo encontrar el elemento del carrito');
        return;
    }
    
    carritoElemento.innerHTML = '';
    carrito.forEach(producto => {
        var li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio} - Cantidad: ${producto.cantidad}`;
        
        var botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarProductoDelCarrito(producto.nombre));
        li.appendChild(botonEliminar);

        carritoElemento.appendChild(li);
    });
}

// Función para eliminar un producto del carrito
function eliminarProductoDelCarrito(nombreProducto) {
    const index = carrito.findIndex(item => item.nombre === nombreProducto);
    if (index !== -1) {
        carrito.splice(index, 1);
        actualizarCarrito();
        guardarCarritoEnLocalStorage();
        actualizarCarritoCount(); // Actualizar el contador después de eliminar un producto
    } else {
        console.error('Producto no encontrado en el carrito');
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

// Función para actualizar el contador del carrito
function actualizarCarritoCount() {
    const carritoCount = document.getElementById('carrito-count');
    if (carritoCount) {
        const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        carritoCount.textContent = totalProductos;
    }
}
