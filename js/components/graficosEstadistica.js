export default async function pintarDatosEstadistica(desde, hasta, pais){

    let fechas = [];
    let confirmados = [];
    let recuperados = [];
    let defunciones = [];

    desde = desde.replaceAll('-','/');
    hasta = hasta.replaceAll('-','/');
    desde = new Date(desde);
    hasta = new Date(hasta);

    const $div = document.getElementById('graficoEstadistica');    

    // console.log(desde);
    // console.log(hasta);
     // ==================== API REST  ======================

     await fetch("https://pomber.github.io/covid19/timeseries.json")
     .then(response => response.json())
     .then(data => {
        data[pais].forEach(({ date, confirmed, recovered, deaths }) => {
            let fechaConsulta = new Date(({date}).date);
            if(fechaConsulta >= desde && fechaConsulta <= hasta){  
              fechas.push(({date}));
              confirmados.push(({confirmed}));
              recuperados.push(({recovered}));
              defunciones.push(({deaths}))
            }
            });
    });

     console.log(pais);
     console.log('Fechas');
     fechas.forEach(index => console.log(index.date));
     console.log('Confirmados');
     confirmados.forEach(index => console.log(index.confirmed));
     console.log('Recuperados');
     recuperados.forEach(index => console.log(index.recovered));
     console.log('Defunciones');
     defunciones.forEach(index => console.log(index.deaths));



     $div.removeAttribute('hidden');
     pintarChart(fechas, confirmados, recuperados, defunciones);

    
}

function pintarChart(fechas, confirmados, recuperados, defunciones){

    const $ctx = document.getElementById('graf_estadistica').getContext('2d');
    

    const chart = new Chart($ctx, {
        type: 'line',
        data: {
            labels: fechas.map(item => Intl.DateTimeFormat('es-AR',{month: 'long', day: 'numeric'}).format(new Date(item.date))),
            fontColor: 'white',
            datasets: [
                {
                    label: 'Confirmados',
                    borderColor: 'red',
                    data: confirmados.map(item => item.confirmed),
                },
                {
                    label: 'Recuperados',
                    borderColor: 'green',
                    data: recuperados.map(item => item.recovered),
                },
                {
                    label: 'Defunciones',
                    borderColor: 'black',
                    data: defunciones.map(item => item.deaths),
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Reporte COVID-19',
                fontSize: 20,
                padding: 20,
                fontColor: 'white',
            },
            legend: {
                position: 'bottom',
                labels:{
                    padding: 20,
                    boxWidth: 25,
                    fontFamily: 'system-ui',
                    fontColor: 'white',
                }
               },
            elements: {
                line: {
                    borderWidth: 2,
                    fill: false,
                },
                point: {
                    radius: 3,
                    borderWidth: 1,
                    backgroundColor: 'white',
                }
            }
           

        }
    })
}