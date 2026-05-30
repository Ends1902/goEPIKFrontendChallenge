import { useEffect, useState } from "react";
import api from "./services/api";
import type { Book } from "./types/Book";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import { SearchBar } from "./components/SearchBar";
import "./App.css";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  async function loadBooks() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/books");

      setBooks(response.data);
    } catch (err) {
      const errorMessage =
        err instanceof globalThis.Error
          ? err.message
          : "Falha ao conectar ao servidor. Verifique se a API está rodando.";

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  async function createBook(book: {
    title: string;
    author: string;
    year: string;
  }) {
    try {
      setError("");

      await api.post("/books", {
        title: book.title,
        author: book.author,
        year: Number(book.year),
      });

      await loadBooks();
    } catch (err) {
      const errorMessage =
        err instanceof globalThis.Error
          ? `Erro ao cadastrar: ${err.message}`
          : "Erro ao cadastrar livro. Verifique a API.";

      setError(errorMessage);
    }
  }

  async function deleteBook(id: string) {
    try {
      setError("");

      await api.delete(`/books/${id}`);

      await loadBooks();
    } catch (err) {
      const errorMessage =
        err instanceof globalThis.Error
          ? `Erro ao excluir: ${err.message}`
          : "Erro ao excluir livro.";

      setError(errorMessage);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedBooks = [...filteredBooks].sort((a, b) =>
    order === "asc" ? a.year - b.year : b.year - a.year
  );

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header-content">
            <h1 className="title">📚 Biblioteca</h1>
            <p className="subtitle">
              Organize sua coleção de livros
            </p>
          </div>
        </header>

        {error && (
          <Error
            message={error}
            onClose={() => setError("")}
          />
        )}

        <section className="form-section">
          <h2>Adicionar Novo Livro</h2>

          <BookForm onSubmit={createBook} />
        </section>

        <section className="search-section">
          <SearchBar
            search={search}
            onSearchChange={setSearch}
            order={order}
            onOrderChange={() =>
              setOrder(
                order === "asc"
                  ? "desc"
                  : "asc"
              )
            }
          />
        </section>

        <section className="books-section">
          {loading ? (
            <Loading />
          ) : (
            <>
              {search && (
                <div className="results-info">
                  <p>
                    Encontrados{" "}
                    <strong>
                      {sortedBooks.length}
                    </strong>{" "}
                    livro
                    {sortedBooks.length !== 1
                      ? "s"
                      : ""}
                  </p>
                </div>
              )}

              <BookList
                books={sortedBooks}
                onDelete={deleteBook}
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;