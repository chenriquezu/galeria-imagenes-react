import './App.css';

import Header from './Components/Header';
import Card   from './Components/Card';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.css'


/*Importamos Imagenes a Utilizar*/
import fotoRE5 from './assets/img/Resident-Evil-5.png';
import fotoRE6 from './assets/img/Resident-Evil-6.png';
import fotoRER2 from './assets/img/Resident-Evil-Revelation2.png';
import fotoTitulo from './assets/img/Titulo.png';



function App() {
return (
        <div className = "App container">
           <Header
                 subtitle  = "Soy fanatico de la saga de juegos de Resident evil, He jugado estos titulos desde la ps-One hasta la ps5 , estos son algunos de los titulos que he jugado durante el ultimo año de pandemia."
                 subtitle1 = "Aun conservo los titulos Como Resident-Director Cup(Ps-one), Resident 2y 3(Ps2) y CodVeronica, Resident 4 (PS3)." 
                 foto      = {fotoTitulo}
            />
            <div className="container my-3">
               <div className="row">
                 <div className = "col-12 col-md-6 col-lg-4">
                  <Card 
                      title        = "Resesident Evil Zero"
                      description = "Juego de zombies"
                      foto        = {fotoRE5}
                  />
                 </div>
                 <div className = "col-12 col-md-6 col-lg-4">
                  <Card 
                      title        = "Resesident Evil 5"
                      description = "Juego de zombies"
                      foto        = {fotoRE6}
                  />
                 </div>

                 <div className = "col-12 col-md-6 col-lg-4">
                  <Card 
                      title        = "Resesident Evil Zero"
                      description = "Juego de zombies"
                      foto        = {fotoRER2}
                  />
                 </div>
                 
            
            
                </div>
            </div>
            

            <Footer
                 description = "@ 2023 Fanaticos-Juegos-Resident Evil Todos los derechos reservados."
            />       
        </div>
     );
};

export default App;
