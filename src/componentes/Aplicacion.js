import React, {Component} from 'react';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';


class Aplicacion extends Component{

    /*Hay dos formas de trabajar con el state:
    1- con el constructor
    2- sin el constructor, declrando el state por fuera*/
    constructor(props){
        super();
        this.state = {
            productos:[]
        };
    }

    /*Este metodo se ejecuta una vez el componente está a la vista*/
    componentDidMount(){
        const productos = [
                {nombre: 'Libro', precio:200},
                {nombre: 'Disco de musica', precio:100},
                {nombre: 'Instrumento musical', precio:800},
                {nombre: 'Album Ed. especial', precio:1500}
        ]
        
        setTimeout(()=>{
            this.setState({
                productos:productos
            });
        },3000);

        
    
        console.log("YAAAA!")
    }
    render(){

        return (
            <div>
                <Header
                    titulo="Nuestra tienda virtual"
                />
                <Productos
                    productos = {this.state.productos}
                />
                <Footer/>
            </div>
        )
    }
}

export default Aplicacion;


/*
    Hay 2 tipos de componentes
    Class Component
    class App extends React.Component{
        render(){
            return(
                <p>Hola mundo<p/>
            )
        }
    }

    Functional Component
    const App = (props) =>(
        <p>Hola mundo<p/>
    );

    Ventajas
        -Facil de crear, leer
        -Menos codigo
        -Facil de probar
        -No se usa this, se una props
    Desventajas
        - No puede usar los metodos del ciclo de vida
        (ComponentDidMount, ComponentDidUpdate)
        -No tiene state
        -No puedes usar refs
        -Si necesitas cualquiera de estas 3,
         entonces crea una ClassComponent


*/