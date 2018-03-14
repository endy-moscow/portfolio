import React from 'react';
import {render} from 'react-dom'
import { connect } from 'react-redux'
import store from '../../store/index'
import Modal from 'react-responsive-modal'
import Tile from '../tile/tile.jsx'
import { setFilter } from '../../actions'

function Test (props) {
  return (
    <div className='gallery'>
      <div onClick={() => {props.onSetFilter(filter.name)}}>
        <Tile>
          jkfgdsfjkshdfkjewhfehiofejwiofjidjkhefhek
        </Tile>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
    return {
        projects: state.projects,
        activeFilter: state.activeFilter
    };
}
const ModalGallery = connect(mapStateToProps)(Test)
export default ModalGallery;


// // inner state (react) version
//
// export default class ModalTest extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openFirstModal: false,
//       openSecondModal: false,
//     }
//     this.onOpenFirstModal = this.onOpenFirstModal.bind(this)
//     this.onCloseFirstModal = this.onCloseFirstModal.bind(this)
//     this.onOpenSecondModal = this.onOpenSecondModal.bind(this)
//     this.onCloseSecondModal = this.onCloseSecondModal.bind(this)
//   }
//   onOpenFirstModal() {this.setState({ openFirstModal: true })}
//   onCloseFirstModal() {this.setState({ openFirstModal: false })}
//   onOpenSecondModal() {this.setState({ openSecondModal: true })}
//   onCloseSecondModal() {this.setState({ openSecondModal: false })}
//   render() {
//     const { openFirstModal, openSecondModal } = this.state
//     return (
//       <div className='gallery'>
//         <div onClick={this.onOpenSecondModal}>
//           <Tile
//
//           />
//         </div>
//         <Modal open={openSecondModal} onClose={this.onCloseSecondModal}>
//           <h2>Big modal 2</h2>
//         </Modal>
//       </div>
//
//     );
//   }
// }




// import React from 'react'
// import Gallery from '../gallery/Gallery.js'
// import Header from '../header/header.jsx'
// import Footer from '../footer/footer.jsx'
//
// export default class Home extends React.Component {
//   render() {
//     return (
//       <div className='canvas'>
//         <Header
//           keyword='home'
//           imgUrl= 'http://postpeople.ru/media/me.gif'
//           title='Привет! Я Сергей Дузенко, digital-дизайнер из Москвы. Открыт для предложений'
//         />
//         <Gallery />
//         <Footer />
//       </div>
//     )
//   }
// }
