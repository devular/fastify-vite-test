import Fastify from "fastify";
import FastifyVite from "fastify-vite";
import renderer from "fastify-vite-react";

const root = import.meta.url;
const app = Fastify({ logger: true });

await app.register(FastifyVite, { root, renderer });
await app.vite.commands();
await app.listen(3000);
