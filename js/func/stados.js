class Estados{
    #estados={};
   useEstado(valor){
    let valor_new=valor
    const get_valor=()=>valor_new;
    const set_valor=(valor2)=>{
       return valor_new=valor2;
    }
    return [get_valor,set_valor];
   }


}
class Contador{
    #contador=0;
    render(){
        return `
        <h1>Contador: ${this.#contador}</h1>
        `
    }
    setContador(valor){
        this.#contador=valor;
    }
    getContador(){
        return this.#contador;
    }
}
export default {Estados,Contador};