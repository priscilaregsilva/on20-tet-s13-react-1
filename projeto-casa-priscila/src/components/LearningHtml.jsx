function LearningHtml(props) {

        const HTML = props.text

    return(
        <div>
            <h1>HTML</h1>
            HTML é a linguagem que irá exibir, estruturar e organizar a nossa informação.  
            HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. 
            Define o significado e a estrutura do conteúdo da web.
            <br />
            <img src={props.gif} />
            
        </div>
    )
}

export default LearningHtml