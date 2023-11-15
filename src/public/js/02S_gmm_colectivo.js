function cambiaDireccion(val1, val2){
    if(val1 == "SI" && val2 == "NO"){
        $("#mismaDir").show();
        $("#diferenteDir").hide(); 
        $("#masDirecciones").hide(); 
    }
    if(val1 == "SI" && val2 == "SI"){
        $("#mismaDir").hide();
        $("#diferenteDir").hide(); 
        $("#masDirecciones").show(); 
    }
    if(val1 == "NO" && val2 == "SI"){
        $("#mismaDir").hide();
        $("#diferenteDir").hide(); 
        $("#masDirecciones").show(); 
    }
    if(val1 == "NO" && val2 == "NO"){
        $("#mismaDir").hide();
        $("#diferenteDir").show(); 
        $("#masDirecciones").hide(); 
    }
 }


    $(document).ready( function () {

    $("input[type='text']").on("click", function () {
        $(this).select();
    });
     
      llenaOpcionesSel($('#moneda'), moneda); 
      llenaOpcionesSel($('#formaPago'), formaPago); 
      llenaOpcionesSel($('#dfisEstado'), estados); 
      llenaOpcionesSel($('#dfisGiro'), giro ); 
      llenaOpcionesSel($('#afiliacion'), afiliacion);  
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


      $("#masDomRiesgo").change( function() {
            cambiaDireccion($("#masDomRiesgo").val(), $("#masUbicacion").val());
      });

      $("#masUbicacion").change( function() {
        cambiaDireccion($("#masDomRiesgo").val(), $("#masUbicacion").val());
      });

      $("#desde").change( function() {
        let desde = $("#desde").val();
        dia = desde.substr(0,2); 
        mes = desde.substr(3,2);
        anio = desde.substr(6,4);

        let fecha = new Date(anio,mes,dia);
            //console.log(fecha);
            fecha.setFullYear(fecha.getFullYear()+1);
            
        $("#hasta").val(pad(fecha.getDate(),2) + "/" +  pad(fecha.getMonth(),2) + "/" + fecha.getFullYear());    
      });


      $('#tCompanias').DataTable({
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

        url='https://cuestionarios.grupoprotg.com.mx:2053/companias';
        $.ajax({
            url: url,
            method: "GET",
            dataType: 'json',
            success: function(respuesta) {
                aseguradoras = respuesta;
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });
           
         
        cambiaDireccion($("#masDomRiesgo").val(),$("#masUbicacion").val());  
        //llenaCompanias($('#registrosCompanias').val()); 
       

    });        