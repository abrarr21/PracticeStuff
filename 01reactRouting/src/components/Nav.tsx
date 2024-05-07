import { Link, NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="mt-5 flex justify-center gap-10">
        <NavLink
            style={(e) => {
                return {
                    color: e.isActive? "tomato" : ""
                }
            }}
            to="/"> Home</NavLink>

        <NavLink
            style={(e) => {
                return {
                    color: e.isActive ? "tomato" : ""
                }
            }}
            to="/about"> About</NavLink>


        <NavLink
            style={(e) => {
                return {
                    color: e.isActive ? "tomato" : ""
                }
            }}
            to="/user"> User</NavLink>

        <NavLink
            style={(e) => {
                return {
                    color: e.isActive ? "tomato" : ""
                }
             }}
            to="/contact"> Contact</NavLink>
      </nav>
  )
}

export default Nav