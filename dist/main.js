"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validate_pipe_1 = require("./core/pipes/validate.pipe");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new validate_pipe_1.ValidateInputPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Boilerplate')
        .setDescription('The NestJS Sequelize Postgres API documentation')
        .setVersion('1.0')
        .addTag('boilerplate')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('backend', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map