export const Api = {
  baseUrl: 'https://backend-iniciante-integrar-com-frontend.onrender.com/personagem',

  personagem: {
    endpoint: function () {
      return Api.baseUrl + 'personagem'
    },
    readAll: function () {
      return this.endpoint() + '/'
    }
  },

  buildApiGetRequest: function (url) {
    return fetch(url, { method: 'GET' }).catch(function (error) {
      console.error('Erro ao carregar dados: ' + url, error)
      toast.error('Erro ao carregar dados.')
    })
  }
}
