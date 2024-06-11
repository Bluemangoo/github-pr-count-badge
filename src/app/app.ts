import VCLight, { RawVercelRequest, VCLightRequest, VCLightResponse } from "vclight";
import router from "./router";
import "./initRouter";

const app = new VCLight();
app.use({
    async post(request: VCLightRequest, response: VCLightResponse, app: VCLight) {
        if (request.rawRequest instanceof RawVercelRequest) {
            request.rawRequest.response.setHeader("Vercel-CDN-Cache-Control", "max-age=600");
        }
    },
    async process(request: VCLightRequest, response: VCLightResponse, app: VCLight) {}
});
app.use(router);
export default app;
