import AnotacoesExercicio from './AnotacoesExercicio.jsx'; {/*importei para anotacoes ficar separado e dentro de cada card dos exercicio*/}
import {useState} from 'react'

function ExercicioCard({id, nomeExercicio, grupoMuscular = '', numSerie, numRep, onRemover}) {  {/*aqui eu to criando minha funcao para o componente/card de exercicios, recebendo em props*/}
  const [concluido, setConcluido] = useState(false);  
  return (
    // html do card dos exercicios
    <div className={concluido ? "exercicio-card concluido" : "exercicio-card"}>
      <div className="content-card">
        <h2>Exercicio</h2>
        <h3>{nomeExercicio}</h3>
        {grupoMuscular && <p>grupo muscular: {grupoMuscular}</p>}
        <p>Numero de series: {numSerie}</p>
        <p>Numero de repeticoes: {numRep}</p>
      </div>
      <div className="button-card">
        {onRemover && (
          <button type="button" onClick={onRemover}> 
              Remover<br></br> exercicio
          </button>
        )}
        <button
          className={concluido ? "btn-concluido" : ""}     
          onClick={() => setConcluido(true)}
        >
          Concluído
        </button>
      {/*coloquei aqui para ficar abaixo dos dados do formulario, salvando por id e ter o bloco de anotacao para cada card*/}
      <AnotacoesExercicio id={id}
      />
      {/*esse botao [e apenas para eu usar o css nele e aplicar uma cor para mostrar que apenas foi concluido o exercicio*/}        
      </div>
    </div>

  )
}

export default ExercicioCard
