import Form from "../components/Form"
import Navbar from "../components/Navbar"

function Register() {
    return <div>
        <Navbar />
        <Form route="/api/user/register/" method="register" />
    </div>
}

export default Register