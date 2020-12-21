const d = document;

export default async function pintarCompare(pais1, pais2) {

    let fechasPais1 = [],
        fechasPais2 = [],
        confirmadosP1 = [],
        confirmadosP2 = [],
        recuperadosP1 = [],
        recuperadosP2 = [],
        defuncionesP1 = [],
        defuncionesP2 = [];

    // ==================== API REST  ======================
    await fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
       data[pais1].forEach(({ date, confirmed, recovered, deaths }) => {
             fechasPais1.push(({date}));
             confirmadosP1.push(({confirmed}));
             recuperadosP1.push(({recovered}));
             defuncionesP1.push(({deaths}))
           
           });
        data[pais2].forEach(({ date, confirmed, recovered, deaths }) => {
            fechasPais2.push(({date}));
            confirmadosP2.push(({confirmed}));
            recuperadosP2.push(({recovered}));
            defuncionesP2.push(({deaths}))
          
          });
    });

    console.log(pais1);
    console.log('fehas');
    console.log(fechasPais1.pop().date);
    console.log('Confirmados');
    console.log(confirmadosP1.pop().confirmed);
    console.log('Recuperados');
    console.log(recuperadosP1.pop().recovered);
    console.log('Defunciones');
    console.log(defuncionesP1.pop().deaths);
    console.log(pais2);
    console.log('fehas');
    console.log(fechasPais2.pop());
    console.log('Confirmados');
    console.log(confirmadosP2.pop());
    console.log('Recuperados');
    console.log(recuperadosP2.pop());
    console.log('Defunciones');
    console.log(defuncionesP2.pop());

    const $div = d.getElementById('graficoCompare');

    $div.removeAttribute('hidden');

    pintarChart(confirmadosP1, recuperadosP1, defuncionesP1, confirmadosP2, recuperadosP2, defuncionesP2);
}

function pintarChart(confirmadosP1, recuperadosP1, defuncionesP1, confirmadosP2, recuperadosP2, defuncionesP2){
    const $ctx = d.getElementById('graf_compare');
    
    const chart = new Chart($ctx, {
        type: 'doughnut',
        data: {
            datasets: [
               {
                   data: [
                       confirmadosP1.pop().confirmed,
                       recuperadosP1.pop().recovered,
                       defuncionesP1.pop().deaths,
                   ],
                   backgroundColor: [
                       'red',
                       'green',
                       'black',
                   ]
               },
               {
                   data: [
                       confirmadosP2.pop().confirmed,
                       recuperadosP2.pop().recovered,
                       defuncionesP2.pop().deaths,
                   ],
                   backgroundColor: [
                       'red',
                       'green',
                       'black',
                   ]

               }
            ],
            labels: [
                'Confirmados',
                'Recuperados',
                'Defunciones',
            ]
        },
        options: {
            legends: {
                position: 'bottom',
                labels: {
                    fontFamily: 'system-ui',
                    fontColor: 'white',
                },
            }
        }
    })
}