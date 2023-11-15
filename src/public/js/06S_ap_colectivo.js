
    $(document).ready( function () {
      llenaOpcionesSel($('#mediopago'), mediopago); 
      llenaOpcionesSel($('#moneda'), moneda); 
      llenaOpcionesSel($('#formaPago'), formaPago); 
      llenaOpcionesSel($('#dfisEstado'), estados); 
      llenaOpcionesSel($('#dfisGiro'), giro ); 
      llenaOpcionesSel($('#afiliacion'), afiliacion);  
      llenaOpcionesSel($('#tipoAdmin'), tipoAdmin); 
      llenaOpcionesSel($('#tipoSeguro'), tipoSeguro); 
     
      

      $("input[name=tpoliza]").click(function () { 
        seleccionado = $('input:radio[name=tpoliza]:checked').val(); 
        if(seleccionado>0){
            $('#muestrapoliza').show("swing");
            $('#poliza').focus();
        }else{
            $('#muestrapoliza').hide("swing");
        }
      });

      
      $('#siniestralidad').DataTable({
              "language": {
                  "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
              },
              "paging": false,
              "searching": false,
              "info":false
          }); 
       

       $.datepicker.regional['es'] = {
              closeText: 'Cerrar',
              prevText: ' nextText: Sig>',
             // currentText: dia,
              monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
              'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
              monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
              'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
              dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
              dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
              dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
              weekHeader: 'Sm',
              dateFormat: 'dd/mm/yy',
              firstDay: 1,
              isRTL: false,
              showMonthAfterYear: false,
              yearSuffix: ''
              }; 
       $.datepicker.setDefaults( $.datepicker.regional['es']);
       $( "#desde" ).datepicker({ 
           regional:'es'
           });
       $( "#hasta" ).datepicker({ 
           regional:'es'
           });   
           
       seleccionaElementos();    

    });        