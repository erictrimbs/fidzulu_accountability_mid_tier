const request = require("request");
const url = 'http://localhost:3022';

describe("Books Test", function () {
    
    describe("GET classb/books/all/raleigh", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/books/all/raleigh', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain("Title")
                expect(response.body).toContain("Author")
                expect(response.body).toContain("price")
                expect(response.body).toContain("ISBN")
                expect(response.body).toContain("publisher")
                done();
            });
        });
    });

    //test for wrong path and expect 404
    describe("GET classb/boooks/all/raleigh", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(url + '/classb/boook/all/raleigh', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET classb/books/all/durham", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/books/all/durham', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain("Title")
                expect(response.body).toContain("Author")
                expect(response.body).toContain("price")
                expect(response.body).toContain("ISBN")
                expect(response.body).toContain("publisher")
                done();
            });
        });
    });

    //test for wrong path and expect 404
    describe("GET classb/boooks/all/durham", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(url + '/classb/boook/all/durham', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET classb/books/team", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/books/team', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain("Team 1");
                done();
            });
        });
    });
});
