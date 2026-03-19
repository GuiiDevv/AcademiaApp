import ExercicioCard from './ExercicioCard'
import { useState, useEffect, useRef } from 'react'



function ExercicioList() {
    const [form, setForm] = useState({
        novoNomeExercicio: '',
        novoGrupoMuscular: '',
        novoNumSerie: '',
        novoNumRep: '7',
    })
    const [exercicios, setExercicios] = useState (() => {
    const stored = localStorage.getItem('fit-track')
  
    if (!stored) return [
        { id: 1, nomeExercicio: 'Supino reto com barra',grupoMuscular: 'Peito', numSerie: 0, numRep: 10},
        { id: 2, nomeExercicio: 'Remada curvada', grupoMuscular: 'Costas', numSerie: 0, numRep: 12},
        { id: 3, nomeExercicio: 'Agachamento livre', grupoMuscular: 'Pernas', numSerie: 0, numRep: 8},
        { id: 4, nomeExercicio: 'Rosca direta com barra', grupoMuscular: 'Biceps', numSerie: 0, numRep: 12},
        { id: 5, nomeExercicio: 'Elevação lateral', grupoMuscular: 'Ombros', numSerie: 0, numRep: 12},
        ]

        try {
            return JSON.parse(stored)
        } catch {
            return []
        }
    })
    const nomeInputRef = useRef(null)
    const limparHistorico = () => {
        localStorage.removeItem("fit-track");
        // Zera o valor das anotações dos exercícios de 1 a 5
        for (let i = 1; i <= 5; i++) {
            localStorage.setItem(`anotacao-exercicio-${i}`, '');
        }
        // Remove todas as anotações futuras (id > 5)
        Object.keys(localStorage)
            .filter(key => key.startsWith("anotacao-exercicio-") && parseInt(key.split('-').pop(), 10) > 5)
            .forEach(key => localStorage.removeItem(key));
        setExercicios([
            { id: 1, nomeExercicio: 'Supino reto com barra', grupoMuscular: 'Peito', numSerie: 3, numRep: 10},
            { id: 2, nomeExercicio: 'Remada curvada', grupoMuscular: 'Costas', numSerie: 4, numRep: 12},
            { id: 3, nomeExercicio: 'Agachamento livre', grupoMuscular: 'Pernas', numSerie: 6, numRep: 8},
            { id: 4, nomeExercicio: 'Rosca direta com barra', grupoMuscular: 'Biceps', numSerie: 2, numRep: 12},
            { id: 5, nomeExercicio: 'Elevação lateral', grupoMuscular: 'Ombros', numSerie: 3, numRep: 12},
        ]);
    }


    useEffect(() => {
        localStorage.setItem("fit-track", JSON.stringify(exercicios))
        console.log("💾 Exercicios salvos: ", exercicios.length )
    }, [exercicios])
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }


    const adicionarExercicio = (event) => {
        event.preventDefault()

        if (!form.novoNomeExercicio.trim()) {
            alert('Ìnforme um nome para o Exercicio.')
            return
        }

        const novoExercicio = {
            id: Date.now(),
            nomeExercicio: form.novoNomeExercicio,
            grupoMuscular: form.novoGrupoMuscular,
            numSerie: Number(form.novoNumSerie) || 0,
            numRep: form.novoNumRep,
        }

        setExercicios(prev => [...prev, novoExercicio])
        setForm({
            novoNomeExercicio: '',
            novoGrupoMuscular: '',
            novoNumSerie: '',
            novoNumRep: '',
        })

        nomeInputRef.current?.focus()
    }
    const removerExercicio = (id) => (
        setExercicios(exercicios.filter(exercicio => exercicio.id !== id))
    )

    //parte do html do nosso app academia;
    return (
        <section>
            <button className='button-limpar' onClick={limparHistorico}>limpar historico</button>   {/**/}
            <form onSubmit={adicionarExercicio} className="exercicio-form"> 
                <div>
                    <label>
                        <h3>Exercicio</h3>
                    </label>
                    <input
                    type="text"
                    name="novoNomeExercicio"
                    value={form.novoNomeExercicio}
                    onChange={handleChange}
                    ref={nomeInputRef}
                    />
                </div>

                <div>
                    <label>
                        <h3>Grupo Muscular</h3>
                    </label>
                    <input
                    type="text"
                    name="novoGrupoMuscular"
                    value={form.novoGrupoMuscular}
                    onChange={handleChange}                  
                    />
                </div>

                <div>
                    <label>
                        <h3>Series</h3>
                    </label>
                    <input
                    type="number"
                    name="novoNumSerie"
                    value={form.novoNumSerie}
                    onChange={handleChange}
                    />
                </div>

                <div>
                    <label>
                        <h3>Repeticoes</h3>
                    </label>
                    <input
                    type="number"
                    name="novoNumRep"
                    value={form.novoNumRep}
                    onChange={handleChange}
                    />
                </div>
                <button className='button-adicionar'type='Submit'>adicionar exercicio</button>
            </form>
            
            <ul>
                <h2 className='title1'>Meus Exercicios:</h2>
                {exercicios.length === 0
                    ? <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>
                    : <p>Você tem {exercicios.length} hábito(s) cadastrado(s).</p>
                }

                {exercicios.map((exercicio) => (
                    <ExercicioCard
                        key={exercicio.id}
                        id={exercicio.id}
                        nomeExercicio={exercicio.nomeExercicio}
                        grupoMuscular={exercicio.grupoMuscular}
                        numSerie={exercicio.numSerie}
                        numRep={exercicio.numRep}
                        diasFeitos={exercicio.diasFeitos}
                        onRemover={() => removerExercicio(exercicio.id)}
                    />
                ))}
            </ul>
        
        
        
        </section>


    )
}

export default ExercicioList

