import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import Welcome from './chapter_05/a';
import Comment from './chapter_05/Comment';
import CommentList from './chapter_05/CommentList';
import Notification from './chapter_06/Notification';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton_functionComponent';
import MainPage from './chapter_09/MainPage';
import LandingPage from './chapter_09/LandingPage';
import AttendenceBook from './chapter_10/AttendenceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import MainPage1 from './chapter_15/MainPage';
import Sample from './chapter_15/Sample';
import Blocks from './chapter_15/Blocks';
ReactDOM.render(
  <React.StrictMode>
 
    <Blocks/>
  

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
