import { NavLink } from "react-router-dom";
import styles from "./Book.module.css";

let Book = (props) => {

    return (
        <div>
            {props.currentBook && <BookItem {...props}/>}
            <NavLink to={'/'}>
                <button>Back to bookshelf</button>
            </NavLink>
        </div >
    )
}

let BookItem = (props) => {
    return (
        <div className={styles.bookItem}>
            <div><img src={props.currentBook.volumeInfo.imageLinks.smallThumbnail} /></div>
            <div>
                <span>
                    {props.currentBook.volumeInfo.categories}
                </span><br/>
                <span>
                    {props.currentBook.volumeInfo.title}
                </span><br/>
                <span>
                    {props.currentBook.volumeInfo.authors}
                </span><br/>
            </div>
        </div>
    )
}

export default Book;