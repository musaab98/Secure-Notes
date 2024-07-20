import Form from "../components/Form"
import Navbar from "../components/Navbar"

function Login() {
    return <div>
        <Navbar />
        <Form route="/api/token/" method="login" />
    </div>
}

export default Login