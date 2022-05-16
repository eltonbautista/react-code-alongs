import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent, { setup } from "@testing-library/user-event";
import App from "../../App";

// const user = userEvent.setup();
describe('App component', () => {
  it('renders magnificent monkeys', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('renders radical rhinos after button click', async () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Click Me' });
    const user = userEvent.setup();


    await user.click(button);

    expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
  })
})