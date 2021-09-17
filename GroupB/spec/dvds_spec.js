const request = require("request");
const url = 'http://localhost:3022';

describe("DVDS Test", function () {
    
    describe("GET classb/dvds/all/raleigh", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/dvds/all/raleigh', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain("title");
                expect(response.body).toContain("mpaa_rating");
                expect(response.body).toContain("studio");
                expect(response.body).toContain("price");
                done();
            });
        });
    });

    //test for wrong path and expect 404
    describe("GET classb/dvvds/all/raleigh", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(url + '/classb/dvvds/all/raleigh', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET classb/dvds/all/durham", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/dvds/all/durham', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain("title");
                expect(response.body).toContain("mpaa_rating");
                expect(response.body).toContain("studio");
                expect(response.body).toContain("price");
                done();
            });
        });
    });

    //test for wrong path and expect 404
    describe("GET classb/dvvds/all/durham", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(url + '/classb/dvvds/all/durham', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET classb/dvds/team", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/dvds/team', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain("Team 3");
                done();
            });
        });
    });
});
