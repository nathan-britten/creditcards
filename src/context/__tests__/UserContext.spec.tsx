import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router";
import { act } from "react-dom/test-utils";
import { UserProvider, useUserContext } from "../UserContext";
import { testUser } from "../../test/utilities";

const MockView = () => {
  const { user, setUser } = useUserContext();

  const handleClick = () => {
    setUser(testUser);
  };

  return (
    <>
      <p data-testid="firstname-element">{user.firstName}</p>
      <button onClick={handleClick}>Change User</button>
    </>
  );
};

function renderComponent(initialEntries = ["/credit-cards"]) {
  return render(
    <Router initialEntries={initialEntries}>
      <UserProvider>
        <MockView />
      </UserProvider>
    </Router>
  );
}

describe("UserContext", () => {
  it("should display default current state", async () => {
    renderComponent();
    expect(screen.getByTestId("firstname-element")).toBeEmptyDOMElement();
  });
  it("should update state", async () => {
    renderComponent();
    act(() => {
      screen.getByText("Change User").click();
    });
    expect(screen.getByText("Nathan")).toBeVisible();
  });
});
