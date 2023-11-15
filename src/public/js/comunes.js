

function regresaDato(dato){
     let regreso;
     //console.log($("#"+dato));
     regreso = $("#"+dato).val();
     //console.log($("#"+dato).val());
     return regreso; 
}


function copiaDatos(archivoBd, archivo,tipo){
  if(tipo==0){
        $("#archivoBDUbi").val(archivoBd);
        $("#archivoUbi").val(archivo);
  }else{
      $("#archivoBDSin").val(archivoBd);
      $("#archivoSin").val(archivo);
  }
}

function reemplazaCadena(campo){ 
  campo = campo.toString().replace(/&quot;/g,'"'); 
  return campo; 
} 

function llenaOpcionesSel(control, lista){
    //console.log(control);
    //console.log(JSON.parse(JSON.stringify(reemplazaCadena(lista))));

    if(lista.length>0){
       let l_array = $.parseJSON(reemplazaCadena(lista));
        
        for(let b=0; b<l_array.length;b++ ){
          let l_valor = {
              indice:"",
              valor:""
          }
          l_valor.indice =  l_array[b].indice;
          l_valor.valor = l_array[b].valor;
          control.append('<option value="' + l_valor.valor + '">'+ l_valor.valor+'</option>');
        }
      
    }

}


function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}


function MASK(form, n, mask, format) {
  if (format == "undefined") format = false;
  if (format || NUM(n)) {
    dec = 0, point = 0;
    x = mask.indexOf(".")+1;
    if (x) { dec = mask.length - x; }

    if (dec) {
      n = NUM(n, dec)+"";
      x = n.indexOf(".")+1;
      if (x) { point = n.length - x; } else { n += "."; }
    } else {
      n = NUM(n, 0)+"";
    } 
    for (var x = point; x < dec ; x++) {
      n += "0";
    }
    x = n.length, y = mask.length, XMASK = "";
    while ( x || y ) {
      if ( x ) {
        while ( y && "#0.".indexOf(mask.charAt(y-1)) == -1 ) {
          if ( n.charAt(x-1) != "-")
            XMASK = mask.charAt(y-1) + XMASK;
          y--;
        }
        XMASK = n.charAt(x-1) + XMASK, x--;
      } else if ( y && "$0".indexOf(mask.charAt(y-1))+1 ) {
        XMASK = mask.charAt(y-1) + XMASK;
      }
      if ( y ) { y-- }
    }
  } else {
     XMASK="";
  }
  if (form) { 
    form.value = XMASK;
    /*if (NUM(n)<0) {
      form.style.color="#FF0000";
    } else {
      form.style.color="#000000";
    }*/
  }
  return XMASK;
}

// Convierte una cadena alfanumérica a numérica (incluyendo formulas aritméticas)
//
// s   = cadena a ser convertida a numérica
// dec = numero de decimales a redondear
//
// La función devuelve el numero redondeado

function NUM(s, dec) {
  for (var s = s+"", num = "", x = 0 ; x < s.length ; x++) {
    c = s.charAt(x);
    if (".-+/*".indexOf(c)+1 || c != " " && !isNaN(c)) { num+=c; }
  }
  if (isNaN(num)) { num = eval(num); }
  if (num == "")  { num=0; } else { num = parseFloat(num); }
  if (dec != undefined) {
    r=.5; if (num<0) r=-r;
    e=Math.pow(10, (dec>0) ? dec : 0 );
    return parseInt(num*e+r) / e;
  } else {
    return num;
  }
}


      

function mascara(o,f){
  v_obj=o;
  v_fun=f;
  setTimeout("execmascara()",1);
}

function execmascara(){
  v_obj.value=v_fun(v_obj.value);
}

function cpf(v){
  v=v.replace(/([^0-9\.]+)/g,'');
  v=v.replace(/^[\.]/,'');
  v=v.replace(/[\.][\.]/g,'');
  v=v.replace(/\.(\d)(\d)(\d)/g,'.$1$2');
  v=v.replace(/\.(\d{1,2})\./g,'.$1');
  v = v.toString().split('').reverse().join('').replace(/(\d{3})/g,'$1,');
  v = v.split('').reverse().join('').replace(/^[\,]/,'');
  return v;
}



function cierraCuestionario(){
    let opcion = $("#ccc").val();
    //console.log(opcion);
    $('#titulo').html('Cierre / Reapertura');
       
    if (opcion>0){
          accion= 'Reapertura de cuestionario';
          mensaje = "Esta accion reabrirá el cuestionario. <br>El cuestionario estrá disponible nuevamente para su modificacion";
          imagen = "candadoa.png";
          leyenda= "Confirmar reapertura";
    }else{
         accion = 'Cierre de cuestionario';
         mensaje = "Esta accion cerrara el cuestionario. <br> El cuestionario ya no podrá modificarlo";
         imagen = "candadoc.png";
         leyenda= "Confirmar cierre";
    }

    $("#ccc").val($("#ccc").val()==0?"1":"0");
     
    let contenido = ' ' +
                      ' <div class="card" >  '+
                      ' 	<div class="row">   '+
                      ' 		  <div class="col-md-2 .img-responsive center-block">   '+    
                      ' 				   <img src="/img/'+imagen+'" >   '+
                      ' 		   </div>  '+
                      ' 		   <div class="col-md-10">   '+
                      ' 			 <div class="card-body">   '+
                      ' 				<h5 class="card-title"></h5>   '+
                      ' 				<p class="card-text"> ' + mensaje + ' </p>   '+
                      ' 			 </div>   '+
                      ' 			</div>  '+
                      ' 	</div>   '+
                      ' 	<div class="row">   '+
                      ' 		 <div class="col-sm-12">   '+
                      ' 			   <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>   '+
                      ' 			   <button type="button" class="btn btn-primary" id="confirmaCierre" onclick="confirmaCierre();"> ' +  leyenda + '</button>   '+
                      ' 		 </div>   '+
                      ' 	</div>   '+
                      ' <div>	  '+
                    '    ';
                    
    $('#botonesModal').hide();
    $('#contenido').html(contenido);

    forma = $('#staticBackdrop').show();
    return false;
}



function confirmaCierre(){
  // $("#ccc").val( ($("#ccc").val()==0? 1 : 0) );
   $("#botonCierre").html( ($("#ccc").val()==0? "Cerrar" : "Reabrir") );
   //document.getElementById('botonGuardar').disabled=($("#ccc").val()==0? false : true);
   $("#cierraModal").click(); 
   guardaCuestionario();
}


function guardaCuestionario(){
     document.forma.submit();
}


function deshabilitaC(control){
  let l_control = control;
  $("#botonCierre").html( (l_control==0? "Cerrar" : "Reabrir") );
        
  if (control==1){
        $("input[type='text']").attr("disabled", "true");
        $("input[type='radio']").attr("disabled", "true");
        $("input[type='checkbox']").attr("disabled", "true");
        $("select").attr("readonly", "true");
        $("textarea").attr("readonly", "true");
        $(".fa-plus-circle").hide();
        //$("#capturaSiniestros").hide();
        $(".borrar").hide();
        $("#enlacearchivoUbi").attr("readonly", "true");
        $("#botonGuardar").attr("disabled", "true");

        /*window.frames[0].document.getElementById('subir').disabled = true;
        window.frames[1].document.getElementById('subir').disabled = true;*/
      }
  
}