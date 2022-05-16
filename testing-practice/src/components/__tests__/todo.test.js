import { render, screen, cleanUp, queryByTestId, getByTestId, cleanup,  } from '@testing-library/react';
import React from "react";
import { Renderer } from 'react-dom';
import renderer from 'react-test-renderer';
// import { ... } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Todo from '../todo';

afterEach(() => {
  cleanup();
})

test('should render non-completed todo component', () => {
  const todo = {id: 1, title: 'wash dishes', completed: false,};
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash dishes');
})

test('should render completed todo component', () => {
  const todo = {id: 2, title: 'wash car', completed: true,};
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash car');
  expect(todoElement).toContainHTML('<strike><h1>wash car</h1></strike>');
})

test('matches snapshot', () => {
  const todo = {id: 1, title: 'wash dishes', completed: false,};
  const tree = renderer.create(<Todo todo={todo}/>).toJSON();
  expect(tree).toMatchSnapshot();
})