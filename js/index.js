
document.addEventListener('DOMContentLoaded', cargarCarrito(carrito));

document.addEventListener("DOMContentLoaded", () => {
console.log('test');
	fetch("/data/stock.json")
		.then((response) => response.json())
		.then((productos) => {
			pintarProductos(productos);
		});
});