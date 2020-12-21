export default function rangoFechas(){

    const d = document;

        // ======== Capturo Elementos del DOM  ==========

    const $fechaDesde = d.getElementById('fechaDesde'),
          $fechaHasta = d.getElementById('fechaHasta');

        // ======== Calculo Fecha Desde  =================

          let año = new Date(2020,1,22).getFullYear(); // obtengo año
          let mes = new Date(2020,1,22).getMonth();    // obtengo mes
          let dia = new Date(2020,1,22).getDate();     // obtengo dia
          mes = ('0' + mes).slice(-2);                 // agrego cero adelante a mes si corresponde
          dia = ('0' + dia).slice(-2);                 // agrego cero adelante a dia si corresponde
          const fechaDesde = `${año}-${mes}-${dia}`;   // formateo fecha para el DOM
          const fechaDesde1= $fechaDesde;
           // ======== Calculo Fecha Hasta  =================

          let fechaLimite = Date.now();                // obtengo hoy en milisegundos
          fechaLimite = fechaLimite - (1000*60*60*24)  // resto 24hs (ayer)
          let fecha = new Date(fechaLimite);           // convierto a feha para extraer año mes y dia
          año = new Date(fecha).getFullYear();
          mes = new Date(fecha).getMonth();
          dia = new Date(fecha).getDate();
          mes += 1;
          mes = ('0' + mes).slice(-2);
          dia = ('0' + dia).slice(-2);
          const fechaHasta = `${año}-${mes}-${dia}`;

         // ======== Agrego al DOM  =================

          $fechaDesde.min = fechaDesde;
          $fechaDesde.max = fechaHasta;
          $fechaHasta.min = fechaDesde;
          $fechaHasta.max = fechaHasta;
       
          
}