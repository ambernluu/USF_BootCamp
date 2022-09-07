process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");
const db = require("../db");
let isbn;

beforeEach(async () => {
    let results = await db.query(`
    INSERT INTO
      books (isbn, amazon_url, author, language, pages, publisher, title, year)
      VALUES(
        '1111111111',
        'https://www.amazon.com/Big-Shot-Diary-Wimpy-Book/dp/1419749153/ref=rtpb_sccl_2/132-0169718-8756266?pd_rd_w=uY2U0&content-id=amzn1.sym.ab907333-063a-4de1-b403-0a312c047f32&pf_rd_p=ab907333-063a-4de1-b403-0a312c047f32&pf_rd_r=W7JRXTE3MBYHH5ZBSD07&pd_rd_wg=NU9h4&pd_rd_r=3c895c01-9ec4-4391-8683-3d019809e9f3&pd_rd_i=1419749153&psc=1',
        'Jeff Kinney',
        'English',
        224,
        'Harry N. Abrams',
        'Big Shot Diary of a Wimpy Kid Book 16',
        2021)
      RETURNING isbn`);

    isbn = results.rows[0].isbn
});

describe("POST /books", function () {
    test("Create new book", async function () {
        const response = await request(app)
            .post(`/books`)
            .send({
                isbn: '1451673310',
                amazon_url: "https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/1451673310/ref=lp_21551016011_1_1",
                author: "Ray Bradbury",
                language: "english",
                pages: 249,
                publisher: "Simon & Schuster",
                title: "Fahrenheit 451",
                year: 2012
            });
        expect(response.statusCode).toBe(201);
        expect(response.body.book).toHaveProperty("isbn");
    });

    test("Books must have author", async function () {
        const response = await request(app)
            .post(`/books`)
            .send({ pages: 1000 });
        expect(response.statusCode).toBe(400);
    });
});

describe("DELETE /books/:id", function () {
    test("Delete book", async function () {
        const response = await request(app)
            .delete(`/books/${isbn}`)
        expect(response.body).toEqual({ message: "Book deleted" });
    });
});

describe("GET /books", function () {
    test("Gets all books", async function () {
        const response = await request(app).get(`/books`);
        const books = response.body.books;
        expect(books[0]).toHaveProperty("language");
        expect(books[0]).toHaveProperty("year");
    });
});

describe("GET /books/:isbn", function () {
    test("Get book by isbn", async function () {
        const response = await request(app)
            .get(`/books/${isbn}`)
        expect(response.body.book).toHaveProperty("isbn");
        expect(response.body.book.isbn).toBe(isbn);
    });

    test("if no book, 404", async function () {
        const response = await request(app)
            .get(`/books/5000`)
        expect(response.statusCode).toBe(404);
    });
});

describe("PUT /books/:id", function () {
    test("Update book", async function () {
        const response = await request(app)
            .put(`/books/${isbn}`)
            .send({
                amazon_url: "https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/1451673310/ref=lp_21551016011_1_1",
                author: "Ray Bradbury",
                language: "english",
                pages: 249,
                publisher: "Simon & Schuster",
                title: "Fahrenheit 451 - updated",
                year: 2012
            });
        expect(response.body.book).toHaveProperty("isbn");
        expect(response.body.book.title).toBe("Fahrenheit 451 - updated");
    });

    test("bad update not allowed", async function () {
        const response = await request(app)
            .put(`/books/${isbn}`)
            .send({
                isbn: "1111111111",
                amazon_url: "google.com",

            });
        expect(response.statusCode).toBe(400);
    });
});

afterEach(async function () {
    await db.query("DELETE FROM BOOKS");
});


afterAll(async function () {
    await db.end()
});
