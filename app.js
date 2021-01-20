function activo(){
    let caja = document.getElementById("caja");
    caja.classList.add("active");

    
}
    
   
function nombre(){

 valorCaja = document.getElementById("valorCaja").value;


 localStorage.setItem("nombre", valorCaja);
  
 
 let agregarNombre = document.getElementById("agregarNombre");


caja.classList.remove("active")
 
 

}   


    var nombreGuardado = localStorage.getItem("nombre");
    console.log(nombreGuardado)
    agregarNombre.innerHTML = nombreGuardado;