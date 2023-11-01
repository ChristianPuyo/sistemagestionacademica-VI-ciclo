import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/actions";

const Users = ()=>{
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)

    useEffect(()=>{
        dispatch(getUsers())
    }, [])

    return(
        <div>
            <h1>Users</h1>
            {
                users.map(element =>{
                    return(
                        <div>
                            <h3>Name:{element.name}</h3>
                            <h3>Email:{element.email}</h3>
                            <h3>Ciudad:{element.address.city}</h3>
                            <hr></hr>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default Users;