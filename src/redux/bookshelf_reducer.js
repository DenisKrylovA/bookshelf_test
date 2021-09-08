import { booksAPI } from "../api/api";

const SET_BOOK = 'SET_BOOK';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_BOOK_ID = 'SET_BOOK_ID';
const SET_CURRENT_BOOK = 'SET_CURRENT_BOOK';

let initialState = {
    books: [],
    isFetching: false,
    bookId: '',
    currentBook: null
};

const bookshelfReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK:
            let newArrayBooks = state.books.concat(action.books);
            return {
                ...state,
                books: newArrayBooks
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_BOOK_ID:
            return {
                ...state,
                bookId: action.bookId
            }
        case SET_CURRENT_BOOK:
            return {
                ...state,
                currentBook: action.currentBook
            }
        default:
            return state;
    }
}

//action creators

export const setBooksAC = (books) => ({ type: SET_BOOK, books })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setBookIdAC = (bookId) => ({ type: SET_BOOK_ID, bookId })
export const setCurrentBookAC = (currentBook) => ({ type: SET_CURRENT_BOOK, currentBook })


//thunk creators

export const setBooksTC = (index) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        booksAPI.getBooks(index)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setBooksAC(data.items));
            });
    }
}

export default bookshelfReducer;