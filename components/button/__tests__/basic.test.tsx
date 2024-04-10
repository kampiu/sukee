import { render } from "@testing-library/react"
import React from "react"
import Button from ".."

describe("Dummy test", () => {
	it("works if true is truthy", () => {
		expect(true).toBeTruthy()
	})

	it("按钮测试", () => {
		// eslint-disable-next-line react/jsx-filename-extension
		const { container } = render(<Button>Follow</Button>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
