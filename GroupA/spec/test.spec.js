const request = require("request");

const base_url = 'http://localhost:3021/classA/';
// parseFloat(().toFixed(2))
const mockResponseBikesDurham = [
    {
        "name": "Mamba Sport 12\" Balance Bike",
        "brand": "Mamba Bikes",
        "color": "black",
        "price": parseFloat((75.88 + (75.88 * 0.08)).toFixed(2))
    },
    {
        "name": "DJ Fat Bike 500W",
        "brand": "DJ Bikes",
        "color": "grey",
        "price": parseFloat((1599.86 + (1599.86 * 0.08)).toFixed(2))
    },
    {
        "name": "Kobe Aluminum Balance",
        "brand": "Kobe",
        "color": "blue",
        "price": parseFloat((88.56 + (88.56 * 0.08)).toFixed(2))
    },
    {
        "name": "Pomona Men's Cruiser Bike",
        "brand": "Northwoods",
        "color": "silver",
        "price": parseFloat((221.36 + (221.36 * 0.08)).toFixed(2))
    }
];
const mockResponseFoodDurham = [
    {
        "name": "The Original Sandwich",
        "brand": "Oreo",
        "weight": "303g",
        "calories": 405,
        "price": parseFloat((2.85 + (2.85 * 0.08)).toFixed(2))
    },
    {
        "name": "Peanut Butter",
        "brand": "KRAFT",
        "weight": "2000g",
        "calories": 726,
        "price": parseFloat((9.39 + (9.39 * 0.08)).toFixed(2))
    },
    {
        "name": "Beef Ravioli",
        "brand": "Chef Boyardee",
        "weight": "425g",
        "calories": 250,
        "price": parseFloat((2.45 + (2.45 * 0.08)).toFixed(2))
    },
    {
        "name": "Medium Cheddar Cheese",
        "brand": "MOON CHEESE",
        "weight": "57g",
        "calories": 525,
        "price": parseFloat((5.87 + (5.87 * 0.08)).toFixed(2))
    }
];
const mockResponseToysDurham = [
    {
        "name": "Medical Kit",
        "brand": "Fisher-Price",
        "age-group": "3 to 9",
        "prize": parseFloat((20.41 + (20.41 * 0.08)).toFixed(2))
    },
    {
        "name": "Ferry Boat",
        "brand": "Green Toys",
        "age-group": "3 to 6",
        "prize": parseFloat((13.26 + (13.26 * 0.08)).toFixed(2))
    },
    {
        "name": "Rock-a-Stack",
        "brand": "Fisher-Price",
        "age-group": "1 to 5",
        "prize": parseFloat((5.99 + (5.99 * 0.08)).toFixed(2))
    },
    {
        "name": "Stack Up Cups",
        "brand": "The First Years",
        "age-group": "0 to 3",
        "prize": parseFloat((3.99 + (3.99 * 0.08)).toFixed(2))
    }
];

const mockResponseBikesRaleigh = [
    {
        "name": "Mamba Sport 12\" Balance Bike",
        "brand": "Mamba Bikes",
        "color": "black",
        "price": parseFloat((75.88 + (75.88 * 0.075)).toFixed(2))
    },
    {
        "name": "DJ Fat Bike 500W",
        "brand": "DJ Bikes",
        "color": "grey",
        "price": parseFloat((1599.86 + (1599.86 * 0.075)).toFixed(2))
    },
    {
        "name": "Kobe Aluminum Balance",
        "brand": "Kobe",
        "color": "blue",
        "price": parseFloat((88.56 + (88.56 * 0.075)).toFixed(2))
    },
    {
        "name": "Pomona Men's Cruiser Bike",
        "brand": "Northwoods",
        "color": "silver",
        "price": parseFloat((221.36 + (221.36 * 0.075)).toFixed(2))
    }
];
const mockResponseFoodRaleigh = [
    {
        "name": "The Original Sandwich",
        "brand": "Oreo",
        "weight": "303g",
        "calories": 405,
        "price": parseFloat((2.85 + (2.85 * 0.075)).toFixed(2))
    },
    {
        "name": "Peanut Butter",
        "brand": "KRAFT",
        "weight": "2000g",
        "calories": 726,
        "price": parseFloat((9.39 + (9.39 * 0.075)).toFixed(2))
    },
    {
        "name": "Beef Ravioli",
        "brand": "Chef Boyardee",
        "weight": "425g",
        "calories": 250,
        "price": parseFloat((2.45 + (2.45 * 0.075)).toFixed(2))
    },
    {
        "name": "Medium Cheddar Cheese",
        "brand": "MOON CHEESE",
        "weight": "57g",
        "calories": 525,
        "price": parseFloat((5.87 + (5.87 * 0.075)).toFixed(2))
    }
];
const mockResponseToysRaleigh = [
    {
        "name": "Medical Kit",
        "brand": "Fisher-Price",
        "age-group": "3 to 9",
        "prize": parseFloat((20.41 + (20.41 * 0.075)).toFixed(2))
    },
    {
        "name": "Ferry Boat",
        "brand": "Green Toys",
        "age-group": "3 to 6",
        "prize": parseFloat((13.26 + (13.26 * 0.075)).toFixed(2))
    },
    {
        "name": "Rock-a-Stack",
        "brand": "Fisher-Price",
        "age-group": "1 to 5",
        "prize": parseFloat((5.99 + (5.99 * 0.075)).toFixed(2))
    },
    {
        "name": "Stack Up Cups",
        "brand": "The First Years",
        "age-group": "0 to 3",
        "prize": parseFloat((3.99 + (3.99 * 0.075)).toFixed(2))
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
                let bodyObj = JSON.parse(body);
                expect(bodyObj[0].name).toEqual(mockResponseBikesDurham[0].name);
                expect(bodyObj[0].brand).toEqual(mockResponseBikesDurham[0].brand);
                expect(bodyObj[0].color).toEqual(mockResponseBikesDurham[0].color);
                expect(bodyObj[0].price).toEqual(mockResponseBikesDurham[0].price);
                done();
            });
        });

        it("and return all foods in durham", (done) => {
            request.get(base_url + 'food/all/durham', (error, response, body) => {
                expect(body).toBeTruthy();
                let bodyObj = JSON.parse(body);
                expect(bodyObj[0].name).toEqual(mockResponseFoodDurham[0].name);
                expect(bodyObj[0].brand).toEqual(mockResponseFoodDurham[0].brand);
                expect(bodyObj[0].weight).toEqual(mockResponseFoodDurham[0].weight);
                expect(bodyObj[0].calories).toEqual(mockResponseFoodDurham[0].calories);
                expect(bodyObj[0].price).toEqual(mockResponseFoodDurham[0].price);
                done();
            });
        });

        it("and return all toys in durham", (done) => {
            request.get(base_url + 'toys/all/durham', (error, response, body) => {
                expect(body).toBeTruthy();
                let bodyObj = JSON.parse(body);
                expect(bodyObj[0].name).toEqual(mockResponseToysDurham[0].name);
                expect(bodyObj[0].brand).toEqual(mockResponseToysDurham[0].brand);
                expect(bodyObj[0].color).toEqual(mockResponseToysDurham[0].color);
                expect(bodyObj[0].price).toEqual(mockResponseToysDurham[0].price);
                done();
            });
        });

        it("and return all bikes in raleigh", (done) => {
            request.get(base_url + 'bikes/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                let bodyObj = JSON.parse(body);
                expect(bodyObj[0].name).toEqual(mockResponseBikesRaleigh[0].name);
                done();
            });
        });

        it("and return all foods in raleigh", (done) => {
            request.get(base_url + 'food/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                let bodyObj = JSON.parse(body);
                expect(bodyObj[0].name).toEqual(mockResponseFoodRaleigh[0].name);
                done();
            });
        });

        it("and return all toys in raleigh", (done) => {
            request.get(base_url + 'toys/all/raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                let bodyObj = JSON.parse(body);
                expect(bodyObj[0].name).toEqual(mockResponseToysRaleigh[0].name);
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