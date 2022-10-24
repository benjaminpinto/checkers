import { checkersPage } from '../pageObjects/CheckersPage'

export const board = {
  initialPiecesCount: 12,
  restart() {
    cy.contains('Restart...').should('exist').click()
  },
  getBoard() {
    return cy.get(checkersPage.board)
  },
  getComputerPieces() {
    return cy.get(checkersPage.computerPieces)
  },
  getPlayerPieces() {
    return cy.get(checkersPage.playerPieces)
  },
  movePiece(from, to) {
    cy.get(`[name="${from}"]`).click()
    cy.get(`[name="${to}"]`).click()
  },
  checkComputerPiecesOnRow(row, piecesCount) {
    cy.get(checkersPage.boardRows[row])
      .find(checkersPage.computerPieces)
      .should('have.length', piecesCount)
  },
  checkPlayerPiecesOnRow(row, piecesCount) {
    cy.get(checkersPage.boardRows[row])
      .find(checkersPage.playerPieces)
      .should('have.length', piecesCount)
  },
}
