//Necessário a lib JQuery

$(document).ready(() => {
    const API_URL = 'https://publica.cnpj.ws/cnpj'

    //Função a consulta de dados
    const cunsultarAPI =  async (cnpj) => {
        return await fetch(API_URL + '/' + cnpj)
        .then(async(r) => {
            if (r.status === 200) {
                const data = await r.json()
                return data
            }
            return null
        })
        .catch((err) => {
            console.log('Erro ao consultar dados da api.', err.toString())
            return null
        })
    }

    //Exportar para JQUERY
    $.consultarCNPJ = cunsultarAPI
})