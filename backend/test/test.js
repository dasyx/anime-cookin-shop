const Article = require("../models/Article");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
chai.should();
 
chai.use(chaiHttp);
 
describe("Articles", () => {
  beforeEach((done) => {
    Article.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET article", () => {
    it("it should GET all the articles", (done) => {
      chai
        .request(app)
        .get("/api/articles")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST article", () => {
    it("it should new POST a article", (done) => {
      let article = {
        name: "This is the first article",
        body: "This is a article post",
        /* image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", */
      };
      chai
        .request(app)
        .post("/api/articles")
        .send(article)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id article", () => {
    it("it should GET a article by the id", (done) => {
      let article = new Article({
        title: "This is the first article",
        body: "This is a article post",
        /* image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", */
      });
      article.save((err, article) => {
        chai
          .request(app)
          .get("/api/articles/" + article.id)
          .send(article)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id article", () => {
    it("it should UPDATE an article given the id", (done) => {
      let article = new Article({
        name: "This is the first article",
        body: "This is an article post",
        /* image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", */
      });
      article.save((err, article) => {
        console.log(article.id);
        chai
          .request(app)
          .put("/api/articles/" + article.id)
          .send({
            name: "The first article was updated",
            body: "This is a article post",
            /* image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", */
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id article", () => {
    it("it should DELETE an article given the id", (done) => {
      let article = new Article({
        name: "This is the first article",
        body: "This is a article post",
        /* image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", */
      });
      article.save((err, article) => {
        chai
          .request(app)
          .delete("/api/articles/" + article.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});