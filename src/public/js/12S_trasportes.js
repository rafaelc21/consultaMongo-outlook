
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

        $("input[type='text'].numero").on("keypress", function (evt) {
            //jQuery(this).val(jQuery(this).val().replace(/[^0-9]/g,''));
            var code = (evt.which) ? evt.which : evt.keyCode;
               if(code==8) { // backspace.
               return true;
               } else if(code>=48 && code<=57) { // is a number.
               return true;
               } else{ // other keys.
               return false;
               }
           
      });


      $("input[type='text'].monto").on("keypress", function () {
        mascara(this,cpf);
      });
     
      llenaOpcionesSel($('#moneda'), moneda);  
      llenaOpcionesSel($('#formaPago'), formaPago);

      llenaOpcionesSel($('#dfisEstado'), estados);
      llenaOpcionesSel($('#driesgoEstado'), estados);
      llenaOpcionesSel($('#dfisGiro'), giro);
      llenaOpcionesSel($('#dfisEstablecimiento'), dfisEstablecimiento);
      

      
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



      $("input[name=tpoliza]").click(function () { 
        seleccionado = $('input:radio[name=tpoliza]:checked').val(); 
        if(seleccionado>0){
            $('#muestrapoliza').show("swing");
            $('#poliza').focus();
        }else{
            $('#muestrapoliza').hide("swing");
        }
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
           
       
       
           aseguradoras = [
            {"id" : "77", "compania" : "AFIRME"},
            {"id" : "23", "compania" : "ATLAS"},
            {"id" : "42", "compania" : "AXA"},
            {"id" : "60", "compania" : "BANORTE"},
            {"id" : "82", "compania" : "Bx+"}, 
            {"id" : "24", "compania" : "CHUBB"},
            {"id" : "11", "compania" : "GMX"},
            {"id" : "21", "compania" : "HDI"},
            {"id" : "13", "compania" : "INBURSA"},
            {"id" : "30", "compania" : "MAPFRE"},
            {"id" : "8", "compania" : "ZURICH"}, 
            {"id" : "99", "compania" : "OTRAS"}
             ];  


       seleccionaElementos();
       cambiaDireccion($("#masDomRiesgo").val(),$("#masUbicacion").val());  
        

       
       
    });        