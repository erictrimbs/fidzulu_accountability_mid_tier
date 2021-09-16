const request = require("request");
const data = require('../data/laptopsteam.json');
const url = 'http://localhost:3022';

describe("Laptops Test", function () {
    
    describe("GET classb/laptops", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/laptops', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });

    //test for wrong path and expect 404
    describe("GET classb/laaptops", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(url +'/classb/laaptops', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET classb/laptops/team", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/laptops/team', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toBe(data);
                done();
            });
        });
    });
});
