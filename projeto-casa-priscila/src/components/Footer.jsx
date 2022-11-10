import fotoAutora from '../assets/pri_foto.png'

function Footer() {
    return (
        <div class="Footer">
    
            <div>
                <img src={fotoAutora} alt="Foto Autora" class="foto_autora" />
            </div>

            <div>
                <p> &copy; Copyright Autora Projeto: Priscila Silva</p>
                <p>Desenvolvedora Front-End</p>
                <p>Reprograma</p>
            </div>
        </div>
    )
}

export default Footer