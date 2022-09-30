import { useState } from 'react';
import './App.css';

function App() {
  const [mailit, setMailit] = useState('')
  const [Kilometrit, setKilometrit] = useState('')

function laske(e){
  e.preventDefault()
  const tulos = (mailit * 1.609)
  setKilometrit(tulos)
  
}

  return (
    <div id="content">
      <h3>Mailit kilometreiksi</h3> 
      <form onSubmit={laske}>
        <div>
        <label>mailit</label>  
        <input value={mailit} onChange={e => setMailit(e.target.value)}/>
        </div>
        <div>
          <label>Kilometrit</label>
          <output>{Kilometrit.toFixed(2)}</output>
        </div>  
        <button>Laske</button>
      </form>      
    </div>
  );
}

export default App;
