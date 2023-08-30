alert("BIENVENID@ A LA PAGINA DE TOUR Y FECHAS DE GIRAS")

let nombreUsuario = prompt("bienvenid@, cual es su nombre?").toUpperCase()

let span = document.querySelector("span")

while(nombreUsuario.length < 3 ){

 alert("su nombre debe tener al menos más de 2 letras")

 nombreUsuario = prompt("ingrese su nombre correctamente ")
}


span.textContent =`Hola ${nombreUsuario} 🎟️`

let edadUsuario = parseInt(prompt("BIENVENIDO/A  A LA PAGINA DE TOUR Y FECHAS DE GIRAS, POR FAVOR INGRESE SU EDAD"))



let  ticket = {
    "montreal": 3 ,
    "seattle": 1,
    "vancouver":2,
    "edmonton":3,
    "winnipeg": 2,
    "ottawa":1,
  
   }
 
  

let buttons = document.querySelectorAll("button")

console.log(buttons);
if(edadUsuario>=18){
  function getTickets( ciudad ,tickets = ticket){
 
    for (const ciu in tickets){
      if( ciu === ciudad ){ 
           
          if(tickets[ciudad] > 0){
             swal("compra exitosa","que disfrute la funcion","success")
  
             tickets[ciudad] = tickets[ciudad] - 1
          
         }else{
           swal("la compra no se pudo realizar","entradas agotadas!","error")
            buttons.forEach(boton =>{
             if(boton.getAttribute("id") === ciu){
               boton.classList.add("soldOut")
               boton.textContent = "sold out"
             }
           
            })
            
          }  
      }
  
    }

}
}else{
  swal("no tienes la edad para comprar entradas","¡entradas no disponibles!","error")
  buttons.forEach(boton =>{
    boton.classList.remove("ticket")
    boton.classList.add("soldOut")
  })
  
}









