import React from 'react';
import Chat from './Chat';
import './Chats.css';

const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name='Sarah'
                message='Hey! How are you?'
                timestamp='40 seconds ago'
                profilePic='https://media.wired.com/photos/5f35b7fc86a7c014331d15dd/master/w_2560%2Cc_limit/Culture_Monitor_Sarah-Cooper-B46A2916-10.jpg' />
            <Chat
                name='Ellen'
                message='Whats Up?'
                timestamp='5 minutes ago'
                profilePic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879' />
            <Chat
                name='Sandra'
                message='Ola'
                timestamp='3 days ago'
                profilePic='https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY317_CR1,0,214,317_AL__QL50.jpg' />
            <Chat
                name='Natasha'
                message='YO whats Up!'
                timestamp='4 weeks ago'
                profilePic='http://www.natashamago.com/wp-content/uploads/2019/04/3R2A3562_warm-2-PS-e1554201883532.jpg' />
        </div>
    )
}

export default Chats
