const BemVindo = ({ nomeUsuario }) => {
    const nomeFormatado = nomeUsuario.toUpperCase()
    return (
        <div>
            <h2>
                Olá, {nomeFormatado} !
            </h2>
            <p>Chegou a hora de treinar com estilo!<br></br> Registre seus treinos e acompanhe sua jornada fitness.</p>
        </div>
    )
}

export default BemVindo





