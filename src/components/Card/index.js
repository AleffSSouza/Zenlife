import styles from "./Card.module.css";

function Card({ id }) {
    return(

    <div>
        <section className={styles.card}>
            
            <a 
                href={`https://www.youtube.com/watch?v=${id}`}
                rel="noreferrer noopener"
                target="_blank">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa"/>
            </a>
        </section>
     </div> 
    );  
}

export default Card;