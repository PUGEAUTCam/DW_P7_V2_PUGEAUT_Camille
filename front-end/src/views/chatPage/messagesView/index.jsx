// import React, { useState } from 'react';
// import {
//     BubblesContainer,
//     InputTextContainer,
//     MessagesContainer,
//     Input,
//     SendButton
// } from '../style';


// //Partie messages avec les bulles de conversations
// const MessagesView = () => {

//     const [currentChat, setCurrentChat] = useState(null);
//     const [messages, setMessages] = useState([]);







//     return (
//         <MessagesContainer>

//             {currentChat
//                 ? <>
//                     <BubblesContainer>
//                         <p>coucou</p>

//                     </BubblesContainer>
//                 </>
//                 : <p>Veuillez cliquer sur une conversation pour group'chater</p>
//             }



//             <InputTextContainer>
//                 <Input />
//                 <SendButton>Envoyer</SendButton>
//             </InputTextContainer>

//         </MessagesContainer>
//     );
// };

// export default MessagesView;