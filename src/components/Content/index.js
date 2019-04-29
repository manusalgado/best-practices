import React from 'react'
import { Wrapper } from './styles'
import image from '../../assets/images/img.png'
import Modal from 'react-responsive-modal'
import Form from '../Form'

class Content extends React.Component {
    state = {
        open: false,
      };
     
      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render(){
        const { open } = this.state;
        return (
            <Wrapper className='Content flex main-container'>
                <div className='Content__image-content'>
                    <img src={image} alt='Book' />
                </div>
                <div className='Content__content'>
                    <p>Don’t just drift through Javascript</p>
                    <p>Understand how Javascript works</p>
                    <p>Start your journey through the bumpy side of Javascript</p>
                    <button className='btn' onClick={this.onOpenModal}>Order your copy Now</button>
                </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h3 className='Content__content--title'>PLACE ORDER</h3>
                    <Form />
                </Modal>
            </Wrapper>
        )
    }
}

export default Content