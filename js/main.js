import '../css/style.css';
import Router from './router/router';
const ruta=new Router();
window.onload=()=>{
    ruta.setRuta(getRutasUrl(),'app');
}
window.addEventListener('hashchange',()=>{
    ruta.setRuta(getRutasUrl(),'app');
})
const getRutasUrl= () => {
    const url = window.location.href;
    const rutas = url.split('/')[3].split('.')[0];
    console.log(rutas===""?'/':rutas);
    return rutas===""?'/':rutas;
}
//ruta.setRuta(getRutasUrl(),'app');
