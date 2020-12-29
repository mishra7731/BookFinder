import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookDetail from './components/BookDetail';
import faker from "faker";

const BookList = [
  {
    ID: 1,
    ImageSource: faker.image.image(200,300, true), 
    title: "The Zahir", 
    author:  "Paulo Coelho",
  },
  {
    ID: 2,
    ImageSource: faker.image.image(200,300, true), 
    title: "The Kite Runner",
    author: "Khaled Hosseini",
  },
]
const App = () => {
  return(
  <div>
    {BookList.map((Books) => {
      return(
      <BookDetail
        ImageSource = {Books.ImageSource}
        author = {Books.author}
        title = {Books.title}
      />
    )})}
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
