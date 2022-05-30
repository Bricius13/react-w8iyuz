import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = (contact) => {
  console.log('props:');

  return (
    <div className="friend-item">
      <h3>{contact.Name}</h3>
      <h4>{contact.Email}</h4>
      <h4>{contact.Phone}</h4>
      <button>Delete</button>
    </div>
  );
};

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <Contact Name="Emmanuel" Email="emmanuel@.com" Phone="123123" />
      <Contact Name="Emmanuel1" Email="emmanuel@.com" Phone="1231234" />
      <Contact Name="Emmanuel2" Email="emmanuel@.com" Phone="1231235" />
      <Contact Name="Emmanuel3" Email="emmanuel@.com" Phone="1231236" />
      <Contact Name="Emmanuel4" Email="emmanuel@.com" Phone="1231237" />
    </div>
  </div>
);


ReactDOM.render(App, document.getElementById('root'));

