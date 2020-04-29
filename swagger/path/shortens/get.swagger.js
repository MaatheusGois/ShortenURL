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
            type: "object",
            properties: {
              succcess: {
                type: "boolean",
                description: "s",
              },
              content: {
                type: "array",
                items: {
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
  },
};

module.exports = {
  readAll,
};
