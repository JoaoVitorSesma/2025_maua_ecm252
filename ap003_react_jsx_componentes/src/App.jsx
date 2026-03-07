import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'

const App = () => {

  const estiloBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%',borderRadius: 8}

  const textoDoRotulo = 'Nome:'

  const obterTextoDoBotao = () => 'Enviar'

  const aoClicar = () => alert('Clicou')
  return <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>

  <label 
  className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom:4}}>
  {textoDoRotulo}
  </label>

{/*input#campoNome*/}
<input type="text" id="nome" style={{paddingTop: 8, paddingBottom: 8,
borderStyle: 'hidden',width: '100%', borderRadius: 8, outline: 'none', boxSizing:
'border-box'}}/>

{/*button{Enviar}*/}
<button
  onClick = {aoClicar}
  style={estiloBotao}>
  {obterTextoDoBotao()}
  </button>
</div>
}

export default App