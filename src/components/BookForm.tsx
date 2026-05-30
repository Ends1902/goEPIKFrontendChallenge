import { useState } from "react";

interface BookFormProps {
  onSubmit: (book: {
    title: string;
    author: string;
    year: string;
  }) => void;
}

export function BookForm({ onSubmit }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !year.trim()) {
      return;
    }

    onSubmit({ title, author, year });
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título do livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
        required
      />

      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="form-input"
        required
      />

      <input
        type="number"
        placeholder="Ano de publicação"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="form-input"
        required
      />

      <button type="submit" className="btn-primary">
        ➕ Adicionar Livro
      </button>
    </form>
  );
}
