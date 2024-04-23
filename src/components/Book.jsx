/* eslint-disable react/prop-types */
import BookshelfChanger from "./BookshelfChanger";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Book = ({ book, shelf, onMove }) => {
  const { imageLinks, title, authors } = book;

  return (
    <>
      <li>
        <Card sx={{ height: "auto", width: "16rem" }}>
          <CardMedia
            component="img"
            height="140"
            image={
              imageLinks
                ? imageLinks.thumbnail
                : "../icons/book-placeholder.svg"
            }
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "GrayText" }}>
              {authors ? authors.join(", ") : "Unknown Author"}
            </Typography>
            <BookshelfChanger book={book} shelf={shelf} onMove={onMove} />
          </CardContent>
        </Card>
      </li>
    </>
  );
};

export default Book;
