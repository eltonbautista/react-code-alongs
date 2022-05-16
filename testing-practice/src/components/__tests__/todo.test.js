import { render, screen, cleanUp, queryByTestId, getByTestId,  } from '@testing-library/react';
import React from "react";
// import { ... } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import TestComponent from "path-to-test-component";
import Todo from '../todo';

test('should render todo component', () => {
  render(<Todo/>);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
})
