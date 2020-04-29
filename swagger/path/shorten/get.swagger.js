const readByID = {
  parameters: [
    {
      name: "id",
      in: "query",
      required: true,
      description: "ID of user that we want to find",
      type: "string",
    },
  ],
  tags: ["ShortenURL"],
  description: "Returns all shortens",
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
            type: "object",
            properties: {
              success: {
                type: "boolean",
                description: "confirm if is result is true or not",
              },
              content: {
                type: "object",
                properties: {
                  _id: {
                    type: "string",
                    description: "Object id",
                  },
                  shorten: {
                    type: "string",
                    description: "Shorten name",
                  },
                  url: {
                    type: "string",
                    description: "Full url shortened",
                  },
                  clicks: {
                    type: "integer",
                    description: "Number of clicks in the shorten url",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = {
  readByID,
};
