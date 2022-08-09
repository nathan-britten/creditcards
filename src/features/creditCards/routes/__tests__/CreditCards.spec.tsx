import React from "react";
import { render, screen } from "@testing-library/react";
import { CreditCards } from "../CreditCards";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider, useUserContext } from "../../../../context/UserContext";
import { act } from "react-dom/test-utils";
import { useCreditCardsQuery } from "../../hooks/useCreditCardsQuery";
import { testUser } from "../../../../test/utilities";
import { User } from "../../../../types";

const mockedUseCreditCards = useCreditCardsQuery as jest.Mock<any>;

interface Props {
  user: User;
}

const MockView = (props: Props) => {
  const { user } = props;
  const { setUser } = useUserContext();

  const handleClick = () => {
    setUser(user);
  };

  return (
    <>
      <button onClick={handleClick}>Set User</button>
      <CreditCards />
    </>
  );
};

function renderComponent(initialEntries = ["/credit-cards"], user = testUser) {
  return render(
    <Router initialEntries={initialEntries}>
      <UserProvider>
        <MockView user={user} />
      </UserProvider>
    </Router>
  );
}
jest.mock("../../hooks/useCreditCardsQuery");

describe("CreditCards", () => {
  beforeEach(() => {
    mockedUseCreditCards.mockImplementation(() => ({}));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render without crashing", () => {
    renderComponent();
  });

  it("Should dispay loading indicator when there is a user", () => {
    renderComponent();
    mockedUseCreditCards.mockImplementation(() => ({ isLoading: true }));
    act(() => {
      screen.getByText("Set User").click();
    });
    screen.getByText("Fetching your Credit Cards...");
  });

  it("Should display no card when there isn't a match", () => {
    renderComponent();
    mockedUseCreditCards.mockImplementation(() => ({}));
    act(() => {
      screen.getByText("Set User").click();
    });
    screen.getByText("No credit cards match your criteria");
  });

  it("Should display error if there is no user", async () => {
    renderComponent();
    screen.getByText("There has been a problem. Please re-enter your details");
  });
});
