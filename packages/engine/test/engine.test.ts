import Engine from "../src/engine"

/**
 * Dummy test
 */
describe("Dummy test", () => {
	it("works if true is truthy", () => {
		expect(true).toBeTruthy()
	})

	it("DummyClass is instantiable", () => {
		expect(new Engine()).toBeInstanceOf(Engine)
	})
})
