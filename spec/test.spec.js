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

    describe("GET /:servicename/all/:location", () => {
        it("and return all bikes in durham", (done) => {
            request.get(base_url + 'bike/all/durham', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("");
                done();
            });
        });

        it("and return all foods in durham", (done) => {
            request.get(base_url + 'food/all/durham', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("");
                done();
            });
        });

        it("and return all toys in durham", (done) => {
            request.get(base_url + 'toys/all/durham', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("");
                done();
            });
        });

        it("and return all bikes in raleigh", (done) => {
            request.get(base_url + 'bike/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("");
                done();
            });
        });

        it("and return all fgoods in raleigh", (done) => {
            request.get(base_url + 'food/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("");
                done();
            });
        });

        it("and return all toys in raleigh", (done) => {
            request.get(base_url + 'toys/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("");
                done();
            });
        });

        it("and returns 404 for invalid service", (done) => {
            request.get(base_url + 'apartments/all/raleigh', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
        
        it("and returns 404 for invalid city", (done) => {
            request.get(base_url + 'toys/all/ashville', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET /servicename/team", () => {
        it("and return <b>My</b> first express http server", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("<b>My</b> first express http server");
                done();
            });
        });
    });

});