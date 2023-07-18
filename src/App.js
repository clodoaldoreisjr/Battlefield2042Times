import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/Index.js';
import Time from './componentes/Time';
import Rodape from './componentes/Rodapé/Rodape.js';


function App() {

  const times = [
    {
      nome:'Assalto',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Engenharia',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Reconhecimento',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Suporte',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    }
    
  ] 

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => { 
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={
        colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time=>
      <Time 
      key={time.nome} 
      nome = {time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />     
    </div>
  );
}

export default App;
