const domain = require("supertest")("http://barru.pythonanywhere.com");
const expect = require("chai").expect;

describe("Scenario Login Feature", function () {
  it("1. Verifying Success Login with valid email and password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "jokotampan900@gmail.com", 
            password: "jokotampan900" 
            });
      
    expect(response.body).to.include.keys("data", "message", "status", "credentials"); 
    expect(response.body.status).to.eql('SUCCESS_LOGIN');
    expect(response.body.message).to.eql('Anda Berhasil Login');
  });

  it("2. Verifying Failed Login with valid email and password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "boladunia3@gmailcom", 
            password: "coba" 
            });
      
    expect(response.body).to.include.keys("data", "message", "status"); 
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.message).to.eql('Cek kembali email anda');
  });

  it("3. Verifying Failed Login with invalid email and invalid password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "jokotampan900@gmail.com", 
            password: "jokotampan90                                                                                    0" 
            });
      
    expect(response.body).to.include.keys("data", "message", "status"); 
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.message).to.eql('Email/Password melebihin maksimal karakter');
  });

  it("4. Verifying Failed Login with valid email and wrong password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "jokotampan900@gmail.com", 
            password: "jokotampan900rwra" 
            });
      
    expect(response.body).to.include.keys("data", "message", "status"); 
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.message).to.eql('Email atau Password Anda Salah');
  });

  it("5. Verifying Failed Login with blank email and valid password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "", 
            password: "jokotampan900" 
            });
      
    expect(response.body).to.include.keys("data", "message", "status"); 
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.message).to.eql('Email tidak boleh kosong');
  });

  it("6. Verifying Failed Login with valid email and blank password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "jokotampan900@gmail.com", 
            password: "" 
            });
      
    expect(response.body).to.include.keys("data", "message", "status"); 
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.message).to.eql('Password tidak boleh kosong');
  });

  it("7. Verifying Failed Login with blank email and blank password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "", 
            password: "" 
            });
      
    expect(response.body).to.include.keys("data", "message", "status"); 
    expect(response.body.status).to.eql('FAILED_LOGIN');
    expect(response.body.message).to.eql('Email & Password tidak boleh kosong');
  });
})
