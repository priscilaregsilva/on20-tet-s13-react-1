function Author(props) {
  let nameAuthor = props.name


    return (
        <div>
             
            <h1>Prazer, Me chamo {nameAuthor}</h1>
            <img src={props.foto} />
            <h2>Atualmente sou aluna da Reprograma, no curso de Front-End,
                estou iniciando minha mingração de carreira nesse momento.</h2>

            <h1>O que estou aprendendo no mundo da programação no momento ...</h1>
        </div>
    )
}
export default Author