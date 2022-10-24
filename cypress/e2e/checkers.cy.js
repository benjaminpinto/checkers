import { board } from '../support/controllers/board.controlle'

describe('Checkers game test suite', () => {
  it('Scenario - ', () => {
    cy.visit('/')

    board.getBoard().should('exist').and('be.visible')

    board
      .getComputerPieces()
      .should('exist')
      .and('have.length', board.initialPiecesCount)
    board
      .getPlayerPieces()
      .should('exist')
      .and('have.length', board.initialPiecesCount)

    board.movePiece('space22', 'space33')
    board.checkComputerPiecesOnRow('four', 1)
    board.checkPlayerPiecesOnRow('five', 1)
    board.movePiece('space33', 'space24')

    board.getPlayerPieces().should('have.length', board.initialPiecesCount - 1)
  })
})
