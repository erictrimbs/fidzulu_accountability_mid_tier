const request = require("request");
const url = 'http://localhost:3022';

describe("Laptops Test", function () {
    
    describe("GET classb/laptops/all/raleigh", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/laptops/all/raleigh', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain("product");
                expect(response.body).toContain("brand");
                expect(response.body).toContain("CPU");
                expect(response.body).toContain("memory");
                expect(response.body).toContain("price");
                done();
            });
        });
    });

    //test for wrong path and expect 404
    describe("GET classb/laaptops/all/raleigh", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(url +'/classb/laaptops/all/raleigh', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET classb/laptops/all/durham", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/laptops/all/durham', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain("product");
                expect(response.body).toContain("brand");
                expect(response.body).toContain("CPU");
                expect(response.body).toContain("memory");
                expect(response.body).toContain("price");
                done();
            });
        });
    });

    //test for wrong path and expect 404
    describe("GET classb/laaptops/all/durham", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(url +'/classb/laaptops/all/durham', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET classb/laptops/team", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/laptops/team', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toContain("Team 5");
                done();
            });
        });
    });
});
