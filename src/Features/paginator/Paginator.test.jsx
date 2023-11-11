import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Paginator from "./Paginator"

describe("Paginator component tests", () => {
  test("should show only 10 pages when there are 11 pages", () => {
    render(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toBe(10)
  })

  test("should have 'Next' button when there are more than 10 pages", () => {
    render(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
    const nextButton = screen.getByText("Next")
    expect(nextButton).toBeInTheDocument()
  })
})
