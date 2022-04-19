import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Lula Bostian'
          pais='Suecia'
          imagen='lula'
          cargo='Ingenieria de Software'
          empresa='Spotify'
          testimonio='Siempre he querido entender Javascript y por mas de ver muchos videos autodidacticamente o inclusive pagando por cursos, nunca llegaba a entenderlo completamente del todo bien. Desde que estudio con FreeCodeCamp puedo entender la logica de la programacion desde otra forma y ya puedo decir que puedo afrontar proyectos por mi misma.' />;
        <Testimonio 
          nombre='Gino Friedick'
          pais='Singapur'
          imagen='Gino'
          cargo='Programador Blockchain'
          empresa='Facebook'
          testimonio='Da miedo cambiar de carrera. Solo gane la confianza de que podia trabajar cientos de horas a traves de lecciones gratuitas en FreeCodeCamp. Dentro de un anio tengo un sueldo promedio mucho mas alto que el resto de programadores blockchain.' />
        <Testimonio 
          nombre='Emma Esposito'
          pais='Argentina'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Amazon'
          testimonio='Me tomo mucho tiempo adaptarme a nuevos cambios y sobre todo a cambiar de carrera. Lo bueno es que conoci la rama del software gracias a los tutores que posee FreeCodeCamp que se contactaron conmigo y me ayudaron de la mejor manera posible para hacer realidad mis suenios profesionales.' />
      </div>
    </div>
  );
}

export default App;
