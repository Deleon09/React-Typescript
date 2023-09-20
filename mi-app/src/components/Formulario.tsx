import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

const Formulario = () => {

    const { email, nombre, edad, formulario, handleChange } = useForm<FormData>({
        email: 'alberto@gmail.com',
        nombre: 'Alberto De León',
        edad: 35
    });

    // const { email, nombre, edad } = formulario;

    /* const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    });

    const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
        setFormulario({
            ...formulario,
            [target.name]: target.value
        })
    } */

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">Email:</label>
            <input 
                type="email"
                className="form-control"
                name="email"
                value={ email }
                onChange={ handleChange }
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input 
                type="text"
                className="form-control"
                name="nombre"
                value={ nombre }
                onChange={ handleChange }
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input 
                type="number"
                className="form-control"
                name="edad"
                value={ edad }
                onChange={ handleChange }
            />
        </div>

        <pre>{ JSON.stringify(formulario,null,2) }</pre>

    </form>
  )
}

export default Formulario