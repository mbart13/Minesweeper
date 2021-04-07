import React from 'react'
import Modal from 'react-modal'
import './modal.component.css'
import { FaTimes } from 'react-icons/fa'

Modal.setAppElement('#root')

const ShowHelpModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'black',
      width: '90%',
      maxWidth: '50rem',
      fontSize: '1.2rem',
      maxHeight: '31.25rem',
      border: 'none',
    },
    overlay: {
      background: 'rgba(0,0,0,.5)',
      padding: '1.2rem',
    },
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <header className="help-modal">
      <button onClick={openModal} className="btn show-help">
        Help
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Rules"
      >
        <div className="modal-text">
          <header className="modal-header">
            <h1>Rules</h1>
            <FaTimes
              className="close-icon"
              color="white"
              size={'1.5rem'}
              onClick={closeModal}
            />
          </header>
          <br></br>
          <p>
            The board is divided into cells, with 10 randomly distributed mines.
            To win, you need to uncover all the cells.{' '}
          </p>
          <br />
          <p>
            Uncovered cell displays either a number indicating how many mines
            surround this cell or a blank tile, and all adjacent non-mined cells
            will automatically be uncovered. Cells suspected of being mines can
            be marked with a flag using the right mouse button or press and hold
            on mobile device.
          </p>
          <br />
          <p>
            To start a new game, you can click on the emoji at the top of the
            board. The remaining number of mines is displayed in the left
            corner, and the game timer is displayed in the right corner.{' '}
          </p>
          <br />
          <p>First move will never be a bomb.</p>
          <br />
          <p>Good Luck!</p>
        </div>
      </Modal>
    </header>
  )
}

export default ShowHelpModal
