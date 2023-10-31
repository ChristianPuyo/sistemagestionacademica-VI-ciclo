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
        </div>
    )
}

export default Users;