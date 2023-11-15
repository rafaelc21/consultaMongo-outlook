        let l_aseguradorasImpresion = [];
        let l_impresion=[];

        let objeto_window;
        let configuracion_ventana = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
       
        
        function abrirVentana(url,nombre) {
            let l_nombre = 'Cuestionario' + nombre;
            objeto_window_referencia = window.open(url, l_nombre, configuracion_ventana);
        } 

        function aceptar(){
            if(l_impresion.length<1){
                $("#alerta").show();
                return false;
            }else{
                $("#cierraModal").click();
                for(let i = 0; i< l_impresion.length; i++){
                    url = "/impresion/formato/"+ $("#id").val() + l_impresion[i];
                    abrirVentana(url, l_impresion[i]);
                }
                
            }
        }

        function replaceStr(str) {
            let buscar = "&quot;";
            return str
                .replace("&amp;", "")
                .replace("&lt;", "&lt;")
                .replace("&gt;", "&gt;")
                .replace(new RegExp(buscar,"g"), '"');
        }

        function actualizaElemento(control, idCia){
            $("#alerta").hide();
            let l_ctrl = "#" + control;
            if( $(l_ctrl).is(':checked') ) {
                l_impresion.push(idCia);
            }else{
                let i = buscaImp(idCia);
                //console.log(i);
                l_impresion.splice( i, 1 );
            }
            //console.log(l_impresion);
        }
        
        function buscaImp(id){
            let elemento = 0
            for(let b=0; b<l_impresion.length;b++ ){
              if (l_impresion[b] == id){
                  elemento = b;
              }
            }
            return elemento
        } 

        function imprimeCuestionario(){
            l_impresion=[];
            $('#titulo').html('Impresión de Solicitud');
            contenido = '<div class="card"> ' +
                        '<div class="card-head"> ' +
                        '    <h5 class="card-title">Seleccione las compañias para impresión</h5>' +
                        '    <div class="alert alert-danger" role="alert" id="alerta">' +
                        '      Se debe seleccionar una compañia' +
                        '    </div>' +
                        '<div class="card-body"> ' +
                        ' ';
            //console.log($('#contenidoCompanias').val());
            let obj = JSON.parse($('#contenidoCompanias').val());
            for(let b=0; b<obj.length;b++ ){
                contenido = contenido + 
                          '<div class="row">';
                $.each(obj[b],function(key, registro) {
                    //console.log(key,registro);
                    if(key == "id"){
                        contenido = contenido + 
                          '<div class="col-sm-1">'+
                          '<input type="checkbox" id="cia_'+ registro + '" name="cia_'+ registro + '" onclick="actualizaElemento(this.name, '+ registro + ');"></div>';
                    }
                    if(key == "aseguradora"){
                    contenido = contenido + 
                            '<div class="col-sm-6">'+ registro+'</div>';
                    }
                    if(key == "clavepuente"){
                        contenido = contenido + 
                                '<div class="col-sm-5">'+ registro+'</div>';
                    }
                });
                contenido = contenido + 
                                '</div>';
            }
            contenido = contenido + ' ' +
                            '</div> ' +
                            '</div> ' +
                        ' <script> $("#alerta").hide(); </script>';
            $('#contenido').html(contenido);
            $('#staticBackdrop').show();
            $('#botonesModal').show();
            
        }
        
       
        function valuaCheck(control, c_texto){
            if(control.is(':checked')){
                $("#" + c_texto).val(1);
            }else{
                 $("#" + c_texto).val(0);
            }
        }
