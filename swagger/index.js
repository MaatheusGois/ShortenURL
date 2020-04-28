//https://levelup.gitconnected.com/the-simplest-way-to-add-swagger-to-a-node-js-project-c2a4aa895a3c
const { readAll } = require("./path");

const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "APIs DNS",
    description: "your description here",
    termsOfService: "",
    contact: {
      name: "Matheus Gois de Lima Silva",
      email: "matheusgoislimasilva@gmail.com",
      url: "http://br-micro-service-dns.herokuapp.com",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1",
      description: "Local server",
    },
    {
      url: "http://br-micro-service-dns.herokuapp.com/api/v1",
      description: "DEV Env",
    },
  ],
  components: {
    schemas: {},
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  tags: [
    {
      name: "ShortenURL",
    },
  ],
  paths: {
    "/readAll": {
      get: readAll,
    },
  },
};
module.exports = {
  swaggerDocument,
};
