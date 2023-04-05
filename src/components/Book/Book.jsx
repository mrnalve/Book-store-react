import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/book/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-300 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-xl">
        <img
          src={book.image}
          alt=""
          className="object-cover w-full h-56 md:h-64 xl:h-80"
        />
        <div className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-30000 flex flex-col">
          <p>{book.title}</p>
          <p className="py-4">{book.subtitle.substring(0, 45)}...</p>
          <p className="mt-auto">Price: {book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
