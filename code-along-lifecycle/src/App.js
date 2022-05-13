import React, {Component, useEffect} from 'react'
import { useState } from 'react';
import './App.css';
import Counter from './Counter';


const App = (props) => {
  const [isOnline, setisOnline] = useState(null)

  function handleStatusChange(status) {
    setisOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id,
      handleStatusChange);
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id,
          handleStatusChange)
      }

  })
}


export default App;
