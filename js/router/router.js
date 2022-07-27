import vista from "./vistas";

class Router{
    #ruta="/";
    async renderRuta(id_contenedor){
        const contenido=document.getElementById(id_contenedor)
        contenido.innerHTML=await vista[this.#ruta]()||"<h1>404</h1> <br> <h2>Pagina "+ this.#ruta+" no encontrada</h2>";
        vista[this.#ruta+"F"]
        //console.log(await vista[this.#ruta])
    }
    setRuta(rutaNueva,id_contenedor){
        this.#ruta=rutaNueva==="/"?"inicio":rutaNueva;
        this.renderRuta(id_contenedor);

    }
    getRuta(){}
}
export default Router;