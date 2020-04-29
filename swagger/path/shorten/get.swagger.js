const readByID = {
  parameters: [
    {
      name: "id",
      in: "query",
      required: true,
      description: "ID of shorten that we want",
      type: "string",
    },
  ],
  tags: ["ShortenURL"],
  description: "Return shorten",
  operationId: "getShortenById",
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    "200": {
      description: "Get one Shorten",
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
  readByID,
};
