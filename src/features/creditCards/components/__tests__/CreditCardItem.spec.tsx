import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router";
import { act } from "react-dom/test-utils";
import { CreditCardList } from "../CreditCardList";
import { testData, testUser } from "../../../../test/utilities";
import { UserProvider, useUserContext } from "../../../../context/UserContext";

const MockView = () => {
  const { setUser } = useUserContext();

  const handleClick = () => {
    setUser(testUser);
  };

  return (
    <>
      <button onClick={handleClick}>Change User</button>
      <CreditCardList creditCards={testData} />
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

describe("CardList", () => {
  it("should render credit cards", async () => {
    renderComponent();
    act(() => {
      screen.getByText("Change User").click();
    });
    expect(screen.getByText("Student Life")).toBeVisible();

    act(() => {
      screen.getByTestId("studentLife").click();
    });

    expect(screen.getByText("Purchase Offer Duration: 6 months")).toBeVisible();
  });
});
