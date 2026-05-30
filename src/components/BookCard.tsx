import type { Book } from "../types/Book";

interface BookCardProps {
  book: Book;
  onDelete: (id: string) => void;
}

export function BookCard({ book, onDelete }: BookCardProps) {
  return (
    <div className="book-card">
      <div className="book-card-header">
        <h3 className="book-title">{book.title}</h3>
      </div>
      <div className="book-card-body">
        <p className="book-author">
          <strong>Autor:</strong> {book.author}
        </p>
        <p className="book-year">
          <strong>Ano:</strong> {book.year}
        </p>
      </div>
      <div className="book-card-footer">
        <button
          className="btn-delete"
          onClick={() => onDelete(book.id)}
          title="Deletar livro"
        >
          🗑️ Deletar
        </button>
      </div>
    </div>
  );
}
