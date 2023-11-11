import React from "react"
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("Profile Status Component", () => {
  test("status should be in the state", () => {
    const component = create(<ProfileStatus status='status' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe("status")
  })

  test(`After creation <span> should be displayed with correct status`, () => {
    const component = create(<ProfileStatus status='status' />)
    const root = component.root
    const spans = root.findAllByType("span")
    expect(spans.length).toBe(1)
  })

  test(`<span> should have text status`, () => {
    const component = create(<ProfileStatus status='status' />)
    const root = component.root
    const span = root.findByType("span")
    expect(span.props.children).toBe("status")
  })
  test(`<input> should be displayed in editMode instead of <span>`, () => {
    const component = create(<ProfileStatus status='status' />)
    const root = component.root
    // Trigger double-click on the <span>
    let span = root.findByType("span")
    span.props.onDoubleClick()
    // Find the <input> after double-click
    let input = root.findByType("input")
    // Check if the input value is set to the initial status
    expect(input.props.value).toBe("status")
  })

  // mock
  test(`callback should be called`, () => {
    const mockCallBack = jest.fn()
    const component = create(
      <ProfileStatus status='status' updateStatus={mockCallBack} />
    )
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallBack.mock.calls.length).toBe(1)
  })
})
