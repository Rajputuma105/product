const controller = require("./controllers/productController");
module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/addProduct", controller.addProduct);
  app.get("/getTodayproducts", controller.getTodayProduct);
  //app.post("/getTopSellProducts", controller.getTopProduct);
  app.post("/getTopSellProducts", controller.getAllProduct);
};
