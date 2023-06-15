const findEstados = () =>{


fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(Response => Response.json())
    .then(json =>{ 
        //console.log(json)
        let inputEstado = document.getElementById('estado')

        let estados = ''
        json.forEach(estado =>
            estados += `<option value=${estado.sigla}>${estado.nome}</option>`
            
        );


inputEstado.innerHTML = estados
    })
    
}

findEstados()

function findByCep(){
    //pega o valor do cep digitado pelo usuario atraves do id cep do HTML

    let cepValue = cep.value
    //console.log(cepValue);

    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
    .then(Response => Response.json())
    .then(json => {
        //console.log(json)
        preencherCampos(json)

    })
}

const preencherCampos = json => {
    console.log(json)
    logradouro.value = json.logradouro
    numero.focus()
    bairro.value = json.bairro
    complemento.value = json.complemento



}