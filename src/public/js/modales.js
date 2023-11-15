function infTicket(ticket){
        let url = window.location.origin;
        console.log(ticket);
        $('#titulo').html('Ticket');
            //Si el ticket existe solo se presenta la información del ticket 
            let contenido = ' <div id="contenido"> ' +
                        '                <div id="divenlace">      ' +  
                        '                   <iframe height="350" width="100%"  src="/gestionSolCli/enviaTicket/'+ ticket +'" frameborder="1"> ' +
                        '                   </iframe> <hr>' +
                        '                 </div>' +
                        '                 <div id="alertaMsg" class="alert alert-dismissible alert-warning" style="display: none;">     ' +
                        '                     <button type="button" class="close" data-dismiss="alert">×</button>     ' +
                        '                 </div> ' +
                        '      </div> ' +
                        '    ';
                $('#botonesModal').hide();
                $('#contenido').html(contenido);
                forma = $('#staticBackdrop').show();
    return false;
}


function copiarUrl(){
    let preview = document.querySelectorAll ("#enlace");
        preview[0].setAttribute("onfocus","document.execCommand('selectAll',false,null)"); 
        preview[0].focus();
        document.execCommand("copy");
}
                  
function presentaAlerta(control, tipodato, leyenda, controlAlerta ){
    l_error=0;
    mensaje="";
    console.log("cadena");
    if(tipodato === 0){
        if(control.val().length < 1){
            mensaje = "Se debe especificar el campo de " + leyenda;
            $("#mensaje").html(mensaje);
            controlAlerta.css("display", "block");   
            //controlAlerta.show();
            controlAlerta.slideDown();
            control.focus();
            l_error=1;
        } 
    }
    
    //console.log("numero");
    if(tipodato === 1){
        console.log("numero");
        if(parseInt(control.val()) <= 0){
            mensaje = "Se debe especificar el campo de " + leyenda + " con un valor mayor a 0";
            $("#mensaje").html(mensaje);
            controlAlerta.css("display", "block");   
            controlAlerta.slideDown();
            //controlAlerta.show();
            control.focus();
            l_error=1;
        } 
    }
    
    return l_error;
}


renglonS3TOD= 0;
elementosS3TOD=[];

function dibujaS3OrigenDestino(){
    $('#titulo').html('ORIGEN DESTINO, LIMITES Y ESTIMADOS ANUALES');
    let contenido = ' ' +
                    '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>ORIGEN</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S3OrigenM" id="S3OrigenM" class="form-control" aria-required="true"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>DESTINO</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S3DestinoM" id="S3DestinoM" class="form-control" aria-required="true"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>PRONOSTICO TOTAL DE EMBARQUES (Estimado de Ventas)</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <div class="input-group-prepend"> ' +
                    '                        <span class="input-group-text">$</span> ' +
                    '                         ' +
                    '                    </div>     ' +
                    '                    <input type="text" name="S3PronosticoM" id="S3PronosticoM" class="form-control numero" aria-required="true" value="0">' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>LIMITE MAXIMO DE RESPONSABILIDAD</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> '+
                    '                    <div class="input-group-prepend"> ' +
                    '                        <span class="input-group-text">$</span> ' +
                    '                         ' +
                    '                    </div>     ' +
                    '                    <input type="text" name="S3LimiteMaxM" id="S3LimiteMaxM" class="form-control numero" aria-required="true" value="0">' +
                    '                </div> ' +
                    '            </div> ' +
                    '     </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" data-dismiss="alert" class="btn btn-primary" id="registraS3TOD" onclick="registraS3TOD();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S3OrigenM").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S3DestinoM").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S3PronosticoM").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S3LimiteMaxM").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';

    $('#botonesModal').hide();
    $('#contenido').html(contenido);

    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}


function registraS3TOD(){
    l_error=1;
    l_error = presentaAlerta($("#S3OrigenM"), 0, 'ORIGEN', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S3DestinoM"), 0, 'DESTINO', $("#alerta") );
    }

    if(l_error === 0){
        l_error = presentaAlerta($("#S3PronosticoM"), 1, 'PRONOSTICO TOTAL DE EMBARQUES (Estimado de Ventas)', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S3LimiteMaxM"), 1, 'LIMITE MAXIMO DE RESPONSABILIDAD', $("#alerta") );
    }


    if(l_error === 0){

        renglonS3TOD = renglonS3TOD+1; 
        let elementos = {
                    "id": renglonS3TOD,
                    "origen": $("#S3OrigenM").val(),
                    "destino": $("#S3DestinoM").val(),
                    "pronostico": $("#S3PronosticoM").val(),
                    "limite": $("#S3LimiteMaxM").val()
                    }
        elementosS3TOD.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS3TOD,\'contenidoS3OrigenDestino\','+renglonS3TOD+', \'RTOD\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS3OrigenDestinoBody").innerHTML +='<tr id="RTOD'+ renglonS3TOD +'"> '+
                ' <td>'+ elementos["origen"] +'</td> '+
                ' <td>'+ elementos["destino"] +'</td> '+
                ' <td>'+ elementos["pronostico"] +'</td> '+
                ' <td>'+ elementos["limite"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoS3OrigenDestino").val(JSON.stringify(elementosS3TOD));
        $("#cierraModal").click();  
    }
    return false;
}



renglonS4C= 0;
elementosS4C=[];

function dibujaS4C(){
    $('#titulo').html('Relacionar empresas filiales o subsidiarias');
    let contenido = ' ' +
                    '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Razón Social</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4CRazon" id="S4CRazon" class="form-control" aria-required="true"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Actividad</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4CActividad" id="S4CActividad" class="form-control" aria-required="true"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>% sobre ventas totales</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> <input type="text" name="S4CPorcentaje" id="S4CPorcentaje" class="form-control numero" aria-required="true" >' +
                    '                    <div class="input-group-append"> ' +
                    '                        <span class="input-group-text">%</span> ' +
                    '                         ' +
                    '                    </div>     ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" data-dismiss="alert" class="btn btn-primary" id="registraS4C" onclick="registraS4C();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4CRazon").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4CActividad").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';

    $('#botonesModal').hide();
    $('#contenido').html(contenido);

    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}


function registraS4C(){
    l_error=1;
    l_error = presentaAlerta($("#S4CRazon"), 0, 'Razón social', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4CActividad"), 0, 'Actividad', $("#alerta") );
    }

    if(l_error === 0){
        l_error = presentaAlerta($("#S4CPorcentaje"), 0, 'Porcentaje', $("#alerta") );
    }

    if(l_error === 0){

        renglonS4C = renglonS4C+1; 
        let elementos = {
                    "id": renglonS4C,
                    "razon": $("#S4CRazon").val(),
                    "actividad": $("#S4CActividad").val(),
                    "porcentaje": $("#S4CPorcentaje").val()
                    }
        elementosS4C.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle" onclick="borrarElemento(elementosS4C,\'contenidoTCruzada\','+ renglonS4C + ', \'RTC\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4CBody").innerHTML +='<tr id="RTC'+ renglonS4C +'"> '+
                ' <td>'+ elementos["razon"] +'</td> '+
                ' <td>'+ elementos["actividad"] +'</td> '+
                ' <td>'+ elementos["porcentaje"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoTCruzada").val(JSON.stringify(elementosS4C));
        $("#cierraModal").click();  
    }
    return false;
}


renglonS4N= 0;
elementosS4N=[];

function dibujaS4N(){
    $('#titulo').html('Relacionar Principales productos');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Producto / Material</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4NProducto" id="S4NProducto" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Ventas Anuales</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <div class="input-group-prepend"> ' +
                    '                        <span class="input-group-text">$</span> ' +
                    '                    </div>' +
                    '                    <input type="text" name="S4NVentas" id="S4NVentas" class="form-control" value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>% sobre ventas totales</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <input type="text" name="S4NPorcentaje" id="S4NPorcentaje" class="form-control" value="0">' +
                    '                    <div class="input-group-append"> ' +
                    '                        <span class="input-group-text">%</span> ' +
                    '                         ' +
                    '                    </div>     ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4N" onclick="registraS4N();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4NProducto").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4NVentas").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4N(){

    let l_error=0;
    l_error = presentaAlerta($("#S4NProducto"), 0, 'Producto / Material', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4NVentas"), 1, 'Ventas Anuales', $("#alerta") );
    }
   
    if(l_error === 0){
        l_error = presentaAlerta($("#S4NPorcentaje"), 1, '% sobre ventas totales', $("#alerta") );
    }
   
    if(l_error === 0){
        renglonS4N = renglonS4N+1; 
        let elementos = {
                    "id": renglonS4N,
                    "producto": $("#S4NProducto").val(),
                    "ventas": $("#S4NVentas").val(),
                    "porcentaje": $("#S4NPorcentaje").val()
                    }
        elementosS4N.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4N,\'contenidoProductoNacional\','+renglonS4N+', \'RTN\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4NBody").innerHTML +='<tr id="RTN'+ renglonS4N +'"> '+
                
                ' <td>'+ elementos["producto"] +'</td> '+
                ' <td>'+ elementos["ventas"] +'</td> '+
                ' <td>'+ elementos["porcentaje"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoProductoNacional").val(JSON.stringify(elementosS4N));
        $("#cierraModal").click();  
    }
}




renglonS4E1= 0;
elementosS4E1=[];

function dibujaS4E1(){
    $('#titulo').html('Relacionar Principales productos');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Producto / Material</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4E1Producto" id="S4E1Producto" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Ventas Anuales</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <div class="input-group-prepend"> ' +
                    '                        <span class="input-group-text">$</span> ' +
                    '                    </div>' +
                    '                    <input type="text" name="S4E1Ventas" id="S4E1Ventas" class="form-control" value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>% sobre ventas totales</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <input type="text" name="S4E1Porcentaje" id="S4E1Porcentaje" class="form-control"  value="0">' +
                    '                    <div class="input-group-append"> ' +
                    '                        <span class="input-group-text">%</span> ' +
                    '                         ' +
                    '                    </div>     ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4E1" onclick="registraS4E1();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4E1Producto").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4E1Ventas").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4E1(){
    let l_error=0;
    l_error = presentaAlerta($("#S4E1Producto"), 0, 'Producto / Material', $("#alerta"));
    if(l_error === 0){
        //console.log("entra");
        l_error = presentaAlerta($("#S4E1Ventas"), 1, 'Ventas Anuales', $("#alerta") );
    }
   
    if(l_error === 0){
        l_error = presentaAlerta($("#S4E1Porcentaje"), 1, '% sobre ventas totales', $("#alerta") );
    }
   
    if(l_error === 0){
        renglonS4E1 = renglonS4E1+1; 
        let elementos = {
                    "id": renglonS4E1,
                    "producto": $("#S4E1Producto").val(),
                    "ventas": $("#S4E1Ventas").val(),
                    "porcentaje": $("#S4E1Porcentaje").val()
                    }
        elementosS4E1.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4E1,\'contenidoProductoExportacion1\','+renglonS4E1+', \'RTE1\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4E1Body").innerHTML +='<tr id="RTE1'+ renglonS4E1 +'"> '+
                
                ' <td>'+ elementos["producto"] +'</td> '+
                ' <td>'+ elementos["ventas"] +'</td> '+
                ' <td>'+ elementos["porcentaje"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoProductoExportacion1").val(JSON.stringify(elementosS4E1));
        $("#cierraModal").click(); 
    } 
}



renglonS4E2= 0;
elementosS4E2=[];

function dibujaS4E2(){
    $('#titulo').html('Ventas en el extranjero');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>País</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4E2Pais" id="S4E2Pais" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Ventas Anuales</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <div class="input-group-prepend"> ' +
                    '                        <span class="input-group-text">$</span> ' +
                    '                    </div>' +
                    '                    <input type="text" name="S4E2Ventas" id="S4E2Ventas" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                   
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4E2" onclick="registraS4E2();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4E2Pais").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4E2Ventas").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';

    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4E2(){
    let l_error=0;
    l_error = presentaAlerta($("#S4E2Pais"), 0, 'País', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4E2Ventas"), 1, 'Ventas Anuales', $("#alerta") );
    }
   
    if(l_error === 0){
        renglonS4E2 = renglonS4E2+1; 
        let elementos = {
                    "id": renglonS4E2,
                    "pais": $("#S4E2Pais").val(),
                    "ventas": $("#S4E2Ventas").val(),
                    }
        elementosS4E2.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4E2,\'contenidoProductoExportacion2\','+renglonS4E2 +', \'RTE2\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4E2Body").innerHTML +='<tr id="RTE2'+ renglonS4E2 +'"> '+
                //' <td>'+ $('#aseguradora').val() +'</td> '+
                ' <td>'+ elementos["pais"] +'</td> '+
                ' <td>'+ elementos["ventas"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoProductoExportacion2").val(JSON.stringify(elementosS4E2));
        $("#cierraModal").click();  
    }
}



renglonS4U= 0;
elementosS4U=[];

function dibujaS4U(){
    $('#titulo').html('Relacionar Principales productos');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Producto / Material</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4UProducto" id="S4UProducto" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Ventas Anuales</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <div class="input-group-prepend"> ' +
                    '                        <span class="input-group-text">$</span> ' +
                    '                    </div>' +
                    '                    <input type="text" name="S4UVentas" id="S4UVentas" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>% sobre ventas totales</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <input type="number" name="S4UPorcentaje" id="S4UPorcentaje" class="form-control"  value="0">' +
                    '                    <div class="input-group-append"> ' +
                    '                        <span class="input-group-text">%</span> ' +
                    '                         ' +
                    '                    </div>     ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4U" onclick="registraS4U();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4UProducto").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4UVentas").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();
    
    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4U(){
    let l_error=0;
    l_error = presentaAlerta($("#S4UProducto"), 0, 'Producto / Material', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4UVentas"), 1, 'Ventas Anuales', $("#alerta") );
    }
   
    if(l_error === 0){
        l_error = presentaAlerta($("#S4UPorcentaje"), 1, '% sobre ventas totales', $("#alerta") );
    }
   
    if(l_error === 0){
            renglonS4U = renglonS4U+1; 
            let elementos = {
                        "id": renglonS4U,
                        "producto": $("#S4UProducto").val(),
                        "ventas": $("#S4UVentas").val(),
                        "porcentaje": $("#S4UPorcentaje").val()
                        }
            elementosS4U.push(elementos);
            elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4U,\'contenidoUnionMezcla\','+ renglonS4U + ', \'RTU2\');"><i class="fas fa-trash"></i></span>';          

            document.getElementById("tableS4UBody").innerHTML +='<tr id="RTU2'+ renglonS4U +'"> '+
                    
                    ' <td>'+ elementos["producto"] +'</td> '+
                    ' <td>'+ elementos["ventas"] +'</td> '+
                    ' <td>'+ elementos["porcentaje"] +'</td> '+
                    ' <td>'+ elimina +'</td> '+
                    ' </tr>';
            $("#contenidoUnionMezcla").val(JSON.stringify(elementosS4U));
            $("#cierraModal").click();  
    }
}


renglonS4ES= 0;
elementosS4ES=[];

function dibujaS4ES(){


    $('#titulo').html('Indicar');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>No. de lugares / Cajones</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ESLugarescajones" id="S4ESLugarescajones" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Lugares de Autoservicio</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ESAutoservicio" id="S4ESAutoservicio" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>No de Acomodadores</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ESAcomodadores" id="S4ESAcomodadores" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Sublímite por vehículo ($)</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <div class="input-group-prepend"> ' +
                    '                        <span class="input-group-text">$</span> ' +
                    '                    </div>' +
                    '                    <input type="text" name="S4ESSublimiteVehiculo" id="S4ESSublimiteVehiculo" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4ES" onclick="registraS4ES();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4ESLugarescajones").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ESAutoservicio").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ESAcomodadores").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ESSublimiteVehiculo").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4ES(){
    let l_error=0;
    l_error = presentaAlerta($("#S4ESLugarescajones"), 1, 'No. de lugares / Cajones', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ESAutoservicio"), 1, 'Lugares de Autoservicio', $("#alerta") );
    }
   
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ESAcomodadores"), 1, 'No de Acomodadores', $("#alerta") );
    }

    if(l_error === 0){
        l_error = presentaAlerta($("#S4ESSublimiteVehiculo"), 1, 'Sublímite por vehículo', $("#alerta") );
    }
   
    if(l_error === 0){
        renglonS4ES = renglonS4ES+1; 
        let elementos = {
                    "id": renglonS4ES,
                    "cajones": $("#S4ESLugarescajones").val(),
                    "autoservicio": $("#S4ESAutoservicio").val(),
                    "acomodadores": $("#S4ESAcomodadores").val(),
                    "sublimite": $("#S4ESSublimiteVehiculo").val()
                    }
        elementosS4ES.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4ES,\'contenidoEstacionamientos\','+ renglonS4ES + ', \'RTES\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4ESBody").innerHTML +='<tr id="RTES'+ renglonS4ES +'"> '+
                
                ' <td>'+ elementos["cajones"] +'</td> '+
                ' <td>'+ elementos["autoservicio"] +'</td> '+
                ' <td>'+ elementos["acomodadores"] +'</td> '+
                ' <td>'+ elementos["sublimite"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoEstacionamientos").val(JSON.stringify(elementosS4U));
        $("#cierraModal").click(); 
    }     
}



renglonS4LDO= 0;
elementosS4LDO=[];

function dibujaS4LDO(){


    $('#titulo').html('Lugar y descripción de la Obra');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Dirección, colonia y CP </strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4LDODireccion" id="S4LDODireccion" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Municipio o Alcaldía</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4LDOMunicipio" id="S4LDOMunicipio" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Estado</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4LDOestado" id="S4LDOestado" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Descripción general de la obra</strong></small></div> ' +
                    '                <div class="col-sm-6 input-group"> ' +
                    '                    <input type="text" name="S4LDODescripcionObra" id="S4LDODescripcionObra" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4LDO" onclick="registraS4LDO();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4LDODireccion").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4LDOMunicipio").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4LDOestado").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4LDO(){
    let l_error=0;
    l_error = presentaAlerta($("#S4LDODireccion"), 0, 'Dirección, colonia y CP', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4LDOMunicipio"), 0, 'Municipio o Alcaldía', $("#alerta") );
    }
   
    if(l_error === 0){
        l_error = presentaAlerta($("#S4LDOestado"), 0, 'Estado', $("#alerta") );
    }

    if(l_error === 0){
        l_error = presentaAlerta($("#S4LDODescripcionObra"), 0, 'Descripción general de la obra', $("#alerta") );
    }
   
    if(l_error === 0){
        renglonS4LDO = renglonS4LDO+1; 
        let elementos = {
                    "id": renglonS4LDO,
                    "direccion": $("#S4LDODireccion").val(),
                    "municipio": $("#S4LDOMunicipio").val(),
                    "estado": $("#S4LDOestado").val(),
                    "descripcionObra": $("#S4LDODescripcionObra").val()
                    }
        elementosS4LDO.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4LDO,\'contenidoS4LDO\','+ renglonS4LDO + ', \'RTS4LDO\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4LDOBody").innerHTML +='<tr id="RTS4LDO'+ renglonS4LDO +'"> '+
                
                ' <td>'+ elementos["direccion"] +'</td> '+
                ' <td>'+ elementos["municipio"] +'</td> '+
                ' <td>'+ elementos["estado"] +'</td> '+
                ' <td>'+ elementos["descripcionObra"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoS4LDO").val(JSON.stringify(elementosS4LDO));
        $("#cierraModal").click();  
    }
}





renglonS4Subcontratistas= 0;
elementosS4Subcontratistas=[];

function dibujaS4Subcontratistas(){


    $('#titulo').html('En caso de subcontratistas llenar la siguiente información');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Razón Social</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4SubcontratistasRazon" id="S4SubcontratistasRazon" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>RFC</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4SubcontratistasRFC" id="S4SubcontratistasRFC" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Tipo de trabajos a realizar</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4SubcontratistasTipoTr" id="S4SubcontratistasTipoTr" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4Subcontratistas" onclick="registraS4Subcontratistas();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4SubcontratistasRazon").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4SubcontratistasRFC").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4SubcontratistasTipoTr").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4Subcontratistas(){
    let l_error=0;
    l_error = presentaAlerta($("#S4SubcontratistasRazon"), 0, 'Razón Social', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4SubcontratistasRFC"), 0, 'RFC', $("#alerta") );
    }
   
    if(l_error === 0){
        l_error = presentaAlerta($("#S4SubcontratistasTipoTr"), 0, 'Tipo de trabajos a realizar', $("#alerta") );
    }

    if(l_error === 0){
            renglonS4Subcontratistas = renglonS4Subcontratistas+1; 
            let elementos = {
                        "id": renglonS4Subcontratistas,
                        "razon": $("#S4SubcontratistasRazon").val(),
                        "rfc": $("#S4SubcontratistasRFC").val(),
                        "tipoTrabajo": $("#S4SubcontratistasTipoTr").val()
                        }
            elementosS4Subcontratistas.push(elementos);
            elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4Subcontratistas,\'contenidoS4Subcontratistas\','+ renglonS4Subcontratistas + ', \'RTCSC\');"><i class="fas fa-trash"></i></span>';          

            document.getElementById("tableS4SubcontratistasBody").innerHTML +='<tr id="RTCSC'+ renglonS4Subcontratistas +'"> '+
                    
                    ' <td>'+ elementos["razon"] +'</td> '+
                    ' <td>'+ elementos["rfc"] +'</td> '+
                    ' <td>'+ elementos["tipoTrabajo"] +'</td> '+
                    ' <td>'+ elimina +'</td> '+
                    ' </tr>';
            $("#contenidoS4Subcontratistas").val(JSON.stringify(elementosS4Subcontratistas));
            $("#cierraModal").click();  
    }       
}




renglonS4ObrasEspeciales= 0;
elementosS4ObrasEspeciales=[];

function dibujaS4ObrasEspeciales(){


    $('#titulo').html('Obras Especiales');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Descripción</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ObrasEspecialesDescripcion" id="S4ObrasEspecialesDescripcion" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Detalle</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ObrasEspecialesDetalle" id="S4ObrasEspecialesDetalle" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4ObrasEsp" onclick="registraS4ObrasEsp();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4ObrasEspecialesDescripcion").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ObrasEspecialesDetalle").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4ObrasEsp(){
    let l_error=0;
    l_error = presentaAlerta($("#S4ObrasEspecialesDescripcion"), 0, 'Descripción', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ObrasEspecialesDetalle"), 0, 'Detalle', $("#alerta") );
    }
    
    if(l_error === 0){
        renglonS4ObrasEspeciales = renglonS4ObrasEspeciales+1; 
        let elementos = {
                    "id": renglonS4ObrasEspeciales,
                    "descripcion": $("#S4ObrasEspecialesDescripcion").val(),
                    "detalle": $("#S4ObrasEspecialesDetalle").val()
                    }
        elementosS4ObrasEspeciales.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4ObrasEspeciales,\'contenidoS4ObrasEspeciales\','+ renglonS4ObrasEspeciales + ', \'RTCESP\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4ObrasEspecialesBody").innerHTML +='<tr id="RTCESP'+ renglonS4ObrasEspeciales +'"> '+
                //' <td>'+ $('#aseguradora').val() +'</td> '+
                ' <td>'+ elementos["descripcion"] +'</td> '+
                ' <td>'+ elementos["detalle"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoS4ObrasEspeciales").val(JSON.stringify(elementosS4ObrasEspeciales));
        $("#cierraModal").click();  
    }
}





renglonS4Medicos= 0;
elementosS4Medicos=[];

function dibujaS4medicos(){
    

    $('#titulo').html('RC Medicos');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Especialidad</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4MedicosEspecialidad" id="S4MedicosEspecialidad" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Cirugías que practican</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4MedicosCirugias" id="S4MedicosCirugias" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div>'+ 
                    ' </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4Medicos" onclick="registraS4Medicos();"> Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4MedicosEspecialidad").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4MedicosCirugias").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4Medicos(){
    let l_error=0;
    l_error = presentaAlerta($("#S4MedicosEspecialidad"), 0, 'Especialidad', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4MedicosCirugias"), 0, 'Cirugías que practican', $("#alerta") );
    }
   
    
    if(l_error === 0){
        renglonS4Medicos = renglonS4Medicos+1; 
        let elementos = {
                    "id": renglonS4Medicos,
                    "especialidad": $("#S4MedicosEspecialidad").val(),
                    "cirugia": $("#S4MedicosCirugias").val()
                    }
        elementosS4Medicos.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4Medicos,\'contenidoS4Medicos\','+ renglonS4Medicos + ', \'RS4M\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4medicosBody").innerHTML +='<tr id="RS4M'+ renglonS4Medicos +'"> '+
                
                ' <td>'+ elementos["especialidad"] +'</td> '+
                ' <td>'+ elementos["cirugia"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoS4Medicos").val(JSON.stringify(elementosS4Medicos));
        $("#cierraModal").click();  
    }
}




renglonS4Abogados= 0;
elementosS4Abogados=[];

function dibujaS4Abogados(){
    $('#titulo').html('RC Abogados');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Número de abogados</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4AbogadosNumero" id="S4AbogadosNumero" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Especialidad</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4AbogadosEspecialidad" id="S4AbogadosEspecialidad" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Tipos de servicios jurídicos</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4AbogadosTServicio" id="S4AbogadosTServicio" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Honorarios año Anterior</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4AbogadosHonorariosAA" id="S4AbogadosHonorariosAA" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Honorarios proyectados año actual y proximo año</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4AbogadosHonorariosProyeccion" id="S4AbogadosHonorariosProyeccion" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    ' </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4Abogados" onclick="registraS4Abogados();"> Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4AbogadosNumero").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4AbogadosEspecialidad").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4AbogadosTServicio").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4AbogadosHonorariosAA").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4Abogados(){
    let l_error=0;
    l_error = presentaAlerta($("#S4AbogadosNumero"), 1, 'Número de abogados', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4AbogadosEspecialidad"), 0, 'Especialidad', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4AbogadosTServicio"), 0, 'Tipos de servicios jurídicos', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4AbogadosHonorariosAA"), 1, 'Honorarios año Anterior', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4AbogadosHonorariosProyeccion"), 1, 'Honorarios proyectados año actual y proximo año', $("#alerta") );
    }
    
    if(l_error === 0){
        renglonS4Abogados = renglonS4Abogados+1; 
        let elementos = {
                    "id": renglonS4Abogados,
                    "numero": $("#S4AbogadosNumero").val(),
                    "especialidad": $("#S4AbogadosEspecialidad").val(),
                    "tServicio": $("#S4AbogadosTServicio").val(),
                    "honorariosaa": $("#S4AbogadosHonorariosAA").val(),
                    "honorariosproyeccion": $("#S4AbogadosHonorariosProyeccion").val()
                    }
        elementosS4Abogados.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4Abogados,\'contenidoS4Abogados\','+ renglonS4Abogados + ', \'RS4AB\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4AbogadosBody").innerHTML +='<tr id="RS4AB'+ renglonS4Abogados +'"> '+
                //' <td>'+ $('#aseguradora').val() +'</td> '+
                ' <td>'+ elementos["numero"] +'</td> '+
                ' <td>'+ elementos["especialidad"] +'</td> '+
                ' <td>'+ elementos["tServicio"] +'</td> '+
                ' <td>'+ elementos["honorariosaa"] +'</td> '+
                ' <td>'+ elementos["honorariosproyeccion"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoS4Abogados").val(JSON.stringify(elementosS4Abogados));
        $("#cierraModal").click();  
    }
}


renglonS4Arquitectos= 0;
elementosS4Arquitectos=[];

function dibujaS4Arquitectos(){
    $('#titulo').html('RC Arquitectos / Ingenieros');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Actividad</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ArquitectosActividad" id="S4ArquitectosActividad" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>No.Total de Personal</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ArquitectosPersonal" id="S4ArquitectosPersonal" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>No. Personas con Cédula</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ArquitectosCedula" id="S4ArquitectosCedula" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Honorarios / Ingresos por actividad</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ArquitectosHonorariosIA" id="S4ArquitectosHonorariosIA" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>% de Honorarios sobre el total</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ArquitectosHonorariosTotal" id="S4ArquitectosHonorariosTotal" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    ' </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4Arquitectos" onclick="registraS4Arquitectos();"> Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4ArquitectosActividad").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ArquitectosPersonal").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ArquitectosCedula").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ArquitectosHonorariosIA").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4Arquitectos(){
    let l_error=0;
    l_error = presentaAlerta($("#S4ArquitectosActividad"), 0, 'Actividad', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ArquitectosPersonal"), 1, 'No.Total de Personal', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ArquitectosCedula"), 1, 'No. Personas con Cédula', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ArquitectosHonorariosIA"), 1, 'Honorarios / Ingresos por actividad', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ArquitectosHonorariosTotal"), 1, '% de Honorarios sobre el total', $("#alerta") );
    }
    
    if(l_error === 0){
        renglonS4Arquitectos = renglonS4Arquitectos+1; 
        let elementos = {
                    "id": renglonS4Arquitectos,
                    "actividad": $("#S4ArquitectosActividad").val(),
                    "personal": $("#S4ArquitectosPersonal").val(),
                    "cedula": $("#S4ArquitectosCedula").val(),
                    "honorariosia": $("#S4ArquitectosHonorariosIA").val(),
                    "honorariostotal": $("#S4ArquitectosHonorariosTotal").val()
                    }
        elementosS4Arquitectos.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4Arquitectos,\'contenidoS4Arquitectos\','+ renglonS4Arquitectos + ', \'RS4AR\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4ArquitectosBody").innerHTML +='<tr id="RS4AR'+ renglonS4Arquitectos +'"> '+
                //' <td>'+ $('#aseguradora').val() +'</td> '+
                ' <td>'+ elementos["actividad"] +'</td> '+
                ' <td>'+ elementos["personal"] +'</td> '+
                ' <td>'+ elementos["cedula"] +'</td> '+
                ' <td>'+ elementos["honorariosia"] +'</td> '+
                ' <td>'+ elementos["honorariostotal"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoS4Arquitectos").val(JSON.stringify(elementosS4Arquitectos));
        $("#cierraModal").click();  
    }
}



renglonS4Contadores= 0;
elementosS4Contadores=[];

function dibujaS4Contadores(){
    $('#titulo').html('RC Contadores');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Número de contadores</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ContadoresNumero" id="S4ContadoresNumero" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Especialidad</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ContadoresEspecialidad" id="S4ContadoresEspecialidad" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Tipos de servicios contables</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ContadoresTServicio" id="S4ContadoresTServicio" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Honorarios año Anterior</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ContadoresHonorariosAA" id="S4ContadoresHonorariosAA" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Honorarios proyectados año actual y proximo año</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4ContadoresHonorariosProyeccion" id="S4ContadoresHonorariosProyeccion" class="form-control"  value="0"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    ' </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4Contadores" onclick="registraS4Contadores();"> Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4ContadoresNumero").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ContadoresEspecialidad").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ContadoresTServicio").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4ContadoresHonorariosAA").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4Contadores(){
    let l_error=0;
    l_error = presentaAlerta($("#S4ContadoresNumero"), 1, 'Número de contadores', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ContadoresEspecialidad"), 0, 'Especialidad', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ContadoresTServicio"), 0, 'Tipos de servicios contables', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ContadoresHonorariosAA"), 1, 'Honorarios año Anterior', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4ContadoresHonorariosProyeccion"), 1, 'Honorarios proyectados año actual y proximo año', $("#alerta") );
    }
    
    if(l_error === 0){
        renglonS4Contadores = renglonS4Contadores+1; 
        let elementos = {
                    "id": renglonS4Contadores,
                    "numero": $("#S4ContadoresNumero").val(),
                    "especialidad": $("#S4ContadoresEspecialidad").val(),
                    "tServicio": $("#S4ContadoresTServicio").val(),
                    "honorariosaa": $("#S4ContadoresHonorariosAA").val(),
                    "honorariosproyeccion": $("#S4ContadoresHonorariosProyeccion").val()
                    }
        elementosS4Contadores.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4Contadores,\'contenidoS4Contadores\','+ renglonS4Contadores + ', \'RS4CON\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4ContadoresBody").innerHTML +='<tr id="RS4CON'+ renglonS4Contadores +'"> '+
                //' <td>'+ $('#aseguradora').val() +'</td> '+
                ' <td>'+ elementos["numero"] +'</td> '+
                ' <td>'+ elementos["especialidad"] +'</td> '+
                ' <td>'+ elementos["tServicio"] +'</td> '+
                ' <td>'+ elementos["honorariosaa"] +'</td> '+
                ' <td>'+ elementos["honorariosproyeccion"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoS4Contadores").val(JSON.stringify(elementosS4Contadores));
        $("#cierraModal").click();  
    }
}




renglonS4Agentes= 0;
elementosS4Agentes=[];

function dibujaS4Agentes(){
    $('#titulo').html('RC Agente de Seguros');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Tipo de cédula</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4Agentescedula" id="S4Agentescedula" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Total de ingresos anuales</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4AgentesIngresos" id="S4AgentesIngresos" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Suma Asegurada</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="S4AgentesSumAsegurada" id="S4AgentesSumAsegurada" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    ' </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registraS4Agentes" onclick="registraS4Agentes();"> Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#S4Agentescedula").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4AgentesIngresos").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#S4AgentesSumAsegurada").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    
                    '    }); ' +
                    '</script> ' +
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;

}

function registraS4Agentes(){
    let l_error=0;
    l_error = presentaAlerta($("#S4Agentescedula"), 0, 'Tipo de cédula', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#S4AgentesIngresos"), 0, 'Total de ingresos anuales', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#S4AgentesSumAsegurada"), 0, 'Suma Asegurada', $("#alerta") );
    }
    if(l_error === 0){
        renglonS4Agentes = renglonS4Agentes+1; 
        let elementos = {
                    "id": renglonS4Agentes,
                    "cedula": $("#S4Agentescedula").val(),
                    "ingresos": $("#S4AgentesIngresos").val(),
                    "suma": $("#S4AgentesSumAsegurada").val()
                    }
        elementosS4Agentes.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosS4Agentes,\'contenidoS4Agentes\','+ renglonS4Agentes + ', \'RS4AG\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tableS4AgentesBody").innerHTML +='<tr id="RS4AG'+ renglonS4Agentes +'"> '+
                //' <td>'+ $('#aseguradora').val() +'</td> '+
                ' <td>'+ elementos["cedula"] +'</td> '+
                ' <td>'+ elementos["ingresos"] +'</td> '+
                ' <td>'+ elementos["suma"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidoS4Agentes").val(JSON.stringify(elementosS4Agentes));
        $("#cierraModal").click(); 
    } 
}



renglonx10 = 0;
elementosx10=[];


function dibujax10(){
    $('#titulo').html('Registre Equipos principales');
    let contenido = '        <div class="form-group"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Descripción</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="x10descripcion" id="x10descripcion" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Marca y Modelo</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="number" name="x10marca" id="x10marca" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Serie</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="number" name="x10serie" id="x10serie" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Valor</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <div class="input-group-prepend"> ' +
                    '                        <span class="input-group-text">$</span> ' +
                    '                        <input type="number" name="x10valor" id="x10valor" class="form-control"> ' +
                    '                    </div>     ' +
                    '                </div> ' +
                    '            </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-6"><small><strong>Años de Antigüedad</strong></small></div> ' +
                    '                <div class="col-sm-6"> ' +
                    '                    <input type="text" name="x10antiguedad" id="x10antiguedad" class="form-control"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    ' </div> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12"> ' +
                    '                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '                    <button type="button" class="btn btn-primary" id="registrax10" onclick="registrax10();">Registrar</button> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#x10descripcion").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#x10marca").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#x10serie").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#x10valor").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    '    ';
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    forma = $('#staticBackdrop').show();
    return false;
}




function registrax10(){
    let l_error=0;
    l_error = presentaAlerta($("#x10descripcion"), 0, 'Descripción', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#x10marca"), 0, 'Marca y Modelo', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#x10serie"), 0, 'Serie', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#x10valor"), 0, 'Valor', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#x10antiguedad"), 0, 'Años de Antigüedad', $("#alerta") );
    }
    if(l_error === 0){
        renglonx10 = renglonx10+1; 
        let elementos = {
                    "id": renglonx10,
                    "descripcion": $("#x10descripcion").val(),
                    "marca": $("#x10marca").val(),
                    "serie": $("#x10serie").val(),
                    "valor": $("#x10valor").val(),
                    "antiguedad": $("#x10antiguedad").val()
                    }
        elementosx10.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosx10,\'contenidox10\','+ renglonx10 + ', \'Rx10\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tablex10Body").innerHTML +='<tr id="Rx10'+ renglonx10 +'"> '+
                //' <td>'+ $('#aseguradora').val() +'</td> '+
                ' <td>'+ elementos["descripcion"] +'</td> '+
                ' <td>'+ elementos["marca"] +'</td> '+
                ' <td>'+ elementos["serie"] +'</td> '+
                ' <td>'+ elementos["valor"] +'</td> '+
                ' <td>'+ elementos["antiguedad"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidox10").val(JSON.stringify(elementosx10));
        $("#cierraModal").click(); 
    } 
}




renglonx9 = 0;
elementosx9=[];


function dibujax9(){
    $('#titulo').html('Registre Equipos principales');
    let contenido = '    <div class="form-group"> '+
                    '        <div class="row"> '+
                    '            <div class="col-sm-6"><small><strong>Descripción</strong></small></div> '+
                    '            <div class="col-sm-6"> '+
                    '                <input type="text" name="x9descripcion" id="x9descripcion" class="form-control"> '+
                    '            </div> '+
                    '        </div> '+
                    '        <div class="row"> '+
                    '            <div class="col-sm-6"><small><strong>Marca y Modelo</strong></small></div> '+
                    '            <div class="col-sm-6"> '+
                    '                <input type="text" name="x9marca" id="x9marca" class="form-control"> '+
                    '            </div> '+
                    '        </div> '+
                    '        <div class="row"> '+
                    '            <div class="col-sm-6"><small><strong>Serie</strong></small></div> '+
                    '            <div class="col-sm-6"> '+
                    '                <input type="text" name="x9serie" id="x9serie" class="form-control"> '+
                    '            </div> '+
                    '        </div> '+
                    '        <div class="row"> '+
                    '            <div class="col-sm-6"><small><strong>Valor</strong></small></div> '+
                    '            <div class="col-sm-6"> '+
                    '                <div class="input-group-prepend"> '+
                    '                    <span class="input-group-text">$</span> '+
                    '                    <input type="number" name="x9valor" id="x9valor" class="form-control"> '+
                    '                </div>     '+
                    '            </div> '+
                    '        </div> '+
                    '        <div class="row"> '+
                    '            <div class="col-sm-6"><small><strong>Años Antigüedad</strong></small></div> '+
                    '            <div class="col-sm-6"> '+
                    '                <input type="text" name="x9antiguedad" id="x9antiguedad" class="form-control"> '+
                    '            </div> '+
                    '        </div> '+
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    ' </div> ' +
                    '        <div class="row"> '+
                    '            <div class="col-sm-12"> '+
                    '                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> '+
                    '                <button type="button" class="btn btn-primary" id="registrax9" onclick="registrax9();">Registrar</button> '+
                    '            </div> '+
                    '        </div> '+
                    '    </div> ' +
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#x9descripcion").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#x9marca").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#x9serie").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#x9valor").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    ' ';
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    $('#staticBackdrop').show();
    return false;
}




function registrax9(){
    let l_error=0;
    l_error = presentaAlerta($("#x9descripcion"), 0, 'Descripción', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#x9marca"), 0, 'Marca y Modelo', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#x9serie"), 0, 'Serie', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#x9valor"), 0, 'Valor', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#x9antiguedad"), 0, 'Años de Antigüedad', $("#alerta") );
    }
    if(l_error === 0){
        renglonx9 = renglonx9+1; 
        let elementos = {
                    "id": renglonx9,
                    "descripcion": $("#x9descripcion").val(),
                    "marca": $("#x9marca").val(),
                    "serie": $("#x9serie").val(),
                    "valor": $("#x9valor").val(),
                    "antiguedad": $("#x9antiguedad").val()
                    }
        elementosx9.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosx9,\'contenidox9\','+ renglonx9 + ', \'Rx9\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tablex9Body").innerHTML +='<tr id="Rx9'+ renglonx9 +'"> '+
                //' <td>'+ $('#aseguradora').val() +'</td> '+
                ' <td>'+ elementos["descripcion"] +'</td> '+
                ' <td>'+ elementos["marca"] +'</td> '+
                ' <td>'+ elementos["serie"] +'</td> '+
                ' <td>'+ elementos["valor"] +'</td> '+
                ' <td>'+ elementos["antiguedad"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidox9").val(JSON.stringify(elementosx9));
        $("#cierraModal").click();  
    }
}





renglonx91 = 0;
elementosx91=[];

function dibujax91(){
    $('#titulo').html('Registre Equipos principales');
    let contenido = '<div class="form-group"> ' +
                    '    <div class="row"> ' +
                    '        <div class="col-sm-6"><small><strong>Descripción</strong></small></div> ' +
                    '        <div class="col-sm-6"> ' +
                    '            <input type="text" name="x91descripcion" id="x91descripcion" class="form-control"> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '    <div class="row"> ' +
                    '        <div class="col-sm-6"><small><strong>Marca y Modelo</strong></small></div> ' +
                    '        <div class="col-sm-6"> ' +
                    '            <input type="text" name="x91marca" id="x91marca" class="form-control"> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '    <div class="row"> ' +
                    '        <div class="col-sm-6"><small><strong>Serie</strong></small></div> ' +
                    '        <div class="col-sm-6"> ' +
                    '            <input type="text" name="x91serie" id="x91serie" class="form-control"> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '    <div class="row"> ' +
                    '        <div class="col-sm-6"><small><strong>Valor</strong></small></div> ' +
                    '        <div class="col-sm-6"> ' +
                    '            <div class="input-group-prepend"> ' +
                    '                <span class="input-group-text">$</span> ' +
                    '                <input type="number" name="x91valor" id="x91valor" class="form-control"> ' +
                    '            </div>     ' +
                    '        </div> ' +
                    '    </div> ' +
                    '    <div class="row"> ' +
                    '        <div class="col-sm-6"><small><strong>Antigüedad</strong></small></div> ' +
                    '        <div class="col-sm-6"> ' +
                    '            <input type="text" name="x91antiguedad" id="x91antiguedad" class="form-control"> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    ' </div> ' +
                    '    <div class="row"> ' +
                    '        <div class="col-sm-12"> ' +
                    '            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '            <button type="button" class="btn btn-primary" id="registrax91" onclick="registrax91();">Registrar</button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    ' </div>'+
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#x91descripcion").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#x91marca").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#x91serie").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#x91valor").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '    }); ' +
                    '</script> ' +
                    ' ';
    $('#botonesModal').hide();
    $('#contenido').html(contenido);
    $("#alerta").css("display", "none");
    $("#alerta").hide();

    $('#staticBackdrop').show();
    return false;
}

function registrax91(){
    let l_error=0;
    l_error = presentaAlerta($("#x91descripcion"), 0, 'Descripción', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#x91marca"), 0, 'Marca y Modelo', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#x91serie"), 0, 'Serie', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#x91valor"), 0, 'Valor', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#x91antiguedad"), 0, 'Años de Antigüedad', $("#alerta") );
    }
    if(l_error === 0){
        renglonx91 = renglonx91+1; 
        let elementos = {
                    "id": renglonx91,
                    "descripcion": $("#x91descripcion").val(),
                    "marca": $("#x91marca").val(),
                    "serie": $("#x91serie").val(),
                    "valor": $("#x91valor").val(),
                    "antiguedad": $("#x91antiguedad").val()
                    }
        elementosx91.push(elementos);
        elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosx91,\'contenidox91\','+ renglonx91 + ', \'Rx9\');"><i class="fas fa-trash"></i></span>';          

        document.getElementById("tablex91Body").innerHTML +='<tr id="Rx9'+ renglonx91 +'"> '+
                //' <td>'+ $('#aseguradora').val() +'</td> '+
                ' <td>'+ elementos["descripcion"] +'</td> '+
                ' <td>'+ elementos["marca"] +'</td> '+
                ' <td>'+ elementos["serie"] +'</td> '+
                ' <td>'+ elementos["valor"] +'</td> '+
                ' <td>'+ elementos["antiguedad"] +'</td> '+
                ' <td>'+ elimina +'</td> '+
                ' </tr>';
        $("#contenidox91").val(JSON.stringify(elementosx91));
        $("#cierraModal").click();  
    }
}


/* Se cambió el llenado para la compañia*/

function borrarElemento(arregloElemento, campoTexto, elemento, preTabla){
    let l_elemento = 0
    for(let b=0; b<arregloElemento.length;b++ ){
    $.each(arregloElemento[b],function(key, registro) {
            if (key= "id"){
                if(registro==elemento){
                    l_elemento=b;
                }
            }
        }); 
    }

    arregloElemento.splice( l_elemento, 1 );
    //eliminamos elemento
    //console.log("#" + preTabla + elemento);
    $("#" + preTabla + elemento).remove();
    //asignamos elemetos para guardado
    $('#'+campoTexto).val(JSON.stringify(arregloElemento));
    if($('#'+campoTexto).val().length == 2){ $('#'+campoTexto).val("")}
}



renglonCompania = 0;
elementosCompania=[];

function presentaOpcionCia(){
    if($("#ciaAseguradora").val()==99){
        $("#otraCia").removeAttr("hidden");
        $("#otraCia").show();
        $("#otraCia").focus();
    }else{
        $("#otraCia").hide();
        $("#otraCia").val("");
    }
}


function dibujaCompania(){
    let l_aseguradoras=[];
    /*Buscamos los elementos incluidos para no mostrarlos*/
    elementosCompania.forEach( function(valor, indice, array) {
        aseg = valor;
        l_aseguradoras.push(aseg.id);
    });
    //console.log(l_aseguradoras);



    $('#titulo').html('Registro claves');
    let contenido = '<script> ' +
                    '    function presentaOpcionCia(){ ' +
                    '        if($("#ciaAseguradora").val()==99){ ' +
                    '            $("#otraCia").removeAttr("hidden"); ' +
                    '            $("#otraCia").show();  ' +
                    '            $("#otraCia").focus(); ' +
                    '        }else{ ' +
                    '            $("#otraCia").hide();  ' +
                    '            $("#otraCia").val(""); ' +
                    '        } ' +
                    '    } ' +
                    '    </script> ' +
                    '    <div class="container form-group"> ' +
                    '    <div class="card " > ' +
                    '        <div class="card-header">En caso de tener clave en la compañía sustituir "Clave puente" por su clave </div> ' +
                    '        <div class="card-body"> ' +
                    '            <div class="row"> ' +
                    '                <div class="col-sm-12 form-group"> ' +
                    '                    <select name="ciaAseguradora" id="ciaAseguradora" class="form-control" onchange="presentaOpcionCia()"></select><br> ' +
                    '                    <input type="text" class="form-control" id="otraCia" name="otraCia" value="" hidden placeholder="Especifique la compañia"> ' +
                    '                <br> <br>' +
                    '                    <input type="text" class="form-control" id="ciaClavepuente" name="ciaClavepuente" value="Clave puente"> ' +
                    '                </div> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '    </div> ' + 
                    '</div>  ' +
                    '    <div class="row"> ' +
                    '        <div class="col-sm-12"> ' +
                    '            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '            <button type="button" class="btn btn-primary" id="registraCompania" onclick="registraCompania();">Seleccionar</button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    ' </div>';
                    $('#contenido').html(contenido);

                    aseguradoras.forEach( function(valor, indice, array) {
                        aseg = valor;
                        if(l_aseguradoras.indexOf(aseg.id)<0){
                            $('#ciaAseguradora').append('<option value=' + aseg.id + '>' + aseg.compania + '</option>');
                         }
                    });

    $('#botonesModal').hide(); 
    $('#staticBackdrop').show();
    return false;
}

function registraCompania(){
    let registra=0;

    if($("#ciaAseguradora").val()==99 && $("#otraCia").val()===""){
        registra=1;
        alert("Se debe especificar la aseguradora");
        $("#otraCia").focus();
    }
    
    if (registra===0){
            renglonCompania = $("#ciaAseguradora").val(); 
            if($("#ciaAseguradora").val()==99){
                nombreAseguradora = $("#otraCia").val();
            }else{
                nombreAseguradora = $("#ciaAseguradora")[0].options[$("#ciaAseguradora")[0].selectedIndex].text
            }

            let elementos = {
                        "id": $("#ciaAseguradora").val(),
                        "aseguradora": nombreAseguradora,
                        "clavepuente": $("#ciaClavepuente").val(),
                        }
            elementosCompania.push(elementos);
            elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosCompania,\'contenidoCompanias\','+ renglonCompania + ', \'RCIA\');"><i class="fas fa-trash"></i></span>';          

            document.getElementById("tableCompaniasBody").innerHTML +='<tr id="RCIA'+ renglonCompania +'"> '+
                    //' <td>'+ $('#aseguradora').val() +'</td> '+
                    ' <td>'+ elementos["aseguradora"] +'</td> '+
                    ' <td>'+ elementos["clavepuente"] +'</td> '+
                    ' <td>'+ elimina +'</td> '+
                    ' </tr>';
            $("#contenidoCompanias").val(JSON.stringify(elementosCompania));
            $("#cierraModal").click();  
        }      
}


renglonSiniestros = 0;
elementosSiniestros=[];


function dibujaSiniestros(){
    $('#titulo').html('Registro siniestralidad');
    let contenido = '<div class="container form-group"> ' +
                    '    <div class="row"><div class="col-sm-4"><input type="text" name="sinFecha" id="sinFecha" class="Datepicker form-control" placeholder="Fecha"></div></div><br>' +
                    '    <div class="row"><div class="col-sm-12"><input type="text" name="sinCausa" id="sinCausa" class="form-control " placeholder="Descripcion causa"></div></div><br>' +
                    '    <div class="row"><div class="col-sm-12"><input type="text" name="sinMonto" id="sinMonto" class="form-control " placeholder="$ monto" class="numero"></div></div><br></div>' +
                    '</div>' +
                    '    <div classs="container p-5" id="alerta" style="display:none">  ' +
                    '        <div class="alert alert-warning alert-dismissible fade show" role="alert" >  ' +
                    '        <div id="mensaje"></div>' +
                    '        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> ' +
                    '            <span aria-hidden="true">&times;</span> ' +
                    '        </button> ' +
                    '        </div> ' +
                    ' </div> ' +
                    '    <div class="row"> ' +
                    '        <div class="col-sm-12"> ' +
                    '            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
                    '            <button type="button" class="btn btn-primary" id="registraCompania" onclick="registraSiniestros();">Seleccionar</button> ' +
                    '        </div> ' +
                    '    </div> ' +
                    ' </div>' + 
                    '<script> ' +
                    '    $(document).ready(function(){ ' +
                    '        $("#sinFecha").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                    '        $("#sinCausa").keyup(function(evento){ ' +
                    '              $("#alerta").css("display", "none");' +
                    '              $("#alerta").hide();' +
                    '        }); ' +
                   
                    '    }); ' +
                    '</script> ' +
                    '';


                    $('#botonesModal').hide();
                    $('#contenido').html(contenido);
                    $("#alerta").css("display", "none");
                    $("#alerta").hide();

                    $( "#sinFecha").datepicker({ 
                        regional:'es'
                        });

                    $('#botonesModal').hide(); 
                    $('#staticBackdrop').show();
                    return false;
}

function registraSiniestros(){
    let l_error=0;
    l_error = presentaAlerta($("#sinFecha"), 0, 'Fecha', $("#alerta"));
    if(l_error === 0){
        l_error = presentaAlerta($("#sinCausa"), 0, 'Descripcion causa', $("#alerta") );
    }
    if(l_error === 0){
        l_error = presentaAlerta($("#sinMonto"), 0, 'monto', $("#alerta") );
    }
    if(l_error === 0){
            renglonSiniestros = renglonSiniestros+1; 

            let elementos = {
                        "id": renglonSiniestros,
                        "fecha": $("#sinFecha").val(),
                        "causa": $("#sinCausa").val(),
                        "monto": $("#sinMonto").val(),
                        }
            elementosSiniestros.push(elementos);
            elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borrarElemento(elementosSiniestros,\'contenidoSiniestros\','+ renglonSiniestros + ', \'RSIN\');"><i class="fas fa-trash"></i></span>';          

            document.getElementById("tableSiniestrosBody").innerHTML +='<tr id="RSIN'+ renglonSiniestros +'"> '+
                    //' <td>'+ $('#aseguradora').val() +'</td> '+
                    ' <td>'+ elementos["fecha"] +'</td> '+
                    ' <td>'+ elementos["causa"] +'</td> '+
                    ' <td>'+ elementos["monto"] +'</td> '+
                    ' <td>'+ elimina +'</td> '+
                    ' </tr>';
            $("#contenidoSiniestros").val(JSON.stringify(elementosSiniestros));
            $("#cierraModal").click();  
    }
}

