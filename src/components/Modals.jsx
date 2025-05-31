import React from 'react';
import Modal from 'react-modal';

// It's a good practice to define custom styles for the modal,
// or ensure your existing CSS (like .reveal) works well with react-modal.
// For now, we'll use the classes from the original HTML and assume they are styled.
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px', // Reset padding if using custom content structure
    border: 'none', // Reset border if using custom content structure
    background: 'transparent', // Reset background if using custom content structure
    overflow: 'visible', // Allow content to define its own scroll if needed
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)' // Default overlay, similar to Foundation
  }
};


function Modals(props) {
  return (
    <>
      <Modal
        isOpen={props.chicagoOpen}
        onRequestClose={props.closeChicagoModal}
        contentLabel="Chicago Modal"
        style={customStyles} // Apply basic centering and overlay
        className="reveal" // Use original class for content styling
        overlayClassName="reveal-overlay" // A general overlay class, Foundation might have one
      >
        {/* Original modal content structure */}
        <div /* className="reveal" id="modalChicago" -- these are now on Modal component */ >
          <br /><img className="img-responsive" width="70%" src="/images/chicago.jpg" alt="Inside Chicago" />
          <h4 className="text-center">Inside Chicago</h4>
          <button onClick={props.closeChicagoModal} className="close-button" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={props.sunsetOpen}
        onRequestClose={props.closeSunsetModal}
        contentLabel="Sunset Modal"
        style={customStyles}
        className="reveal"
        overlayClassName="reveal-overlay"
      >
        <div>
          <br />
          <img className="img-responsive" src="/images/sunset.jpg" alt="After the Storm" />
          <h4 className="text-center">After the Storm</h4>
          <button onClick={props.closeSunsetModal} className="close-button" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={props.harborOpen}
        onRequestClose={props.closeHarborModal}
        contentLabel="Harbor Modal"
        style={customStyles}
        className="reveal"
        overlayClassName="reveal-overlay"
      >
        <div>
          <br />
          <img className="img-responsive" src="/images/harbor.jpg" alt="Boston Harbor" />
          <h4 className="text-center">Boston Harbor</h4>
          <button onClick={props.closeHarborModal} className="close-button" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={props.bridgeOpen}
        onRequestClose={props.closeBridgeModal}
        contentLabel="Bridge Modal"
        style={customStyles}
        className="reveal"
        overlayClassName="reveal-overlay"
      >
        <div>
          <br />
          <img className="img-responsive" src="/images/bridge.jpg" alt="Bridge in the Sunset" />
          <h4 className="text-center">Bridge in the Sunset</h4>
          <button onClick={props.closeBridgeModal} className="close-button" aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Modals;
