const create = {
  tags: ["ShortenURL"],
  summary: "Create a shorten url",
  description: "",
  operationId: "createShorten",
  consumes: ["application/json"],
  produces: ["application/json"],
  requestBody: {
    description: "Shorten with new values of properties",
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/definitions/ShortenPost",
        },
      },
    },
  },
  responses: {
    "200": {
      description: "Return the Shorten created",
      content: {
        "application/json": {
          schema: {
            $ref: "#/definitions/AnswerOne",
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

module.exports = {
  create,
};
