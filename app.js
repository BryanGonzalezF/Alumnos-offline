document.addEventListener("DOMContentLoaded",e=>{
    const form = document.querySelector("#frmConversores");
    event.preventDefault("submit",event=>{

        let de = document.querySelector("#CboDe").value,
         a = document.querySelector("#CboA").value,
         cantidad = document.querySelector("#txtCantidadConversor").value;
         console.log(de, a, cantidad);
         let moneda ={
             "dolar":1,
             "euro":0.93,
             "quetzal":7.63,
             "lempira":24.9,
             "cordoba":34.19
         };
         let $resp = document.querySelector("#lblRespuesta");
         $resp.innerHTML = `Respuesta: ${ (moneda[a]/moneda[de]*cantidad).toFixed(2)}`;
    });
});

