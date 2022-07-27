const url="http://localhost:4000";

export async function getProductos(){
    const res=await fetch(url+"/productos");
    const productos=await res.json();
    return productos;
}
export async function getCategorias(){
    const res=await fetch(url+"/categorias");
    const categorias=await res.json();
    return categorias;
}