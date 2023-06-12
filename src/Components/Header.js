/*
Using 'REact router' library in our app allows us to navigate
 between different pages or components in  React , and actually makes these changes to   URL of each page or component
React Router isn't installed with 'create-react-app' by default, so you will need to install it before start using it
npm i react-router-dom
*/
import { NavLink, Link } from "react-router-dom"
function Header(props){
    return(
        <header>
            <div className="container flexbox">
                <h1>React</h1>
                <nav>
                    <ul>
                        <li class="six"><Link to="/home">Home</Link></li>
                        <li class="home-2"><NavLink className = {navData => (navData.isActive ? "active" : "")}to="/about-us">AboutUs</NavLink></li>
                        <li class="home-3"><NavLink className = {navData => (navData.isActive ? "active" : "")} to = "/tutorials">Tutorial</NavLink></li>
                        {/*Using  object destructuring*/}
                        <li class="home-3"><NavLink className = {({isActive}) => (isActive ? "active" : "")} to ="/documentation">Documentation</NavLink></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header