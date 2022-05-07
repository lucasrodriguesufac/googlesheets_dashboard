import styles from "./busca.module.css";

export default function Busca(props){
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Escreva o nome da arma"/>
            <button>Buscar</button>
        </div>
    )
}