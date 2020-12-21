const d = document;
const countries = [];

export default async function putCountries() {

    // ==================== API REST  ======================

    await fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
        Object.keys(data).forEach(pais => countries.push(pais));
    });

    // ======== Captura Elementos del DOM  =================

      const $select  = d.getElementById('paises');
      const $select1 = d.getElementById('pais1');
      const $select2 = d.getElementById('pais2');
      
    // ==== Carga dimanica de Datos y pintamos en el DOM  =======

      countries.forEach(pais => {
          const $option = d.createElement('option');
          $option.textContent = pais;
          $option.value = pais;
          $select.insertAdjacentElement('beforeend',$option);
        
      });

      countries.forEach(pais => {
        const $option = d.createElement('option');
        $option.textContent = pais;
        $option.value = pais;
        $select1.insertAdjacentElement('beforeend',$option);
      
    });

    countries.forEach(pais => {
        const $option = d.createElement('option');
        $option.textContent = pais;
        $option.value = pais;
        $select2.insertAdjacentElement('beforeend',$option);
      
    });
    
}