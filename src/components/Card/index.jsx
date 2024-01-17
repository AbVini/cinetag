import { useFavoritoContext } from '@/contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconedDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavoritos } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconedDesfavoritar;
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img
                src={icone}
                alt="Favoritar Filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavoritos({ id, titulo, capa })
                }}
            />
        </div>
    )
}

export default Card;