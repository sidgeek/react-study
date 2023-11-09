const Koa = require("koa");
const cors = require("koa2-cors");
const Router = require("koa-router");

const { stsConfig, sigConfig } = require("./config");
const generateSTSToken = require("./generateSTSToken");
const generateSignature = require("./generateSignature");

const app = new Koa();
app.use(cors());

let home = new Router();
home.get("sts", async (ctx) => {
  const res = await generateSTSToken(stsConfig);
  ctx.body = res;
});

home.get("oss", async (ctx) => {
  const res = await generateSignature(sigConfig);
  ctx.body = res;
});

// 装载所有子路由
let router = new Router();
router.use("/", home.routes(), home.allowedMethods());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
