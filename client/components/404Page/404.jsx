import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../menu/menu.jsx'
import Header from '../header/header.jsx'
// import Modal from 'react-modal'
// import Cola from '../ProjectPages/cola'
//
// const customStyles = {
//   content : {
//     width:'90%',
//     height:'100%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     overlfow:'scroll',
//     top: '50%',
//     left: '50%',
//   }
// };
// Modal.setAppElement('#root')


// <div>
//   <button onClick={this.openModal}>Open Modal</button>
//   <Modal
//     isOpen={this.state.modalIsOpen}
//     onAfterOpen={this.afterOpenModal}
//     onRequestClose={this.closeModal}
//     style = { customStyles }
//
//   >
//
//     <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
//     <button onClick={this.closeModal}>close</button>
//     <Cola/>
//   </Modal>
// </div>

export default class Page404 extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div className='canvas'>
        <Header
          title='Страница не найдена'
          imgUrl='http://78.media.tumblr.com/tumblr_lwuf26MDND1qg39ewo1_500.gif'
          />
      </div>
    )
  }
}
