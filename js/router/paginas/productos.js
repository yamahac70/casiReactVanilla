import Estados from "../../func/stados";
import { getCategorias } from "../../func/llamados";
import "./productos.css";
export const productos = async (parametros) => {
    const categorias=await getCategorias();
    const renderCategorias=()=>{
        let html="";
        categorias.forEach(categoria=>{
            html +=/*HTML*/`
            <option value=
            "${categoria.categoria_nombre}">${categoria.categoria_nombre}</option>
            `

      });
        return html;
    }


    document.title = "Productos";
    return/*HTML*/`
    <h1>Añadir Productos</h1>
       <div class="productos">
       <form id="form_productos">
       <label for="nombre">Nombre</label>
       <input type="text" id="nombre" name="producto_nombre" placeholder="Nombre del producto">
       <label for="precio">Precio</label>
       <input type="number" id="precio" name="producto_precio" placeholder="Precio del producto">
       <label for="cantidad">Cantidad</label>
       <input type="number" id="cantidad" name="producto_stock" placeholder="Cantidad del producto">
       <label for="talle">Talle</label>
       <input type="text" id="talle" name="producto_talle" placeholder="Talle del producto">
       <label htmlFor="Categoria">Categoria</label>
       <select id="categoria" name="producto_categoria">
           <option value="">Seleccione una categoria</option>
           ${renderCategorias()}
       </select>
       <label for="color">Color</label>
       <input type="color" id="color" name="producto_color" placeholder="Color del producto">
       <input type="submit" value="enviar" />
   </form>
       </div>
    `
}
export const posProducto=()=>{
    console.log("productosF")
    setTimeout(()=>{
        const e=id=>document.getElementById(id);
        e("form_productos").addEventListener("submit",async e=>{
            e.preventDefault();
            const fors=Object.fromEntries(new FormData(e.target));
            console.log(fors)
        })

    },100)
  
}