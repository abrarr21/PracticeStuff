import Nav from "./components/Nav"
import Routing from "./utils/Routing"

function App() {

  return (
    <>
      {/* <nav className="mt-10 flex justify-center gap-10">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/user"> User</Link>
        <Link to="/contact"> Contact</Link>
      </nav> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      <Nav />
      <Routing />
    </>
  )
}

export default App
