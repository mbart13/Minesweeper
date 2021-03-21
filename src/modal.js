import React from 'react'
import Modal from 'react-modal';


Modal.setAppElement('#root');
const HelpMenuModal = () => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'black',
      width: '80%',
      fontSize:'1.2rem',
      border: 'none'
    },
    overlay: {
      background: 'rgba(0,0,0,.5)',
      padding: '20px'
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div className="modal">
      <button onClick={openModal} className="btn show-help">Help</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Rules"
      >
        <div className="modal-text">
          <h1>Rules</h1>
          <br></br>
          <p>The board is divided into cells, with 10 randomly distributed mines. To win, you need to uncover all the cells. </p><br></br>
          <p>Uncovered cell displays either a number indicating how many mines surround this cell or a blank tile, and all adjacent non-mined cells will automatically be uncovered.
            Cells suspected of being mines can be marked with a flag using the right mouse button or press and hold on mobile device.</p><br></br>
          <p>To start a new game, you can click on the emoji at the top of the board. The remaining number of mines is displayed in the left corner,
            and the game timer is displayed in the right corner. </p><br></br>
            <p>First move will never be a bomb.</p><br></br>
            <p>Good Luck!</p>
        </div>

        <button onClick={closeModal} className="btn close-help">close</button>

      </Modal>

    </div>
  );
}

export default HelpMenuModal
