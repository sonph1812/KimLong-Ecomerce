import { useEffect, useState, useRef } from "react"
import { socket } from "../../socket/socket"

function ChatAdmin() {
    const [mess, setMess] = useState([]);
    const [message, setMessage] = useState('');
    const [id, setId] = useState();
    let socketIo = useRef()
    useEffect(() => {
        socketIo.current = socket

        socketIo.current.on('sendDataServer', dataGot => {
            setMess(oldMsgs => [...oldMsgs, dataGot.data])
        })

        return () => {
            socketIo.current.disconnect();
        };
    }, [])

    const sendMessage = () => {
        if (message !== null && message !== '') {
            const msg = {
                content: message,
                id: id
            }
            socketIo.current.emit('sendDataClient', msg)
            setMessage('')
        }
    }

    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            sendMessage()
        }
    }
    const renderMess = mess.map((m, index) =>
        <div key={index} className={`${m.id === id ? 'your-message' : 'other-people'} chat-item`}>
            {m.content}
        </div>
    )
    const handleChange = (e) => {
        setMessage(e.target.value)
      }
    return (
        <div class="box-chat">
            <div class="box-chat_message">
                {renderMess}
                
            </div>

            <div class="send-box">
                <textarea
                    value={message}
                    onKeyDown={onEnterPress}
                    onChange={handleChange}
                    placeholder="Nhập tin nhắn ..."
                />
                <button onClick={sendMessage}>
                    Send
                </button>
            </div>

        </div>
    )
}
export default ChatAdmin