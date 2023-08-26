const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click',(e) =>{
    e.stopPropagation()
    if(e.target.classList.contains('boton-eliminar')){
    eliminarProductoCarrito(e.target.value)
    Swal.fire({
        title:"Esta seguro?",
        text: "Va a eliminar el producto!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) =>{
        if (result.isConfirmed){
            Swal.fire(
                'Eliminado',
                'El producto a sido eliminado',
                'succes'
            )
        }
    })
    }
})
