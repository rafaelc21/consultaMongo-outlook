
    $(document).ready( function () {
      
      
        $("input[type='text']").on("click", function () {
            $(this).select();
        });  

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

      $("#desde").change( function() {
        let desde = $("#desde").val();
        dia = desde.substr(0,2); 
        mes = desde.substr(3,2);
        anio = desde.substr(6,4);

        let fecha = new Date(anio,mes,dia);
            console.log(fecha);
            fecha.setFullYear(fecha.getFullYear()+1);
            
        $("#hasta").val(pad(fecha.getDate(),2) + "/" +  pad(fecha.getMonth(),2) + "/" + fecha.getFullYear());    
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