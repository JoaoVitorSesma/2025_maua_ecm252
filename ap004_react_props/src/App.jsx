import Pedido from "./pedido"

export default () => {
  return(
    <div className="container border">

      <div className="row">
        <div className="col-12">      
          <i className="fa-solid fa-otter fa-2x"></i>
        </div>
      </div>

      <div className="row">

        {/* Gato */}
        <div className="col-sm-12 col-md-6 col-xl-3">
          {/* <div className="card">
            <div className="card-header text-muted">11/03/2025</div>

            <div className="card-body d-flex align-items-center gap-3">
              <i className="fa-solid fa-cat fa-2x"></i>

              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Gato</h4>
                <p className="text-center">Um gatinho</p>
              </div>
            </div>
          </div> */}
          <Pedido 
            data = "11/03/2025"
            icone = "fa-solid fa-cat fa-2x"
            titulo = "Gato"
            descricao = "Um gatinho"
            />
        </div>

        {/* Cachorro */}
        <div className="col-sm-12 col-md-6 col-xl-3">
          {/* <div className="card">
            <div className="card-header text-muted">07/07/2025</div>

            <div className="card-body d-flex align-items-center gap-3">
              <i className="fa-solid fa-dog fa-2x"></i>

              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Cachorro</h4>
                <p className="text-center">Um cachorrinho</p>
              </div>
            </div>
          </div> */}
          <Pedido 
            data = "07/07/2025"
            icone = "fa-dog"
            titulo = "Cachorro"
            descricao = "Um cachorrinho"
            />
        </div>

        {/* Peixe */}
        <div className="col-sm-12 col-md-6 col-xl-3">
          {/* <div className="card">
            <div className="card-header text-muted">08/07/2025</div>

            <div className="card-body d-flex align-items-center gap-3">
              <i className="fa-solid fa-dragon fa-2x"></i>

              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Dragão</h4>
                <p className="text-center">Uma dragoa</p>
              </div>
            </div>
          </div> */}
          <Pedido 
            data = "08/07/2025"
            icone = "fa-dragon"
            titulo = "Dragão"
            descricao = "Uma dragoa"
            />
        </div>

        {/* Pássaro */}
        <div className="col-sm-12 col-md-6 col-xl-3">
          {/* <div className="card">
            <div className="card-header text-muted">08/09/2025</div>

            <div className="card-body d-flex align-items-center gap-3">
              <i className="fa-solid fa-dove fa-2x"></i>

              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Pássaro</h4>
                <p className="text-center">Um passarinho</p>
              </div>
            </div>
          </div> */}
          <Pedido 
            data = "08/09/2025"
            icone = "fa-dove"
            titulo = "Pássaro"
            descricao = "Um passarinho"
            />
        </div>

        {/* Cavalo */}
        {/* <div className="col-sm-12 col-md-6 col-xl-3">
          <div className="card">
            <div className="card-header text-muted">14/06/2025</div>

            <div className="card-body d-flex align-items-center gap-3">
              <i className="fa-solid fa-horse fa-2x"></i>

              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Cavalo</h4>
                <p className="text-center">Um cavalo forte</p>
              </div>
            </div>
          </div>
        </div> */}

      </div>

    </div>
  )
}