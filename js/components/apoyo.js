export default async function getCountries(){
    let countries = [];

    await fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // console.log(Object.keys(data));
        Object.keys(data).forEach(pais => countries.push(pais));
        console.log(countries[0]);
        return countries;
    });
    
    
console.log(countries[0])
}




export default async function getAll(){
    const listaPaises = [];
    try{
        let res = await axios.get('https://pomber.github.io/covid19/timeseries.json'),
        json = await res.data;
        json.then(Object.keys(data).forEach(pais => listaPaises.push(pais)));
         console.log(json);
        // console.log(typeof(json));
        return json;
    }catch(error){
        let messaje = error.statusText || 'El servidor no responde';
        console.log(`ERROR ${error.status}: ${messaje}`);
    }
}




        // ==================== API REST  ======================

        await fetch("https://pomber.github.io/covid19/timeseries.json")
        .then(response => response.json())
        .then(data => {
           data[$pais].forEach(({date, confirmed, recovered, deaths})=>
           console.log(`${date}, confirmados : ${confirmed}, recuperados : ${recovered}, muertes : ${deaths}`));
        });
    
       