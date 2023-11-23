import Register from "..";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";

describe("CreateService", () => {
  test("render correctly", () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    expect(screen).toBeDefined();
  });

  test("inputFile show the icon checked", () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    
    const inputFile = screen.getByTestId("fileInput");
    expect(inputFile).toBeInTheDocument();
    expect(screen.queryByTestId("checkedIcon")).not.toBeInTheDocument();
    fireEvent.click(inputFile);
    const file = new File(["A"], "img.png", {
      type: "image/png",
    });
    fireEvent.change(inputFile, { target: { files: [file] } });
    const checked = screen.getByTestId("checkedIcon");
    expect(checked).toBeInTheDocument();
  });

  test("should show error when sending empty data", () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );

    expect(screen.queryByText(/requerido/i)).not.toBeInTheDocument();
    const saveBtn = screen.getByTestId("button");
    fireEvent.click(saveBtn);
    const [msg] = screen.getAllByText(/requerido/i);
    expect(msg).toBeInTheDocument();
  });

  test("should be change data", () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );

    const nameInput = screen.getAllByTestId("register-input");
    const emailInput = screen.getByTestId("email-input");
    const phoneInput = screen.getByTestId("phone-input");

    nameInput.forEach((input) => {
      fireEvent.change(input, { target: { value: "test" } });
      expect(input).toHaveValue("test");
    });

    fireEvent.change(emailInput, { target: { value: "email@email.com" } });
    expect(emailInput).toHaveValue("email@email.com");
    fireEvent.change(phoneInput, { target: { value: "123456789" } });
    expect(phoneInput).toHaveValue("123456789");
  });
});
