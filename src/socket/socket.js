import socketIOClient from "socket.io-client";
const host = "http://localhost:3000";
export const socket = socketIOClient.connect(host)
