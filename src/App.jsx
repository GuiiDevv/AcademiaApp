import './App.css'
import BemVindo from './componentes/BemVindo.jsx'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import ExercicioList from './componentes/ExercicioList.jsx'
import SecaoExercicio from './componentes/SecaoExercicio.jsx'
import AnotacoesExercicio from './componentes/AnotacoesExercicio.jsx'

function App() {
  return (
    <div className='app'>
      <Header />
      <BemVindo nomeUsuario= 'Guilherme'/>
      <SecaoExercicio>
        <ExercicioList />
      </SecaoExercicio >
      <Footer />
    </div>
  )
}

  
export default App
