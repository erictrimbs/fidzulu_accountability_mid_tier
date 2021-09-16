const request = require("request");
const url = 'http://localhost:3022';

describe("DVDS Test", function () {
    
    describe("GET classb/dvds", () => {
        it ("returns status code 200", (done) => {
            request.get(url + '/classb/dvds', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });

    //test for wrong path and expect 404
    describe("GET classb/dvvds", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(url + '/classb/dvvds', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});
