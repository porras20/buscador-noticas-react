import { useSelect } from '../hooks/useSelect'
import styles from './Formulario.module.css'




export const Formulario = ({setCategoria}) => {
    
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertaiment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'sciencie', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'}
    ]
    //utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
    
    //Cuando el usuario da en submit al form
    const buscarNoticas = (e) => {
        e.preventDefault()
        setCategoria(categoria)
    }
    return(
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form 
                    onSubmit={buscarNoticas}>
                    <h2 className={styles.heading}>Encuentra noticas por categoria</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                            />
                    </div>
                </form>
            </div>
        </div>
    )
}