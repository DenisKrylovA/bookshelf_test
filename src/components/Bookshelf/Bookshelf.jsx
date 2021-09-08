import styles from './Bookshelf.module.css';
import { NavLink } from 'react-router-dom';

let Bookshelf = (props) => {
    let bookItem = props.books.map(b =>
        <div>
            <NavLink to={'/book/' + b.id} books={props.books} >
                <img id='test' src={b.volumeInfo.imageLinks.smallThumbnail} />
            </NavLink>
            <br />
            <span>
                {b.volumeInfo.categories}
            </span><br />
            <span>
                {b.volumeInfo.title}
            </span><br />
            <span>
                {b.volumeInfo.authors}
            </span><br />
        </div>
    );

    return (
        <div className={styles.bookshelfBlock}>
            <div className={styles.bookshelfItem}>
                {bookItem}
            </div>
            <div>
                <button onClick={() => props.onLoadMoreBooks()}>Load more</button>
            </div>
        </div>
    )
}

export default Bookshelf;