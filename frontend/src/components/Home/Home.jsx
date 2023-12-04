import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
                students.map(el =>{
                    return(
                        <div>
                            <h5>Nombres:{el.firstName}</h5>
                            <h5>Apellidos:{el.lastName}</h5>
                            <h5>ID:{el.id}</h5>
                            <Link to={`/updatestudent/${el.id}`}>Update</Link>
                            <hr></hr>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default Home;