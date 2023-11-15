        let valores = "{{valores}}";
        let indice = 1;
        let l_valores = [];
        

        function dibujaForma(){
            $('#titulo').html('Registro de opciones');
            let contenido = '<div class="form-group"> ' +
                    '    <input type="text" name="nombre" id="nombre" class="form-control " placeholder="Descripcion" autofocus>' +
                    '</div>';
            $('#contenido').html(contenido);
            $('#staticBackdrop').show();
        }


        function aceptar(){
            //console.log("Entra");
            let l_valor = {
                    indice:"",
                    valor:""
                }
            l_valor.indice =  indice;
            l_valor.valor = $('#nombre').val();
            l_valores.push(l_valor);
            
            elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borraDato('+indice+')"><i class="fas fa-trash"></i></span>'
            document.getElementById("tbody").innerHTML +='<tr id="R'+indice+'"><td width=80%)>'+ $('#nombre').val() +'</td> <td>'+ elimina +'</td></tr>';
            
            indice = indice+1;
            $("#valores").val(JSON.stringify(l_valores)); 

            //console.log(l_valores);
            $("#cierraModal").click();
            
        }

        function buscaDato(row){
            let elemento = 0
            for(let b=0; b<l_valores.length;b++ ){
              $.each(l_valores[b],function(key, registro) {
                    if (key= "indice"){
                        if(registro==row){
                            elemento=b;
                        }
                    }
                }); 
            }
            return elemento
        } 

        function borraDato(row){
            let i = buscaDato(row);
            l_valores.splice( i, 1 );
            $("#R" + row).remove();
            $('#valores').val(JSON.stringify(l_valores));
        }

        function llenaListaValores(campo){
            if(campo.length>2){
                elementos = JSON.parse(campo);
                for(let b=0; b<elementos.length;b++ ){
                    let l_valor = {
                        indice:"",
                        valor:""
                    }
                    l_valor.indice =  elementos[b].indice;
                    l_valor.valor = elementos[b].valor;
                    

                    elimina = '<span class="btn btn-danger btn-circle borrar" onclick="borraDato('+l_valor.indice+')"><i class="fas fa-trash"></i></span>'
                    document.getElementById("tbody").innerHTML +='<tr id="R'+l_valor.indice+'"><td width=80%)>'+ l_valor.valor +'</td> <td>'+ elimina +'</td></tr>';
                    indice = l_valor.indice+1;
                    l_valores.push(l_valor);
                }
                    
            }        
        } 