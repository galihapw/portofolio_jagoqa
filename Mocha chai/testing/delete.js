const domain = require("supertest")("http://barru.pythonanywhere.com");
const expect = require("chai").expect;

describe("Scenario Delete Profile Feature", function () {
  it("1. Verifying Success Delete Profile", async function () {     
    const responseLogin = await domain 
      .post("/login")
      .send({ email: "jokotampan900@gmail.com", password: "jokotampan900" });
    
    const authToken = responseLogin.body.credentials.access_token;    
    const response = await domain 
      .delete("/delete-user")
      .set("Authorization", `${authToken}`)
      .send({password: "jokotampan900"})
    
    expect(response.body).to.include.keys("data", "message", "status");  
    expect(response.body.data).to.eql('Sedih melihatmu pergi argavi');
    expect(response.body.message).to.eql('Berhasil Hapus User');
    expect(response.body.status).to.eql('SUCCESS_DELETE_PROFILE')
  }).timeout(10000);
});