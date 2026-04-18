import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  // window.navigator.geolocation.getCurrentPosition(
  //   (position) => {
  //     console.log('Latitude:', position.coords.latitude)
  //     console.log('Longitude:', position.coords.longitude)
  //   },
  //   (error) => {
  //     console.error('Error obtaining geolocation:', error)
  //   }
  // )

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     estacao: null,
  //     data: null,
  //     icone: null
  //   }
  // }

  const [latitude, setLatitude] = React.useState(null)
  const [longitude, setLongitude] = React.useState(null)
  const [estacao, setEstacao] = React.useState(null)
  const [data, setData] = React.useState(null)
  const [icone, setIcone] = React.useState(null)

  const obterEstacao = (dataAtual, latitude) => {
    const anoAtual = dataAtual.getFullYear()
    //new Date(ano, mês(0 a 11), dia(1 a 31))
    //21/06
    const d1 = new Date(anoAtual, 5, 23)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const sul = latitude < 0;

    if (dataAtual >= d1 && dataAtual < d2)
      return sul ? 'Inverno' : 'Verão'
    if (dataAtual >= d2 && dataAtual < d3)
      return sul ? 'Primavera' : 'Outono'
    if (dataAtual >= d3 || dataAtual < d1)
      return sul ? 'Verão' : 'Inverno'
    return sul ? 'Outono' : 'Primavera'
  }

  const icones = {
    'Primavera': '🌸',
    'Verão': '☀️',
    'Outono': '🍂',
    'Inverno': '❄️'
  }

  const obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const dataAtual = new Date()
        const estacaoAtual = obterEstacao(dataAtual, posicao.coords.latitude)
        const iconeAtual = icones[estacaoAtual]
        console.log(iconeAtual)
        setLatitude(posicao.coords.latitude)
        setLongitude(posicao.coords.longitude)
        setEstacao(estacaoAtual)
        setData(dataAtual.toLocaleTimeString())
        setIcone(iconeAtual)
      }
    )
  }

  return (
    // responsividade, margem acima
    <div className="container mt-2">
      {/* uma linha, conteúdo centralizado, display é flex */}
      <div className="row justify-content-center">
      {/* oito colunas das doze disponíveis serão usadas para telas médias em diante */}
        <div className="col-md-8">
          {/* um cartão de Bootstrap*/}
          <div className="card">
            {/* o corpo do cartão */}
            <div className="card-body">
              {/* centraliza verticalmente, margem abaixo */}
              <div className="d-flex align-items-center border rounded mb-2" style={{ height: '6rem' }}>
                {/* ícone obtido do estado do componente */}
                <div style={{ fontSize: '4rem' }}>{icone}</div>
                {/* largura 75%, margem no à esquerda (start), fs aumenta a fonte */}
                <p className="w-75 ms-3 text-center fs-1">{estacao}</p>
              </div>
              <p className="text-center">
                {/* renderização condicional */}
                {
                  latitude ?
                  `Coordenadas: ${latitude?.toFixed(4)}, ${longitude?.toFixed(4)}. Data: ${data}`:
                  'Clique no botão para saber a sua estação climática'
                }
              </p>

              {/* botão azul (outline, 100% de largura e margem acima) */}
              <button onClick={obterLocalizacao}
                className="btn btn-outline-primary w-100 mt-2">
                Qual a minha estação?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App