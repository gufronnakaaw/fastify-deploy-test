const fastify = require('fastify')({ logger: false });
const port = 4000;

const options = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    success: {
                        type: 'boolean',
                    },
                    message: {
                        type: 'string',
                    },
                },
            },
        },
    },
};

fastify.get('/', options, (req, reply) => {
    reply.send({ success: true, message: 'hello world' });
});

fastify.get('/api', (req, reply) => {
    reply.send({
        success: true,
        message: 'Welcome to fastify REST API',
        purpose: 'for deploy test',
    });
});

async function start() {
    try {
        await fastify.listen({ port });
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();
