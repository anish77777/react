import {  useState } from "react";
import { createContext,  useContext } from "react";

export const BookContext = createContext();

export function useBook() {
    return useContext(BookContext);
}

//Provider

export function BookProvider({ children }) {
    const [books, setBooks] = useState([{id:1,title:"The Hobbit" , author:'J.R.R Tolkien'}]);

    const addBook = (book) => {
        setBooks((prev) => [...prev,{...book, id:crypto.randomUUID()}])
    }

    const deleteBook = (id) => {
      setBooks( (prev)=> prev.filter((book) => book.id !== id))
    }

    
    return (
        <BookContext.Provider value={{ books, addBook, deleteBook }}>
            {children}
        </BookContext.Provider>
    );
}


