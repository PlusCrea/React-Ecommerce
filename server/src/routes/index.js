import MarkRouter from "./mark.router";
//import ModelRouter from "./model.router";
import AdsRouter from "./ads.router";
import AuthRouter from "./auth.router";
import TodoRouter from "./todo.router";
import TypeRouter from "./type.router";
import categoryRouter from "./category.router";
import productRouter from "./product.router";
import uploadRouter from "./upload.router";
import sliderRouter from "./slider.router";
import pageRouter from "./page.router";
import menuRouter from "./menu.router";
import parametersRouter from "./parameters.router";

const AppRoutes = (app) => {
  app.use(MarkRouter.routePrefix, MarkRouter.route());
  //app.use(ModelRouter.routePrefix, ModelRouter.route());
  app.use(AdsRouter.routePrefix, AdsRouter.route());
  app.use(AuthRouter.routePrefix, AuthRouter.route());
  app.use(TodoRouter.routePrefix, TodoRouter.route());
  app.use(categoryRouter.routePrefix, categoryRouter.route());
  app.use(TypeRouter.routePrefix, TypeRouter.route());
  app.use(productRouter.routePrefix, productRouter.route());
  app.use(uploadRouter.routePrefix, uploadRouter.route());
  app.use(sliderRouter.routePrefix, sliderRouter.route());
  app.use(pageRouter.routePrefix, pageRouter.route());
  app.use(menuRouter.routePrefix, menuRouter.route());
  app.use(parametersRouter.routePrefix, parametersRouter.route());
};

export default AppRoutes;
