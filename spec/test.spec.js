const request = require("request");

const base_url = 'http://localhost:3021/';

describe("Server should", () => {
    describe("GET /", () => {
        it("and return <b>My</b> first express http server", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("<b>My</b> first express http server");
                done();
            });
        });
    });
});