import { render, screen } from "@testing-library/react";
import Posts from "../Posts";
import type { Mock } from "vitest";

describe("Post", () => {
  const mockData = [
    { id: 1, title: "Test Post 1", completed: false },
    { id: 2, title: "Test Post 2", completed: true },
  ];

  beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      }),
    ) as Mock;
  });

  test("should render posts fetched from API", async () => {
    render(<Posts />);
    await (() => {
      expect(screen.getByText("Test Post 1")).toBeInTheDocument();
      expect(screen.getByText("false")).toBeInTheDocument();
      expect(screen.getByText("Test Post 2")).toBeInTheDocument();
      expect(screen.getByText("true")).toBeInTheDocument();
    });

    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos",
    );
  });
});
