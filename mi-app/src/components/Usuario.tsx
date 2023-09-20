import { useState } from "react"

interface User {
    uid: string;
    name: string;
}

const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = ():void => {
        setUser({
            uid: 'ABC123',
            name: 'Alberto'
        });
    }

  return (
    <div className="mt-5">
        <h3>Usuario: useState</h3>

        <button 
            className="btn btn-outline-primary mt-2"
            onClick={ login }
        >
            Login
        </button>

        {
            (!user)
                ? <pre>User not logged in</pre>
                : <pre>{ JSON.stringify(user,null,2) }</pre>

        }
            
    </div>
  )
}

export default Usuario