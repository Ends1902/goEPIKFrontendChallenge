import axios from "axios";
import type { Book } from "../types/Book";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const bookService = {
  async getAll(): Promise<Book[]> {
    const response = await api.get<Book[]>("/books");
    return response.data;
  },

  async create(book: Omit<Book, "id">): Promise<Book> {
    const response = await api.post<Book>(
      "/books",
      book
    );

    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/books/${id}`);
  },
};

export default api;