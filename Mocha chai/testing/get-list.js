const domain = require("supertest")("http://barru.pythonanywhere.com");
const expect = require("chai").expect;

describe("Scenario List User Feature", function () {
  it("1. Verifying Success Get List User by ID", async function () { 
    const id = "1";

    const response = await domain 
      .get("/list-user")
      .query({id})
      
    expect(response.body.status).to.eql('SUCCESS_USER_LIST');
    expect(response.body.message).to.eql('List of registered users');
    expect(response.body).to.include.keys("data", "message", "pagination", "status"); 
  });

  it("2. Verifying Success Get List User by email", async function () { 
    const email = "boladunia4@gmail.com";

    const response = await domain 
      .get("/list-user")
      .query({email})
      
    expect(response.body.status).to.eql('SUCCESS_USER_LIST');
    expect(response.body.message).to.eql('List of registered users');
    expect(response.body).to.include.keys("data", "message", "pagination", "status"); 
  });

  it("3. Verifying Success Get List User by username", async function () { 
    const username = "bang ganteng";

    const response = await domain 
      .get("/list-user")
      .query({username})
      
    expect(response.body.status).to.eql('SUCCESS_USER_LIST');
    expect(response.body.message).to.eql('List of registered users');
    expect(response.body).to.include.keys("data", "message", "pagination", "status"); 
  });
  
  it("4. Verifying Success Get List User by page", async function () { 
    const page = "1";

    const response = await domain 
      .get("/list-user")
      .query({page})
      
    expect(response.body.status).to.eql('SUCCESS_USER_LIST');
    expect(response.body.message).to.eql('List of registered users');
    expect(response.body).to.include.keys("data", "message", "pagination", "status"); 
  });

  it.only("5. Verifying Success Get List User email", async function () { 
    const email = "";

    const response = await domain 
      .get("/list-user")
      .query({email})
      
    expect(response.body.status).to.eql('SUCCESS_USER_LIST');
    expect(response.body.message).to.eql('List of registered users');
    expect(response.body).to.include.keys("data", "message", "pagination", "status"); 
  });
});