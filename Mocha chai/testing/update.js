const domain = require("supertest")("http://barru.pythonanywhere.com");
const expect = require("chai").expect;

describe("Scenario Update Profile Feature", function () {
  it("1. Verifying Success Update Name Profile", async function () {     
    const responseLogin = await domain 
      .post("/login")
      .send({ email: "boladunia3@gmail.com", password: "coba" });
    
    const authToken = responseLogin.body.credentials.access_token;    
    const response = await domain 
      .put("/update-profile")
      .set("Authorization", `${authToken}`)
      .send({name: "saiful"})
    
    expect(response.body).to.include.keys("data", "message", "status");  
    expect(response.body.data).to.eql('Username Anda menjadi saiful');
    expect(response.body.message).to.eql('Berhasil Perbarui Profile');
    expect(response.body.status).to.eql('SUCCESS_UPDATE_PROFILE')
  });

  it("2. Verifying Success Update Password Profile", async function () {     
    const responseLogin = await domain 
      .post("/login")
      .send({ email: "jokotampan900@gmail.com", password: "jokotampan900" });
    
    const authToken = responseLogin.body.credentials.access_token;    
    const response = await domain 
      .put("/update-profile")
      .set("Authorization", `${authToken}`)
      .send({name: "argavi"})
    
    expect(response.body).to.include.keys("data", "message", "status");  
    expect(response.body.data).to.eql('Username Anda menjadi argavi');
    expect(response.body.message).to.eql('Berhasil Perbarui Profile');
    expect(response.body.status).to.eql('SUCCESS_UPDATE_PROFILE')
  });

  it("3. Failed Update Profile with Unregistered Email", async function () {     
    const responseLogin = await domain 
      .post("/login")
      .send({ email: "kukukukukuk@gmail.com", password: "jogjakota" });
    
    const authToken = responseLogin.body.credentials.access_token;    
    const response = await domain 
      .put("/update-profile")
      .set("Authorization", `${authToken}`)
      .send({name: "yusuf"})
    
    expect(response.body).to.include.keys("data", "message", "status");  
    expect(response.body.data).to.eql('Username Anda menjadi argavi');
    expect(response.body.message).to.eql('Berhasil Perbarui Profile');
    expect(response.body.status).to.eql('SUCCESS_UPDATE_PROFILE')
  });
});