const request = require("request");
const data = require('../data/booksteam.json');
const url = 'http://localhost:3022';

describe("Books Test", function () {
    
    describe("GET classb/books", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/books', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });

    //test for wrong path and expect 404
    describe("GET classb/boooks", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(url + '/classb/boook', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET classb/books/team", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/books/team', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toBe(data);
                done();
            });
        });
    });
});
