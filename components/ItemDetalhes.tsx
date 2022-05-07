import Arma from "../classes/Arma"
import styles from "./ItemDetalhes.module.css"

export default function ItemDetalhes(props){
    return (
        <div className={styles.container}>
            <table className={styles.componentes}>
                <thead>
                    <th>Atributo</th>
                    <th>Valor</th>
                </thead>
                <tbody>
                    {renderArma(props.data)}
                </tbody>
            </table>
        </div>

    )
}

function renderArma(arma){

    const atributo = {
        name: "Nome",
        category: "Categoria",
        weight: "Peso",
        price: "Preço"
    }

    return (
        Object.keys(atributo).map((key) => {
            return (
                <tr key={arma.id}>
                    <td>{atributo[key]}</td>
                    <td>{arma[key]}</td>
                </tr>
            )
        }
        )
    )
}