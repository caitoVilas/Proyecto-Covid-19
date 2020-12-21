import pintarCompare from "./graficosCompare.js";

const d = document;

export default function managerCompare(btnVer, btnClose){

    d.addEventListener('click', e => {
        if(e.target.matches(btnVer)){
               
            // Capturo Elementos del DOM
            const $form = d.getElementById('comparacion'),
                 $pais1 = d.getElementById('pais1').value,
                 $pais2 = d.getElementById('pais2').value,
                $btnVer = d.getElementById('ver2'),
              $btnClose = d.getElementById('close2');

             // Hacemos el togle con los botones
              $btnVer.setAttribute('hidden','');
              $btnClose.removeAttribute('hidden');

            pintarCompare($pais1, $pais2);
        }
    });

    d.addEventListener('click', e => {

        if(e.target.matches(btnClose)) {
            // Capturo Elementos del DOM
            const $form = d.getElementById('comparacion'),
                $btnVer = d.getElementById('ver2'),
              $btnClose = d.getElementById('close2'),
                   $div = d.getElementById('graficoCompare');

                $btnVer.removeAttribute('hidden');
                $btnClose.setAttribute('hidden','');
                $div.setAttribute('hidden', '');
                $form.reset();
        }
    });
}