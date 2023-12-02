const domain = require("supertest")("http://barru.pythonanywhere.com");
const expect = require("chai").expect;

describe("Scenario Register Feature", function () {
    it("1. Verfying Success Register With Valid Email and Password", async function () {
        const response = await domain
            .post("/register")
            .send({ email: "boladunia3@gmail.com", password: "coba", name:"boldun" });

        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('SUCCESS_REGISTER');
        expect(response.body.data).to.eql('berhasil');
        expect(response.body.message).to.eql('created user!');
    }).timeout(10000);

    it("2. verfying Succes Register With Random Email, Password and Name", async function () {
        let random_email = Math.random().toString(36).substring(7);

        const response = await domain
            .post("/register")
            .send({ email: random_email + "@gmail.com", password: random_email, name: random_email});

        console.log(response.random_email, response.body);

        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('SUCCESS_REGISTER');
        expect(response.body.data).to.eql('berhasil');
        expect(response.body.message).to.eql('created user!');

    }).timeout(10000);

    it("3. verfying Succes Register With Random Email, valid Password and Name", async function () {
        let random_email = Math.random().toString(36).substring(7);

        const response = await domain
            .post("/register")
            .send({ email: random_email + "@gmail.com", password: "jojo", name: "jojo tampan"});

        console.log(response.random_email, response.body);

        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('SUCCESS_REGISTER');
        expect(response.body.data).to.eql('berhasil');
        expect(response.body.message).to.eql('created user!');

    }).timeout(10000);

    it("4. verfying Succes Register With Random Email and Name, and Valid Password", async function () {
        let random_email = Math.random().toString(36).substring(7);

        const response = await domain
            .post("/register")
            .send({ email: random_email + "@gmail.com", password: "kurcaci", name: random_email});

        console.log(response.random_email, response.body);

        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('SUCCESS_REGISTER');
        expect(response.body.data).to.eql('berhasil');
        expect(response.body.message).to.eql('created user!');

    }).timeout(10000);

    it("5. verfying Succes Register With Random Email and Password, and  Valid Name", async function () {
        let random_email = Math.random().toString(36).substring(7);

        const response = await domain
            .post("/register")
            .send({ email: random_email + "@gmail.com", password: random_email, name: "bang ganteng"});

        console.log(response.random_email, response.body);

        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('SUCCESS_REGISTER');
        expect(response.body.data).to.eql('berhasil');
        expect(response.body.message).to.eql('created user!');

    }).timeout(10000);

    it("6. Verfying Success Register With Valid Email, Random Password and Name", async function () {
        let random_email = Math.random().toString(36).substring(7);

        const response = await domain
            .post("/register")
            .send({ email: "joshua15@gmail.com", password: random_email, name: random_email});

        console.log(response.random_email, response.body);

        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('SUCCESS_REGISTER');
        expect(response.body.data).to.eql('berhasil');
        expect(response.body.message).to.eql('created user!');

    }).timeout(10000);

    it("7. Verifying Failed Register With Invalid Email", async function () {
        const response = await domain
            .post("/register")
            .send({ email: "cobagmail.com", password: "coba", name:"acaca" });
    
        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('FAILED_REGISTER');
        expect(response.body.data).to.eql('Email tidak valid');
        expect(response.body.message).to.eql('Cek kembali email anda');

    }).timeout(10000);

    it("8. Verifying Failed Register With email not filled", async function () {
        const response = await domain
            .post("/register")
            .send({ email: "", password: "coba", name:"jnafja" });
    
        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('FAILED_REGISTER');
        expect(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
        expect(response.body.message).to.eql('Gagal Registrasi');

    }).timeout(10000);

    it("9. Verifying Failed Register With password not filled", async function () {
        const response = await domain
            .post("/register")
            .send({ email: "coba@gmail.com", password: "", name:"afafawaf" });
    
        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('FAILED_REGISTER');
        expect(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
        expect(response.body.message).to.eql('Gagal Registrasi');
        expect(response.statusCode).to.eql(420)

    }).timeout(10000);

    it("10. Verifying Failed Register With name not filled", async function () {
        const response = await domain
            .post("/register")
            .send({ email: "coba@gmail.com", password: "coba", name:"" });
    
        expect(response.body).to.include.keys("data", "message", "status");
        expect(response.body.status).to.eql('FAILED_REGISTER');
        expect(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
        expect(response.body.message).to.eql('Gagal Registrasi');

    }).timeout(10000);
})