const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const { request, expect } = chai;

describe("app", () => {

    describe("starting point", () => {
        it("should run tests at all", () => {
            chai.assert(true);
        });
    });

    describe("root route", () => {
        it("should return a default message", () => {
            request(app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.greeting).to.exist;
                    expect(res.body.greeting).to.equal("Welcome to the First ReCon Scouting API");
                    expect(res.get('Access-Control-Allow-Origin')).to.equal('*');
                });
        });
    });

});