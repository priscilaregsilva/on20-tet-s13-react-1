import './App.css'
import Author from './components/Author'
import Footer from './components/Footer'
import LearningCss from './components/LearningCss'
import LearningHtml from './components/LearningHtml'
import LearningJs from './components/LearningJs'

import fotoAutora from './assets/pri_foto.png'


function App() {
  return (
    <div>
      <Author name="Priscila" foto={fotoAutora}></Author>
      <LearningHtml gif="https://i.giphy.com/media/26n7b7PjSOZJwVCmY/giphy.webp"></LearningHtml>
      <LearningCss gifcss="https://lenadesign.org/wp-content/uploads/2019/12/untitled7-1.gif?w=580"></LearningCss>
      <LearningJs gifjs="https://anyforsoft.com/static/499c1cef78f951c9ef3892b69a9b0416/js-animation.gif"></LearningJs>
      <Footer></Footer>
    </div>
  )
}

export default App
