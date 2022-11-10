import fotoAutora from '../assets/pri_foto.png'

function Footer() {
    return (
        <div class="Footer">
            <h6> &copy; Copyright Autora Projeto: Priscila Silva</h6>
            <h6>Desenvolvedora Front-End</h6>
            <h6>Reprograma</h6>
            <img src={fotoAutora} alt="Foto Autora" class="foto_autora" />
        </div>
    )
}

export default Footer