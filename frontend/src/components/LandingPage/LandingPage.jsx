import { Link } from "react-router-dom";

const LandingPage = ()=>{
    return(
        <div>
            <h1>Welcome to my page</h1>
            <Link to='/home'>Go to Home</Link>

        </div>
    )
}

export default LandingPage;