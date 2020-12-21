import putCountries from './components/ponerPaises.js'
import rangoFechas from './components/fechasManager.js'
import managerEstadiscas from './components/estadisticas.js';
import managerCompare from './components/compare.js';


const d = document;
     
d.addEventListener('DOMContentLoaded', e => {
  
     putCountries();
     rangoFechas();
     managerEstadiscas();
     managerCompare('#ver2','#close2');
    
})

