const app = require('../server') 
const supertest = require('supertest')
const request = supertest(app)

//test GET
it("GET order Test", async () => {
    const { body } = await request.get("/orders"); //initially should return a blank array
    expect(body).toEqual([
     
    ]);
});

//there is an issue here, I do not get expected pass 
//reason is I should pass data as url encoded 
it("POST order Test", async () => {
    let testObject = {
        itemName: 'sample food',
        orderedBy: 'Alexandar',
        quantity: '10',
        unitPrice:'1.5'
    
    };
    const res = await request.post("/orders").send(testObject);
    expect(res.status).toEqual(200);
  
  });


