import { render, screen } from "../../test-utils";
import Home from ".";

jest.mock("services/categorias");
// const mockNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockNavigate,
// }));

describe("Testando página Home", () => {
  // describe("Anuncie", () => {
  //   test("Deve redirecionar para a página anucie", () => {
  //     const botaoAnuncie = screen.getByTestId("home-botao-anunciar");

  //     userEvent.click(botaoAnuncie);

  //     expect(mockNavigate).toHaveBeenCalledWith("/anuncie");
  //   });
  // });
  describe("Categorias", () => {
    test("Deve renderizar com categorias", async () => {
      render(<Home />);

      const categorias = await screen.findAllByTestId("home-categorias");
      expect(categorias).toHaveLength(2);
    });
  });
});
