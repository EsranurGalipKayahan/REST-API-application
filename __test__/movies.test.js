import app from "../app.js";
import supertest from "supertest";
import {
  BAD_REQUEST_CODE,
  BAD_REQUEST_MESSAGE,
  NOT_FOUND_CODE,
  PATH_ERROR_MESSAGE,
  SUCCESSFUL_OPERATION_CODE,
} from "../sources/constants.js";

const request = supertest(app);

describe("GET /movie", function () {
  describe("if path is valid", function () {
    test("should respond with a status code of 200 and json ", async () => {
      const response = await request.get("/movie").send();
      expect(response.statusCode).toBe(SUCCESSFUL_OPERATION_CODE);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
  describe("if path is invalid", function () {
    test("should respond with a status code of 404 and json ", async () => {
      const response = await request.get("/m").send();
      expect(response.statusCode).toBe(NOT_FOUND_CODE);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
describe("GET /movie/:id", function () {
  describe("if path is invalid", function () {
    test("should respond with a status code of 404 and json ", async () => {
      const response = await request.get("/movies/1").send();
      expect(response.statusCode).toBe(NOT_FOUND_CODE);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
  describe("if id is valid", function () {
    test("should respond with a status code of 200 and json ", async () => {
      const response = await request.get("/movie/1").send();
      expect(response.statusCode).toBe(SUCCESSFUL_OPERATION_CODE);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
  describe("if id is invalid", function () {
    test("should respond with a status code of 404 and json ", async () => {
      const response = await request.get("/movie/_._").send();
      expect(response.statusCode).toBe(NOT_FOUND_CODE);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});
describe("POST /movie", () => {
  describe("if missing data received from the client", () => {
    describe("if no data received from the client", () => {
      test("should respond with a status code of 400 and an error message", async () => {
        const bodyData = {};
        const response = await request.post("/movie").send(bodyData);
        expect(response.statusCode).toBe(BAD_REQUEST_CODE);
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
        expect(response.body.msg).toEqual(BAD_REQUEST_MESSAGE);
      });
    });
    describe("if title missing", () => {
      test("should respond with a status code of 400 and an error message", async () => {
        const bodyData = { director: "Esranur", released_date: "2021-10-04" };
        const response = await request.post("/movie").send(bodyData);
        expect(response.statusCode).toBe(BAD_REQUEST_CODE);
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
        expect(response.body.msg).toEqual(BAD_REQUEST_MESSAGE);
      });
    });
    describe("if director missing", () => {
      test("should respond with a status code of 400 and an error message", async () => {
        const bodyData = {
          title: "Fighting with Node.js",
          released_date: "2021-10-04",
        };
        const response = await request.post("/movie").send(bodyData);
        expect(response.statusCode).toBe(BAD_REQUEST_CODE);
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
        expect(response.body.msg).toEqual(BAD_REQUEST_MESSAGE);
      });
    });
    describe("if release date missing", () => {
      test("should respond with a status code of 400 and an error message", async () => {
        const bodyData = {
          title: "Fighting with Node.js",
          director: "Esranur",
        };
        const response = await request.post("/movie").send(bodyData);
        expect(response.statusCode).toBe(BAD_REQUEST_CODE);
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
        expect(response.body.msg).toEqual(BAD_REQUEST_MESSAGE);
      });
    });
  });

  describe("if required data received from the client", () => {
    test("should respond with a status code of 200", async () => {
      const bodyData = {
        title: "Fighting with Node.js",
        director: "Esranur",
        release_date: "2021-10-04",
      };
      const response = await request.post("/movie").send(bodyData);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(response.statusCode).toBe(SUCCESSFUL_OPERATION_CODE);
    });
  });
  describe("if the invalid path for post", () => {
    test("should respond with a status code of 404", async () => {
      const bodyData = {
        title: "Fighting with Node.js",
        director: "Esranur",
        release_date: "2021-10-04",
      };
      const response = await request.post("/move").send(bodyData);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(response.statusCode).toBe(NOT_FOUND_CODE);
    });
  });
});
describe("DELETE /movie/:id", () => {
  describe("if the path is wrong ", () => {
    test("should respond with a status code of 404 and an error message", async () => {
      const response = await request.delete("/movie").send();
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(response.statusCode).toBe(NOT_FOUND_CODE);
      expect(response.body.msg).toEqual(PATH_ERROR_MESSAGE);
    });
  });
  describe("If id is invalid", () => {
    test("should respond with a status code of 404", async () => {
      const response = await request.delete("/movie/_._").send();
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(response.statusCode).toBe(NOT_FOUND_CODE);
    });
  });
  describe("If id is valid", () => {
    test("should respond with a status code of 200", async () => {
      const response = await request.delete("/movie/1").send();
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(response.statusCode).toBe(SUCCESSFUL_OPERATION_CODE);
    });
  });
});
