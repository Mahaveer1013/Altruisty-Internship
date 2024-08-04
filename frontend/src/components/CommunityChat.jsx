import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

// Initialize socket connection
const SERVER_URL = 'http://localhost:5000';
const socket = io(SERVER_URL, {
  transports: ['websocket'], // Use WebSocket for connection
  withCredentials: true
});

const CommunityChat = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [communityCode, setCommunityCode] = useState('');
  const [messageText, setMessageText] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [directMessageText, setDirectMessageText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Event listeners for socket events
  useEffect(() => {
    // Listen for messages from the server
    socket.on('message', (message) => {
      console.log('Message received:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('joinedCommunity', (data) => {
      console.log('Joined community:', data);
      setResponseMessage(`Joined community with code: ${data.communityCode}`);
    });

    socket.on('error', (error) => {
      console.error('Error:', error);
      setResponseMessage(`Error: ${error.message}`);
    });

    // Cleanup socket events on component unmount
    return () => {
      socket.off('message');
      socket.off('joinedCommunity');
      socket.off('error');
    };
  }, []);

  const handleJoinCommunity = () => {
    socket.emit('joinCommunity', { communityCode });
  };

  const handlePostMessage = () => {
    socket.emit('postMessageToCommunity', { communityCode, messageText });
  };

  const handleSendDirectMessage = () => {
    socket.emit('sendDirectMessage', { receiverId, messageText: directMessageText });
  };

  const renderCommunityJoin = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Join Community</h2>
      <input
        type="text"
        value={communityCode}
        onChange={(e) => setCommunityCode(e.target.value)}
        placeholder="Enter community code"
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleJoinCommunity} className="bg-blue-500 text-white p-2 rounded">Join Community</button>
    </div>
  );

  const renderPostMessage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Post Message to Community</h2>
      <input
        type="text"
        value={communityCode}
        onChange={(e) => setCommunityCode(e.target.value)}
        placeholder="Enter community code"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Enter message"
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handlePostMessage} className="bg-blue-500 text-white p-2 rounded">Post Message</button>
    </div>
  );

  const renderSendDirectMessage = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Send Direct Message</h2>
      <input
        type="text"
        value={receiverId}
        onChange={(e) => setReceiverId(e.target.value)}
        placeholder="Enter receiver ID"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        value={directMessageText}
        onChange={(e) => setDirectMessageText(e.target.value)}
        placeholder="Enter message"
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleSendDirectMessage} className="bg-blue-500 text-white p-2 rounded">Send Direct Message</button>
    </div>
  );

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-6">Socket.IO Community Chat</h1>
      <div className="flex space-x-4 mb-6">
        <button onClick={() => setActiveComponent('join')} className="bg-gray-500 text-white p-2 rounded">Join Community</button>
        <button onClick={() => setActiveComponent('post')} className="bg-gray-500 text-white p-2 rounded">Post Message</button>
        <button onClick={() => setActiveComponent('dm')} className="bg-gray-500 text-white p-2 rounded">Send Direct Message</button>
      </div>

      {activeComponent === 'join' && renderCommunityJoin()}
      {activeComponent === 'post' && renderPostMessage()}
      {activeComponent === 'dm' && renderSendDirectMessage()}

      {/* Display response messages */}
      {responseMessage && (
        <div className="mt-4 p-2 bg-yellow-200 text-yellow-800 rounded">
          <h3 className="font-bold">Response</h3>
          <p>{responseMessage}</p>
        </div>
      )}

      {/* Display messages */}
      {messages.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Messages</h3>
          <ul className="list-disc pl-5">
            {messages.map((msg, index) => (
              <li key={index}>{msg.message}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommunityChat;
