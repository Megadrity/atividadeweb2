const entrada = document.querySelector('#entrada');
const btn = document.querySelector('#btn');
const lista = document.querySelector('#lista');
btn.onclick = () => {
    if(entrada.value != ''){
        let itemLista = document.createElement('li');
        let texto = document.createTextNode(entrada.value);
        let iconeOk = document.createElement('ion-icon');
        let iconeRemover = document.createElement('ion-icon');
        iconeOk.classList.add('icone');
        iconeOk.setAttribute('name', 'checkmark-circle-outline');
        iconeRemover.classList.add('icone2');
        iconeRemover.setAttribute('name', 'close-circle-outline');
        itemLista.append(texto);
        itemLista.append(iconeOk);
        itemLista.append(iconeRemover);
        console.log(itemLista);
        lista.append(lista);
    }else{
        alert('Você precisa preencher o campo');
    }
 };
