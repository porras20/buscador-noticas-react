import { useState } from "react"


export const useSelect = (stateInicial, opciones) =>{
    
    //State del custom hook
    const [state, actualizarState] = useState(stateInicial)
    const SelecNoticas = () => (
        <select     
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
            >
            {opciones.map(opcion =>(
                <option value={opcion.value} key={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    )
    return[state, SelecNoticas]
}