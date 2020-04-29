const readAll = {
  tags: ["ShortenURL"],
  description: "Returns all shortens",
  operationId: "readAll",
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    "200": {
      description: "A list of Shortens",
      content: {
        "application/json": {
          schema: {
            $ref: "#/definitions/AnswerAll"
          },
        },
      },
    },
  },
};

module.exports = {
  readAll,
};
