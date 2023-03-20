const entrada = document.querySelector('#entrada');
const btn = document.querySelector('#btn');
const remove = document.getAttribute('#remove');
const lista = document.querySelector('#lista');
removeAttributeNode('#remove');
btn.onclick = () =>{}
    if (entrada.value != ''){
      alertify.confirm(
        "Confirmação de cadastro",
        "Você tem certeza que quer incluir o item " + entrada.value,
      );
      function(){ 

        let itemLista = document.createElement('li');
        let texto = document.createTextNode(entrada.value);
        let icone = document.createElement('ion-icon');
        let iconeRemover = document.createElement('ion-icon');
        let remove = document.getElementById('remove');
        icone.classList.add('icone');
        icone.setAttribute('name', 'checkmark-circle-outline');
        iconeRemover.classList.add('icone2');
        iconeRemover.setAttribute('name', 'close-circle-outline');
        itemLista.append(texto);
        itemLista.append(icone);
        itemLista.append(iconeRemover);
        lista.append(itemLista);
        alertify.success("Item adicionado.");
        entrada.value = ""; 
      }
        function(){
          alertify.error('Não inserido');
          entrada.value = "";
        else{
          alertify.alert('Por favor preencher o campo');
        }
      }
      function removerForm(){ 
        document.getElementById("div").lastChild.remove();
    
    
     if (remove.parentNode){
       remove.parentNode.removeChild(remove);
    
      } 
  }
  
  
};
