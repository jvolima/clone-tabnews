import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET /api/v1/status", () => {
  describe("Anonymous user", () => {
    test("Retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");

      expect(response.status).toBe(200);

      const responseBody = await response.json();
      expect(responseBody).toMatchObject({
        updated_at: expect.any(String),
        dependencies: {
          database: {
            version: expect.any(String),
            max_connections: expect.any(Number),
            opened_connections: expect.any(Number),
          },
        },
      });

      const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
      expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

      expect(responseBody.dependencies.database.version).toEqual("16.0");
      expect(responseBody.dependencies.database.max_connections).toEqual(100);
      expect(
        responseBody.dependencies.database.max_connections,
      ).toBeGreaterThanOrEqual(
        responseBody.dependencies.database.opened_connections,
      );
      expect(responseBody.dependencies.database.opened_connections).toEqual(1);
    });
  });
});
