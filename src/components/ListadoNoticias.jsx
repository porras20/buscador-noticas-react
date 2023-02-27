import { Noticia } from "./Noticia"

export const ListadoNoticias = ({noticias}) => {
    return (
        <div className="row">
            {noticias.map(noticia =>(
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    )
}