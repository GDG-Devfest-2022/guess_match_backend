"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const socket_io_adapters_1 = require("./adapters/socket-io.adapters");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useWebSocketAdapter(new socket_io_adapters_1.SocketIoAdapter(app));
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map