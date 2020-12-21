import pintarDatosEstadistica from "./graficosEstadistica.js";

const d = document;

export default function managerEstadiscas(){

    
    addEventListener('submit', e => {  // En el evento submit
        
        e.preventDefault();
        e.stopPropagation();          // Prevengo default (no quiero que se recargue el formulario)
        
        if(e.target.matches){
            
        // Captura de los elementos del DOM que voy a utilizar
            const $form = d.getElementById('estadistica'),
                $desde = d.getElementById('fechaDesde').value,
                $hasta = d.getElementById('fechaHasta').value,
                 $pais = d.getElementById('paises').value,
               $btnVer = d.getElementById('ver1'),
             $btnclose = d.getElementById('close1');

            // Hacemos el togle con los botones
               $btnVer.setAttribute('hidden','');
               $btnclose.removeAttribute('hidden');

            //   console.log($desde);
            //   console.log($hasta);
            //   console.log($pais);

              pintarDatosEstadistica($desde, $hasta, $pais);
        }
    });
    
d.addEventListener('reset', e => {      // En El evento reset
        
        const $btnVer = d.getElementById('ver1'),
                $form = d.getElementById('estadistica'),
                 $div = d.getElementById('graficoEstadistica'),
            $btnclose = d.getElementById('close1');

        if(e.target.matches){
    
             // Hacemos el togle con los botones
             $btnVer.removeAttribute('hidden');
             $btnclose.setAttribute('hidden','');
             $div.setAttribute('hidden', '');
             $form.reset();
        }
    });
}