const request = require("request");

const base_url = 'http://localhost:3021/classA/';

// TODO: change to proper response format
const mockResponseBikeDurham = { 'request is': 'valid', 'service name': 'bike', 'location': 'durham' };
const mockResponseFoodDurham = { 'request is': 'valid', 'service name': 'food', 'location': 'durham' };
const mockResponseToysDurham = { 'request is': 'valid', 'service name': 'toys', 'location': 'durham' };

const mockResponseBikeRaleigh = { 'request is': 'valid', 'service name': 'bike', 'location': 'raleigh' };
const mockResponseFoodRaleigh = { 'request is': 'valid', 'service name': 'food', 'location': 'raleigh' };
const mockResponseToysRaleigh = { 'request is': 'valid', 'service name': 'toys', 'location': 'raleigh' };

// TODO: Add correct names to array
const teamMembersBike = { 'team': 'bike', 'membersName': ['string'] }
const teamMembersFood = { 'team': 'food', 'membersName': ['string'] }
const teamMembersToys = { 'team': 'toys', 'membersName': ['string'] }

describe("Server should", () => {
    describe("GET /:servicename/all/:location", () => {
        it("and return all bikes in durham", (done) => {
            request.get(base_url + 'bike/all/durham', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(mockResponseBikeDurham));
                done();
            });
        });

        it("and return all foods in durham", (done) => {
            request.get(base_url + 'food/all/durham', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(mockResponseFoodDurham));
                done();
            });
        });

        it("and return all toys in durham", (done) => {
            request.get(base_url + 'toys/all/durham', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(mockResponseToysDurham));
                done();
            });
        });

        it("and return all bikes in raleigh", (done) => {
            request.get(base_url + 'bike/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(mockResponseBikeRaleigh));
                done();
            });
        });

        it("and return all foods in raleigh", (done) => {
            request.get(base_url + 'food/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(mockResponseFoodRaleigh));
                done();
            });
        });

        it("and return all toys in raleigh", (done) => {
            request.get(base_url + 'toys/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(mockResponseToysRaleigh));
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

    describe("GET /:servicename/team", () => {
        it("and return all team members for bike", (done) => {
            request.get(base_url + 'bike/team', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(teamMembersBike));
                done();
            });
        });

        it("and return all team members for food", (done) => {
            request.get(base_url + 'food/team', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(teamMembersFood));
                done();
            });
        });

        it("and return all team members for toys", (done) => {
            request.get(base_url + 'toys/team', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(teamMembersToys));
                done();
            });
        });
    });

});