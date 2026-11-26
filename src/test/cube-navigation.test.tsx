import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, useLocation } from "react-router-dom";
import CubeShowcase from "@/components/gen/CubeShowcase";

const Location = () => <output data-testid="destination">{useLocation().pathname}</output>;

afterEach(cleanup);

function setupDrag() {
  render(<MemoryRouter><CubeShowcase /><Location /></MemoryRouter>);
  const link = screen.getAllByRole("link", { name: "Servizio →" })[0];
  if (!link) throw new Error("Collegamento del cubo mancante");
  Object.defineProperty(link, "setPointerCapture", { value: vi.fn(), configurable: true });
  fireEvent(link, new MouseEvent("pointerdown", { bubbles: true, clientX: 100, clientY: 100 }));
  fireEvent(link, new MouseEvent("pointermove", { bubbles: true, clientX: 150, clientY: 100 }));
  fireEvent(link, new MouseEvent("pointerup", { bubbles: true }));
  return link;
}

describe("collegamenti del cubo dopo il trascinamento", () => {
  it("la tastiera apre il servizio anche dopo aver ruotato il cubo", () => {
    const link = setupDrag();
    fireEvent.click(link, { detail: 0 });
    expect(screen.getByTestId("destination").textContent).toBe("/servizi/automazione-hardware");
  });

  it("il rilascio di un trascinamento non apre accidentalmente il servizio", () => {
    const link = setupDrag();
    fireEvent.click(link, { detail: 1 });
    expect(screen.getByTestId("destination").textContent).toBe("/");
  });

  it("un nuovo clic sul servizio funziona dopo il trascinamento", () => {
    const link = setupDrag();
    fireEvent(link, new MouseEvent("pointerdown", { bubbles: true, clientX: 100, clientY: 100 }));
    fireEvent(link, new MouseEvent("pointerup", { bubbles: true }));
    fireEvent.click(link, { detail: 1 });
    expect(screen.getByTestId("destination").textContent).toBe("/servizi/automazione-hardware");
  });
});