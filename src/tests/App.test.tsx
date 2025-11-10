import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import type { Mock } from "vitest";

describe("Test App js", () => {
  const mockData = [
    { id: 1, title: "Test Todo 1", completed: false },
    { id: 2, title: "Test Todo 2", completed: true },
  ];

  it("Ensure heading is  exist", () => {
    render(<App />);
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
    expect(viteLogo.closest("a")).toHaveAttribute("href", "https://vite.dev");
    expect(reactLogo.closest("a")).toHaveAttribute("href", "https://react.dev");
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("Ensure button is exist and clickable", () => {
    render(<App />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("count is 0");

    fireEvent.click(button);

    expect(button).toHaveTextContent(/count is 1/);
  });

  it("App should render the posts", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(mockData) }),
    ) as Mock;

    render(<App />);

    await (() => {
      expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
      expect(screen.getByText("Test Todo 2")).toBeInTheDocument();

      const postTitles = screen.getAllByRole("heading", { level: 3 });
      expect(postTitles).toHaveLength(mockData.length);
    });
  });
});
