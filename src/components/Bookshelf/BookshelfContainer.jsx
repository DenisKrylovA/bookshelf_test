import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { setBooksTC } from '../../redux/bookshelf_reducer';
import Preloader from '../common/preloader/Preloader';
import Bookshelf from './Bookshelf';

class BookshelfContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        i: 0
    }

    increaseIndex = (index) => {
        let increase = 50;
        index = ++increase;
        this.setState({
            i: index
        });
        return index;
    }

    componentDidMount() {
        this.props.getBooks(this.state.i);
        this.increaseIndex(this.state.i);
    }

    onLoadMoreBooks = () => {
        this.props.getBooks(this.state.i);
        this.increaseIndex(this.state.i);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.i !== this.state.i) {
            this.setState({
                i: this.state.i
            });
        }
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Bookshelf
                books={this.props.books}
                onLoadMoreBooks={this.onLoadMoreBooks}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        books: state.bookshelf.books,
        isFetching: state.bookshelf.isFetching
    }
}

export default compose(
    connect(mapStateToProps, {
        getBooks: setBooksTC
    })
)(BookshelfContainer)