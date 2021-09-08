import styles from './SearchBar.module.css';

let SearchBar = (props) => {
    return (
        <div className={styles.backgroundImage + ' ' + styles.searchBarText}>
            <h1>Search for books</h1>
            <div>
                <input />
            </div>
            <div>
                <span>
                    <select >
                        <option >param 1</option>
                        <option >param 2</option>
                    </select>
                </span>
                <span>
                    <select >
                        <option >param 1</option>
                        <option >param 2</option>
                    </select>
                </span>
            </div>
        </div>
    )
}

export default SearchBar;