const request = require("request");

const base_url = 'http://localhost:3021/classA/';

const mockResponseBikesDurham = [
    {
        "name": "Mamba Sport 12\" Balance Bike",
        "brand": "Mamba Bikes",
        "color": "black",
        "price": 75.88 * 0.08
    },
    {
        "name": "DJ Fat Bike 500W",
        "brand": "DJ Bikes",
        "color": "grey",
        "price": 1599.86 * 0.08
    },
    {
        "name": "Kobe Aluminum Balance",
        "brand": "Kobe",
        "color": "blue",
        "price": 88.56 * 0.08
    },
    {
        "name": "Pomona Men's Cruiser Bike",
        "brand": "Northwoods",
        "color": "silver",
        "price": 221.36 * 0.08
    }
];
const mockResponseFoodDurham = [
    {
        "name": "The Original Sandwich",
        "brand": "Oreo",
        "weight": "303g",
        "calories": 405,
        "price": 2.85 * 0.08
    },
    {
        "name": "Peanut Butter",
        "brand": "KRAFT",
        "weight": "2000g",
        "calories": 726,
        "price": 9.39 * 0.08
    },
    {
        "name": "Beef Ravioli",
        "brand": "Chef Boyardee",
        "weight": "425g",
        "calories": 250,
        "price": 2.45 * 0.08
    },
    {
        "name": "Medium Cheddar Cheese",
        "brand": "MOON CHEESE",
        "weight": "57g",
        "calories": 525,
        "price": 5.87 * 0.08
    }
];
const mockResponseToysDurham = [
    {
        "name": "Medical Kit",
        "brand": "Fisher-Price",
        "age-group": "3 to 9",
        "prize": 20.41 * 0.08
    },
    {
        "name": "Ferry Boat",
        "brand": "Green Toys",
        "age-group": "3 to 6",
        "prize": 13.26 * 0.08
    },
    {
        "name": "Rock-a-Stack",
        "brand": "Fisher-Price",
        "age-group": "1 to 5",
        "prize": 5.99 * 0.08
    },
    {
        "name": "Stack Up Cups",
        "brand": "The First Years",
        "age-group": "0 to 3",
        "prize": 3.99 * 0.08
    }
];

const mockResponseBikesRaleigh = [
    {
        "name": "Mamba Sport 12\" Balance Bike",
        "brand": "Mamba Bikes",
        "color": "black",
        "price": 75.88 * 0.075
    },
    {
        "name": "DJ Fat Bike 500W",
        "brand": "DJ Bikes",
        "color": "grey",
        "price": 1599.86 * 0.075
    },
    {
        "name": "Kobe Aluminum Balance",
        "brand": "Kobe",
        "color": "blue",
        "price": 88.56 * 0.075
    },
    {
        "name": "Pomona Men's Cruiser Bike",
        "brand": "Northwoods",
        "color": "silver",
        "price": 221.36 * 0.075
    }
];
const mockResponseFoodRaleigh = [
    {
        "name": "The Original Sandwich",
        "brand": "Oreo",
        "weight": "303g",
        "calories": 405,
        "price": 2.85 * 0.075
    },
    {
        "name": "Peanut Butter",
        "brand": "KRAFT",
        "weight": "2000g",
        "calories": 726,
        "price": 9.39 * 0.075
    },
    {
        "name": "Beef Ravioli",
        "brand": "Chef Boyardee",
        "weight": "425g",
        "calories": 250,
        "price": 2.45 * 0.075
    },
    {
        "name": "Medium Cheddar Cheese",
        "brand": "MOON CHEESE",
        "weight": "57g",
        "calories": 525,
        "price": 5.87 * 0.075
    }
];
const mockResponseToysRaleigh = [
    {
        "name": "Medical Kit",
        "brand": "Fisher-Price",
        "age-group": "3 to 9",
        "prize": 20.41 * 0.075
    },
    {
        "name": "Ferry Boat",
        "brand": "Green Toys",
        "age-group": "3 to 6",
        "prize": 13.26 * 0.075
    },
    {
        "name": "Rock-a-Stack",
        "brand": "Fisher-Price",
        "age-group": "1 to 5",
        "prize": 5.99 * 0.075
    },
    {
        "name": "Stack Up Cups",
        "brand": "The First Years",
        "age-group": "0 to 3",
        "prize": 3.99 * 0.075
    }
];;

const teamMembersBikes = {
    "team": "Team 1",
    "membersNames": ["Aidan Lee", "Byron Martinez", "Connor Renquin", "Noor Helbaoui"]
}
const teamMembersFood = {
    "team": "Team 3",
    "membersNames": ["Rhea Bhatia", "Tiffany Ngo", "Gary Chen", "Marissa Greise"]
};
const teamMembersToys = {
    "team": "Team 5",
    "memberNames": ["Melissa Parkinson", "Alex Eseyin", "Jacob DiSpirito", "Anjana Rajamani"]
};

describe("Server should", () => {
    describe("GET /:servicename/all/:location", () => {
        it("and return all bikes in durham", (done) => {
            request.get(base_url + 'bikes/all/durham', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(mockResponseBikesDurham));
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
            request.get(base_url + 'bikes/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(mockResponseBikesRaleigh));
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
        it("and return all team members for bikes", (done) => {
            request.get(base_url + 'bikes/team', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain(JSON.stringify(teamMembersBikes));
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