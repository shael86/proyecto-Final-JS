
// let productos = [];

// const producto = async () =>{
//     try{
//     const Response = await fetch ("https://github.com/shael86/repositorio.js.git");
//     const product =  await response.json();
//     productos = product;
//     return producto
// } catch (error) {
//     console.log ('error');
//     }
// }

const productos = () => {
    fetch('https://github.com/shael86/repositorio.js.git')
    .then( res => res.json() )
    .then( (data) => {
    console.log(data)
    })
}
