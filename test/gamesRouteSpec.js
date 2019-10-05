const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const { request, expect } = chai;

describe("games route", () => {

    describe("GET /games", () => {
        it("should return a list games", () => {
            request(app)
                .get('/games')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    const games = res.body.games;
                    expect(games).to.exist;
                    expect(games.length).to.be.greaterThan(0);

                    games.forEach( game => {
                        expect(game.year).to.exist;
                        expect(game.name).to.exist;
                    });
                });
        });
    });

    describe("GET /games/<year>", () => {

    });


});

// {
//     games: [
//         {
//             year: 2019,
//             name: "Deep Space"
//         }
//     ]
// }
//
// [
//     {
//         year: 2019,
//         name: "Deep Space"
//     }
// ]