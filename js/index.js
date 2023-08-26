document.addEventListener('DOMContentLoaded', pintarProductos(productos));
document.addEventListener('DOMContentLoaded', cargarCarrito(carrito));

// const btn = document.getElementsByClassName('.boton-eliminar')

// btn.addEventListener('click', () =>{

//     Swal.fire({
//         title:"Esta seguro?",
//         text: "Va a eliminar el producto!",
//         icon: "warning",
//         showCancelButton: true,
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Eliminar',
//         cancelButtonText: 'Cancelar'
//     }).then((result) =>{
//         if (result.isConfirmed){
//             Swal.fire(
//                 'Eliminado',
//                 'El producto a sido eliminado',
//                 'succes'
//             )
//         }
//     })
// })