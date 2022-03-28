import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/movielist">MovieList</NavLink></li>
                <li><NavLink to="/addmovie">AddMovie</NavLink></li>
            </ul>
            
            
            
        </div>
    )
}