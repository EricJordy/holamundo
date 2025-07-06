import "./Formulario.css"
import { useState } from "react" 


export function Formulario (){
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña]= useState("")
    const [error,setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(nombre == "" || contraseña == ""){
            setError(true)
            return
        }
        setError(true)

    }

    return(
        <section>
            <h1>Login</h1>
            <form
            className="formulario"
            onSubmit={handleSubmit}>

                <input 
                type="text" 
                value = {nombre}
                placeholder="Nombre"
                onChange={e => setNombre(e.target.value) }
                />
                <input 
                type="password" 
                value={contraseña}
                placeholder="Contraseña"
                onChange={e => setContraseña(e.target.value)}
                />
                <button> Ingresar </button>
            </form>    
            {error && <p> Todos los campos son obligatorios </p>}        
        </section>
    )
}
