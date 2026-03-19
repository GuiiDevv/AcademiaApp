function SecaoExercicio ({ titulo, children }) {
    return (
        <section>
            <h2>{titulo}</h2>
            <div className='lista-Exercicios'>
                {children}
            </div>
        </section>
    )

}

export default SecaoExercicio