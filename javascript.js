const precio = 400000; //Valor base


const precioSpan = document.querySelector(".precio-inicial"); //Contenedor Precio Inicial. 

const cantidadProd = document.querySelector(".cantidad"); // Contenedor Cantidad de productos

const valorTotal = document.querySelector(".valor-total"); // Contenedor valor Precio Inicial x Cantidad de productos


precioSpan.innerHTML = precio  //Modificar texto Precio con Valor Precio. Texto es = a precio.


valorTotal.innerHTML = 0; //Modificar texto Contenedor Precio. Solo aplica a Valor inicial.


//Valores necesitan ser number. Usar Number()



const agregar = () => {
  total = Number(cantidadProd.innerHTML);
  total = total + 1;
  cantidadProd.innerHTML = total;
  valorTotal.innerHTML = precio * total;
  };
 


const disminuir = () => {
  total = Number(cantidadProd.innerHTML);
  total = total-1
  cantidadProd.innerHTML = total;
  valorTotal.innerHTML = precio * total;
};

