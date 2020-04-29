const readAll = {
  tags: ["ShortenURL"],
  summary: "Returns all shortens",
  description: "",
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
