import React from "react";
import MutationObserver from "mutationobserver-shim";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";
import ColorList from "./ColorList";
import { click } from "@testing-library/user-event/dist/click";

test("Renders without errors with blank color passed into component", () => {
  const wrapper = render(<ColorList />);
  expect(
    wrapper.render(<Color color={{ code: {}, color: "", id: "" }} />)
  ).toBeInTheDocument();
});

test("Renders the color passed into component", () => {
  const wrapper = render(<ColorList />);
  expect(
    wrapper.render(
      <Color color={{ color: "softpink", code: { hex: "#dd99ba" }, id: 6 }} />
    )
  ).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const wrapper = render(
    <Color color={{ color: "aliceblue", code: { hex: "#f0f8ff" }, id: 1 }} />
  );
  const button = wrapper.queryByTestId(/delete/);
  userEvent.click(button);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {});
