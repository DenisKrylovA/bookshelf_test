import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { setBookIdAC, setCurrentBookAC } from '../../../redux/bookshelf_reducer';
import Book from './Book';

class BookContainer extends React.Component {
    
    componentDidMount() {
        let url = window.location.pathname;
        let urlArray = url.split('/');
        let bookId = urlArray[2]; 
        this.props.setBookIdAC(bookId);
        let currentBook = this.props.books.find( item => item.id == bookId );
        this.props.setCurrentBookAC(currentBook);
    }

    render() {
        return <>
            <Book 
                bookId={this.props.bookId}
                books={this.props.books}
                currentBook={this.props.currentBook}
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        books: state.bookshelf.books,
        bookId: state.bookshelf.bookId,
        currentBook: state.bookshelf.currentBook
    }
}

export default compose(
    connect(mapStateToProps, { setBookIdAC, setCurrentBookAC })
)(BookContainer)