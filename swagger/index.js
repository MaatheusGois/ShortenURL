//https://levelup.gitconnected.com/the-simplest-way-to-add-swagger-to-a-node-js-project-c2a4aa895a3c
const { readAll, readByID, create, put } = require("./path");

const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "APIs DNS",
    description: "Project for learn more about REST",
    summary: "asd",
    termsOfService: "",
    contact: {
      name: "Gregory Ramires & Matheus Gois",
      url: "http://br-micro-service-shorten.herokuapp.com",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "http://br-micro-service-shorten.herokuapp.com/api/v1",
      description: "Production",
    },
    {
      url: "http://localhost:3000/api/v1",
      description: "Dev",
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
    "/shorten": {
      get: readByID,
      put,
      delete: readByID
    },
    "/shortens": {
      post: create,
      get: readAll,
    },
  },
  definitions: {
    Shorten: {
      required: ["shorten", "url"],
      properties: {
        shorten: {
          type: "string",
          uniqueItems: true,
        },
        url: {
          type: "string",
        },
        clicks: {
          type: "integer",
        },
        data: {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
    },
    ShortenPost: {
      required: ["shorten", "url"],
      properties: {
        shorten: {
          type: "string",
          uniqueItems: true,
        },
        url: {
          type: "string",
        },
      },
    },
    Shortens: {
      type: "array",
      $ref: "#/definitions/Shorten",
    },
    AnswerOne: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        content: {
          $ref: "#/definitions/Shorten",
        },
      },
    },
    AnswerAll: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        content: {
          type: "array",
          items: {
            $ref: "#/definitions/Shorten",
          },
        },
      },
    },
  },
};
module.exports = {
  swaggerDocument,
};
