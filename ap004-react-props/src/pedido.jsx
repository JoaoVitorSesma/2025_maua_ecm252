// rafce
import React from 'react'

const Pedido = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-header text-muted">{props.data}</div>

                <div className="card-body d-flex align-items-center gap-3">
                    <i className={`fa-solid fa-${props.icone} fa-2x`}></i>

                    <div className="border flex-grow-1 rounded p-3">
                        <h4 className="text-center">{props.titulo}</h4>
                        <p className="text-center">{props.descricao}</p>
                    </div>
                </div>
            </div>
        </div>
            )
}

            export default Pedido