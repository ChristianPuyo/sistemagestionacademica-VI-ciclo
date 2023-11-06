import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../redux/actions/actions";

const Home = ()=>{
    const dispatch = useDispatch(); // dispatch me permite despachar acciones.
    const students = useSelector(state => state.students) //useSelector me permite traer
    //información del estado global.

    console.log(students)

    useEffect(()=>{ //el useEffect simula el ciclo de vida del componente
    //en este caso el useEffect está despachando una acción cuando el 
    //componente se renderiza es decir cuando el componente se visualiza en pantalla. 
        dispatch(getStudents())  
    }, [])       

    return( //El return en este caso está renderizando los elementos en pantalla.
    //todo lo que va dentro del return, se renderiza en pantalla. 
        <div>
            <h1>Students</h1>
                    
            {
                students.map(element =>{
                    return(
                        <div>
                            <h3>Nombres:{element.firstName}</h3>
                            <h3>Apellidos:{element.lastName}</h3>
                            
                            <hr></hr>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default Home;