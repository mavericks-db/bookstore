import React from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';
// import AddBook from './AddBook';

function Home() {
  return (
    <>
      <Header />
      <BookList />
      {/* <AddBook /> */}
    </>
  );
}

export default Home;
