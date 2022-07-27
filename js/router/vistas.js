import {Inicio, pos} from "./paginas/inicio";
import {productos,posProducto} from "./paginas/productos";
const vista={
    inicio:()=>{
        
        return Inicio() 
        
    },
    inicioF: pos(),
    productos:()=>{return productos()},
    productosF: posProducto(),
}
export default vista;