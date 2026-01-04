import swaggerJsDoc from 'swagger-jsdoc';

const options: swaggerJsDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'TS Backend API',
            version: '1.0.0',
            description: 'API documentation for TS Backend project',
        },
        servers: [{url : 'http://localhost:3000'}],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [{bearerAuth: []}]
    },
    apis: ['./src/routes/*.ts', './src/models/*.ts'],
};

export const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;
