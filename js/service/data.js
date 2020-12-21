let listaPaises = [];
export default async function getAll(){
    
    try{
        let res = await axios.get('https://pomber.github.io/covid19/timeseries.json'),
        json = await res.data;
        json.keys(json).forEach(pais => listaPaises.push([pais])) 
        console.log(listaPaises);
        return json;
    }catch(error){
        let messaje = error.statusText || 'El servidor no responde';
        console.log(`ERROR ${error.status}: ${messaje}`);
    }
    
}
