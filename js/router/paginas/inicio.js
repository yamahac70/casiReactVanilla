import { getProductos } from "../../func/llamados";
import es from "../../func/stados";
const {Contador,Estados}=es;
const cont=new Contador();

import "../../../css/inicio.css"



export const Inicio=async(parametros)=>{
   
  
 const productos=await getProductos();
    const renderProductos=()=>{
        let html="";
        productos.forEach(producto=>{
            html +=/*HTML*/`
            <pre id="bra">
            ${JSON.stringify(producto,null,2)}
            </pre>
            `

        });
        return html;
    }
   
    return /*HTML*/`
    <h1>Inicio</h1>
    ${renderProductos()}
    <button id="v">contador :${cont.getContador()}</button>
    `
}
export const pos= ()=>{
    setTimeout(()=>{
       // window.addEventListener('load',(e)=>{
            const elemento=document.getElementById('v');
            console.log(elemento)
            console.log(document)
            elemento.addEventListener('click',()=>{
               cont.setContador(cont.getContador()+1);
                console.log(cont.getContador())
                elemento.innerHTML=`contador :${cont.getContador()}`;
            }) 
       // })

    },100);
    
  /*   elemento.addEventListener('click',()=>{
        console.log('click')
    }) */
    console.log("sd")
}