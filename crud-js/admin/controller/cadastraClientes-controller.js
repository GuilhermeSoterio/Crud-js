import { clienteService } from '../service/client-service.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=> {
  evento.preventDefault()
  const nome = evento.target.querySelector('[data-nome]').value
  const email = evento.target.querySelector('[data-email]').value
 

  const VerificaNome = async (nome) => {
    let nomeVerdade;
    let contador = 0;
    const listaClientey = await clienteService.listaClientes()

    //Para cada elemento dentro do Data, executar a função do template.
    listaClientey.forEach(elemento => {
            if(nome == elemento.nome){
                contador ++
                console.log("Esse é o contador " + contador);
            }
    })

        if(contador < 1){
            nomeVerdade = nome;
            clienteService.criaCliente(nomeVerdade, email)
            .then(() => {
                window.location.href = '../telas/cadastro_concluido.html'
            })
        }

    else{
        alert("Erro, nome já criado!")
    }
}

  VerificaNome(nome)

})
