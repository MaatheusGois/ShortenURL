const put = {
  tags: ["ShortenURL"],
  description: "Uptade the shortened",
  operationId: "putShortenById",
  consumes: ["application/json"],
  produces: ["application/json"],

  parameters: [
    {
      name: "id",
      in: "query",
      required: true,
      description: "ID of user that we want to find",
      type: "string",
    }
  ],
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
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    "200": {
      description: "Put one Shorten",
      content: {
        "application/json": {
          schema: {
            $ref: "#/definitions/AnswerOne"
          },
        },
      },
    },
  },
};

module.exports = {
  put,
};
