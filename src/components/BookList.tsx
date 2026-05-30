import type { Book } from "../types/Book";
import { BookCard } from "./BookCard";

interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
}

export function BookList({ books, onDelete }: BookListProps) {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>
        <p>Nenhum livro encontrado</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}
