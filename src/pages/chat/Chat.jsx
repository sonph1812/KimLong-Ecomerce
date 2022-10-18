import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addMessageSlice } from "../../reducer/slice/chatSlice";
import { addChat, addMessage } from "../../service/chatService";
import { socket } from "../../socket/socket"

function Chat() {
    const dispatch = useDispatch()
    const userInfo = useSelector(s => s.userReducer.userInfo)
    const [message, setMessage] = useState('');
    let socketIo = useRef()
    const chat = useSelector(s => s.chatReducer.chat)

    useEffect(() => {
        if (userInfo._id) {
            addChat({
                userId: userInfo._id
            }, dispatch)

        }

    }, [userInfo])

    useEffect(() => {
        if (userInfo._id) {
            socketIo.current = socket
            socketIo.current.emit('join_room', chat._id)

            socketIo.current.on('sendDataServer', dataGot => {
                if (userInfo._id != dataGot.userId) {
                    dispatch(addMessageSlice(dataGot.data))
                }
            })
            socketIo.current.on('sendNotify', data => {
                if (data.id !== userInfo._id) {
                    alert(data.message)
                }
            })
            return () => {
                socketIo.current.disconnect();
            };
        }
    }, [userInfo])
    const sendMessage = () => {
        if (message !== null && message !== '') {
            const msg = {
                text: message,
                userId: userInfo._id
            }

            const mess = {
                id: chat._id,
                message: msg

            }
            socketIo.current.emit('sendDataClient', msg)
            socketIo.current.emit('notify', {
                id: userInfo._id,
                message: `${userInfo.name} đã gửi 1 tin nhắn`
            })
            addMessage(mess, dispatch)
            setMessage('')
        }
    }


    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            sendMessage()
        }
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <div class="box-chat">
            <div class="box-chat_message">
                {
                    chat.message && chat.message.map((m, index) => (
                        <div key={index} >
                            <h1>name</h1>
                            {m.text}
                        </div>
                    ))
                }

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
export default Chat