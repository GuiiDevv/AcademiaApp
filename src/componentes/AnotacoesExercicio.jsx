import { useState, useEffect } from 'react'; {/* primeiro importei o useState para setar/controlar em cada card a anotacao/input */}

function AnotacoesExercicio({ id }) {     {/* criei minha funcao de anotacoes do card do exercicio*/}
  const chave = `anotacao-exercicio-${id}`;   {/* aqui eu to criando uma chave unica pra cada anotacao de cada card*/}
  const [texto, setTexto] = useState(() => {
    const anotacaoSalva = localStorage.getItem(chave);
    return anotacaoSalva || '';
  });   {/* aqui eu to criando uma variavel que manipula meu texto da anotacao com useState*/}
  const [editando, setEditando] = useState(false);     {/*aqui eu to criando uma variavel pra editar minha anotacao quando quiser usando o useState*/}

  useEffect(() => {
    localStorage.setItem(chave, texto)}, [texto, chave]);   {/* aqui eu to salvando minha anotacao no localStorage toda vez que o texto mudar*/}

  return (  
    <div> {/* Seu comentário aqui */}
      {editando && ( 
        <div>
          <textarea
            value={texto}
            onChange={e => setTexto(e.target.value)}
            placeholder="Digite sua anotacao"
          />
          <button onClick={() => setEditando(false)} className="btn-salvar"> 
            Salvar
          </button>
        </div>
      )}
      {!editando && (
        <div className="anotacao-area">
          <strong>Anotação:</strong>
          <p>{texto || <span style={{color:'#ccc'}}>Nenhuma anotação ainda.</span>}</p>
        </div>
      )}
      {!editando && ( 
        <button   
          onClick={() => setEditando(true)} 
          className="anotacao-btn"
        >
          Adicionar<br />anotação
        </button>
      )}
    </div>
  );
}

export default AnotacoesExercicio;