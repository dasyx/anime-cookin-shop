const mongoose = require("mongoose");

module.exports = function (app) {
  mongoose
    .connect("mongodb+srv://animecookinshop:3MEPHk6QLbq2Ss3S@cluster0.ap1uo.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //useFindAndModify: false
    })
    .then((res) => console.log("Base de données connectée !"))
    .catch((err) => console.log(err));
  mongoose.Promise = global.Promise;
  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
  process.on("SIGHUP", cleanup);
  if (app) {
    app.set("mongoose", mongoose);
  }
};
function cleanup() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
}
