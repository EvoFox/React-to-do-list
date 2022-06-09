import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Header tests", () => {
	test("renders title header", () => {
		render(<App />);
		const headerElement = screen.getByText(/time to do/i);
		expect(headerElement).toBeInTheDocument();
	});
	test("renders logo header", () => {
		render(<App />);
		const headerElement = screen.getByText("00:00");
		expect(headerElement).toBeInTheDocument();
	});
});
