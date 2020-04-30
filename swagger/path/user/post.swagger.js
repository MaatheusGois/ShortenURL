const login = {
    tags: ["User"],
    summary: "Take the token id",
    description: "",
    operationId: "loginShorten",
    consumes: ["application/json"],
    produces: ["application/json"],
    requestBody: {
      description: "Login with user and password",
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/definitions/User",
          },
        },
      },
    },
    responses: {
      "200": {
        description: "Make login",
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/AnswerUser",
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
    login,
  };
  