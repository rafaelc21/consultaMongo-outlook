
        function reemplazaComas(cadena){
            var re = /,/g;
            var resultado = cadena.replace(re, '');
            return resultado;
        }

        function addCommas(nStr)
            {
                nStr += '';
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
            }

        function sumaEmpresarialSec2(){
            let valor1 = ($('#s2valorinventarios').val()==""?"0":reemplazaComas($('#s2valorinventarios').val()));
            let valor2 = ($('#s2maquinariavalor').val()==""?"0":reemplazaComas($('#s2maquinariavalor').val()));
            let valor3 = ($('#s2mobiliariovalor').val()==""?"0":reemplazaComas($('#s2mobiliariovalor').val()));
            let valor4 = ($('#s2otroespecificar').val()==""?"0":reemplazaComas($('#s2otroespecificar').val()));
           
            s2suma= parseFloat(valor1) + 
                    parseFloat(valor2) + 
                    parseFloat(valor3) + 
                    parseFloat(valor4); 

            $('#s2Suma').val(addCommas(s2suma));
        }

        function sumaEmpresarialSec7(){
            let valor1 = ($('#s7Limite').val()==""?"0":reemplazaComas($('#s7Limite').val()));
            let valor2 = ($('#s7Mercancias').val()==""?"0":reemplazaComas($('#s7Mercancias').val()));
            let valor3 = ($('#s7Bienes').val()==""?"0":reemplazaComas($('#s7Bienes').val()));

            s7suma= parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3); 
            $('#s7SumAseg').val(addCommas(s7suma));
        }



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

     function seleccionAut(control){
        l_pre=  control.substr(0,2);
        nex=control.substr(2,control.length);
        if(l_pre=="s1"){
            $("#s2"+nex).prop("checked",$("#"+control).prop("checked"))
        }else{
            $("#s1"+nex).prop("checked",$("#"+control).prop("checked"))
        }
     } 

     function seleccionAutREAI(control){
        l_pre=  control.substr(0,2);
        nex=control.substr(2,control.length);
        if(l_pre=="s1"){
            $("#s2"+nex).prop("checked",$("#"+control).prop("checked"))
            if($("#s2" + nex).prop('checked')){
                $("#s2" + nex+"Por").show();
                $("#s2" + nex+"Porlbl").show();
                $("#s2" + nex+"lblpor").show();
            }else{
                $("#s2" + nex+"Por").hide();
                $("#s2" + nex+"Porlbl").hide();
                $("#s2" + nex+"lblpor").hide();
            }
        }else{
            $("#s1"+nex).prop("checked",$("#"+control).prop("checked"))
            if($("#s1" + nex).prop('checked')){
                $("#s1" + nex+"Por").show();
                $("#s1" + nex+"Porlbl").show();
                $("#s1" + nex+"lblpor").show();
            }else{
                $("#s1" + nex+"Por").hide();
                $("#s1" + nex+"Porlbl").hide();
                $("#s1" + nex+"lblpor").hide();
            }
        }
     } 
     //renglonS4C = jsonTabla('contenidoTCruzada','tableS4CBody', elementosS4C, 'RTC');

     function rellenaCero(dato){
         let l_regreso=0;
         if(dato.length>0){
             l_regreso= parseInt(dato);
         }
         return l_regreso;
     }

     
      

    $(document).ready( function () {
      

        //Tab principal
        

        $('.elementos li:first button').addClass('active');        
        $('#rcgeneral').addClass('show','active');
        $('#rcgeneral').show();

        $('.elementos li button').click(function(){
            $('.elementos li [type=button]').removeClass('active');  
            $('#rcgeneral').removeClass('show', 'active');
            $('#rcgeneral').hide();
            $('#contratistas').removeClass('show', 'active');
            $('#contratistas').hide();
            $('#profesional').removeClass('show', 'active');
            $('#profesional').hide();
            $('#hoteleria').removeClass('show', 'active');
            $('#hoteleria').hide();
            $('#talleres').removeClass('show', 'active');
            $('#talleres').hide();

            let identificador = $(this).attr('data-bs-target');
            $(this).addClass('active');   
            
            $(identificador).addClass('show', 'active');
            $(identificador).show();
            
            
            return false;
        });

       //Tab detalle coberturas
       

       $('.cobAdi button').click(function(){
            $('.cobAdi [type=button]').removeClass('active','btn-primary');  
            $('#Cruzada').removeClass('show', 'active');
            $('#Cruzada').hide();
            $('#ProductoNacional').removeClass('show', 'active');
            $('#ProductoNacional').hide();
            $('#ProductosExportacion').removeClass('show', 'active');
            $('#ProductosExportacion').hide();
            $('#UnionMezcla').removeClass('show', 'active');
            $('#UnionMezcla').hide();
            $('#Estacionamiento').removeClass('show', 'active');
            $('#Estacionamiento').hide();
            
            let identificador = $(this).attr('data-bs-target');  
            $(this).addClass('active','btn-primary');   
            
            $(identificador).addClass('show', 'active');
            $(identificador).show();
            
            //console.log(identificador); 
            return false;
       });

       $('.cobAdi button:first').addClass('active','btn-primary');     
       $('#Cruzada').addClass('show','active');
       $('#cruzada').show();

        


       $("#s2remocionescombrosPor").keyup(function () {
            //console.log($(this).val());
            $("#s1remocionescombrosPor").val($(this).val());
       });

       $("#s1remocionescombrosPor").keyup(function () {
        //console.log($(this).val());
        $("#s2remocionescombrosPor").val($(this).val());
       });

       $("#s2ajusteInflacionarioPor").keyup(function () {
        //console.log($(this).val());
        $("#s1ajusteInflacionarioPor").val($(this).val());
       });

       $("#s1ajusteInflacionarioPor").keyup(function () {
        //console.log($(this).val());
        $("#s2ajusteInflacionarioPor").val($(this).val());
       });

       

       //$('#s2Suma').mask("999,999,999.00");
        
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
      llenaOpcionesSel($('#driesgoNivel'), distancia);
      llenaOpcionesSel($('#muros'), muros);
      llenaOpcionesSel($('#techos'), muros);
      llenaOpcionesSel($('#entrepisos'), entrepisos);
      llenaOpcionesSel($('#medEspecificar'), medidas);
      llenaOpcionesSel($('#trabesSoportesVigas'), trabesSoportesVigas);
      llenaOpcionesSel($('#dfisEstablecimiento'), dfisEstablecimiento);
      
      
      for(let i=1; i<11; i++){
        control = "#s"+i;  
        $(control).hide();
      }
      $("#r1").hide();
      

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

      function ocultaRobo(){
        if( !$("#c01_s7").is(':checked')){
            $("#proteccionesRobo").hide();
        }else{
            $("#proteccionesRobo").show();
        }  
      }

      function ocultaIncendio(){
        if( !$("#c01_s1").is(':checked') && !$("#c01_s2").is(':checked') && !$("#c01_s3").is(':checked') ){
            $("#proteccionesIncendio").hide();
        }else{
            $("#proteccionesIncendio").show();
        }  
      }

      $("#S4Medicos").click( function() {
        if( $("#S4Medicos").is(':checked') ) {
            $("#S4MedicosTabla").show();
        }else{
            $("#S4MedicosTabla").hide();
        }
      });

      $("#S4Abogados").click( function() {
        if( $("#S4Abogados").is(':checked') ) {
            $("#S4AbogadosTabla").show();
        }else{
            $("#S4AbogadosTabla").hide();
        }
      });

      $("#S4Arquitectos").click( function() {
        if( $("#S4Arquitectos").is(':checked') ) {
            $("#S4ArquitectosTabla").show();
        }else{
            $("#S4ArquitectosTabla").hide();
        }
      });

      $("#S4Contadores").click( function() {
        if( $("#S4Contadores").is(':checked') ) {
            $("#S4ContadoresTabla").show();
        }else{
            $("#S4ContadoresTabla").hide();
        }
      });

      $("#S4Agentes").click( function() {
        if( $("#S4Agentes").is(':checked') ) {
            $("#S4AgentesTabla").show();
        }else{
            $("#S4AgentesTabla").hide();
        }
      });
       
      

      $("#c01_s1").click( function() {
        if( $("#c01_s1").is(':checked') ) {
            $("#s1").show();
            //$("#i1").show();
        }else{
            $("#s1").hide();
        }
        ocultaIncendio();
      });
      $("#c01_s2").click( function() {
        if( $("#c01_s2").is(':checked') ) {
            $("#s2").show();
        }else{
            $("#s2").hide();
        }
        ocultaIncendio();
      });
      $("#c01_s3").click( function() {
        if( $("#c01_s3").is(':checked') ) {
            $("#s3").show();
        }else{
            $("#s3").hide();
        }
        ocultaIncendio();
      });
      $("#c01_s4").click( function() {
        if( $("#c01_s4").is(':checked') ) {
            $("#s4").show();
        }else{
            $("#s4").hide();
        }
      });
      $("#c01_s5").click( function() {
        if( $("#c01_s5").is(':checked') ) {
            $("#s5").show();
        }else{
            $("#s5").hide();
        }
      });
      $("#c01_s6").click( function() {
        if( $("#c01_s6").is(':checked') ) {
            $("#s6").show();
        }else{
            $("#s6").hide();
        }
      });
      $("#c01_s7").click( function() {
        if( $("#c01_s7").is(':checked') ) {
            $("#s7").show();
            $("#r1").show();
        }else{
            $("#s7").hide();
            $("#r1").hide();
        }
        ocultaRobo();
      });
      $("#c01_s8").click( function() {
        if( $("#c01_s8").is(':checked') ) {
            $("#s8").show();
        }else{
            $("#s8").hide();
        }
      });
 
      $("#c01_s9").click( function() {
        if( $("#c01_s9").is(':checked') ) {
            $("#s9").show();
        }else{
            $("#s9").hide();
        }
      });
      $("#c01_s91").click( function() {
        if( $("#c01_s91").is(':checked') ) {
            $("#s91").show();
        }else{
            $("#s91").hide();
        }
      });
      $("#c01_s10").click( function() {
        if( $("#c01_s10").is(':checked') ) {
            $("#s10").show();
        }else{
            $("#s10").hide();
        }
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
       
       $("#desde").datepicker({ 
           regional:'es'
           });

       $("#hasta").datepicker({ 
           regional:'es'
           });  

       $("#s4ContratistaFI").datepicker({ 
            regional:'es'
            });

       $("#s4ContratistaFF").datepicker({ 
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