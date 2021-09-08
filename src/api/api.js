import * as axios from 'axios';

// api key: " keyes&key=...& "

export const booksAPI = {
    getBooks(index) {
        return axios.get
            (`https://www.googleapis.com/books/v1/volumes?q=:keyes&key=&startIndex=${index}&maxResults=30`)
            .then(response => {
                return response.data;
            })
    }
}