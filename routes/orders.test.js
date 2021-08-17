const app = require('../server') 
const supertest = require('supertest')
const request = supertest(app)


it("GET /states - success", async () => {
    const { body } = await request.get("/orders"); //initially should return a blank array
    expect(body).toEqual([
     
    ]);
});


