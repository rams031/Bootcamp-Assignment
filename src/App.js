import logo from './logo.svg';
import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Homepage from './components/Homepage/Homepage'
import ItemCard from './components/Homepage/ItemCard'
import AddItemCard from './components/Homepage/AddItemCard'
import { Link } from 'react-router-dom';
import { Switch, Route, useHistory } from 'react-router';
import './App.css';

function App() {

  const history = useHistory();

  const item = [
    {
      ItemName: 'Nail',
      ItemPrice: '30',
      ItemCount: '0',
      ItemDescription: 'nails have a sharp point on one end and a flattened head on the other, but headless nails ',
      ItemPicture: 'https://www.concrete-nails.com/img/black-concrete-nails-plain.jpg'
    },
    {
      ItemName: 'Lock',
      ItemPrice: '50',
      ItemCount: '3',
      ItemDescription: 'a lock which is used for fastening two things together',
      ItemPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2q7mVWMGlXpu02WiOSjmniufRR1am9W_Nw&usqp=CAU'
    },
    {
      ItemName: 'Hammer',
      ItemPrice: '500',
      ItemCount: '10',
      ItemDescription: 'a hand tool, consisting of a weighted "head" fixed to a long handle that is swung to deliver an impact to a small area of an object.',
      ItemPicture: 'https://media.istockphoto.com/photos/hammer-picture-id183759696?k=20&m=183759696&s=612x612&w=0&h=DRDKhrKEkSMcwMyYN_CnXpC9rhpr6ijtySRDw2Nedxw='
    },
    {
      ItemName: 'Knife',
      ItemPrice: '100',
      ItemCount: '12',
      ItemDescription: 'A utensil that has a handle and a blade that may or may not be sharp-edged',
      ItemPicture: 'https://m.media-amazon.com/images/I/31yRLZXQbrL._AC_SY1000_.jpg'
    }
  ]

  const [itemList, setItemList] = useState({
    itemlist: item
  })


  const [notif, setNotif] = useState({
    notification: false
  })

  const [auth, setAuth] = useState({
    authenticated: false
  })

  const [account, setAccount] = useState({
    useremail: '',
    password: ''
  })

  const { itemlist } = itemList;
  const { useremail, password } = account;
  const { authenticated } = auth;
  const { notification } = notif;

  const users = [
    {
      id: 1,
      email: 'pat@gmail.com',
      password: 123
    },
    {
      id: 2,
      email: 'rick@gmail.com',
      password: 321
    }
  ]



  const setEmail = (e) => {
    setAccount({ ...account, useremail: e.target.value })
  }

  const setPassword = (e) => {
    setAccount({ ...account, password: e.target.value })
  }

  const loginAction = () => {
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].email)
      if (users[i].email == useremail && users[i].password == password) {
        history.push('/homepage')
        //setAuth({ ...auth, authenticated: true })
        break;
      } else {
        setNotif({ ...notif, notification: true })

        setInterval(() => {
          setNotif({ ...notif, notification: false })
        }, 3000)
      }
    }

    setAccount({ ...account, useremail: '', password: '' })
  }

  const addNewItem = (itemName, itemPrice, itemQuanity, itemDetails, itemPicture) => {
    const newItem = {
      ItemName: itemName,
      ItemPrice: itemPrice,
      ItemCount: itemQuanity,
      ItemDescription: itemDetails,
      ItemPicture: itemPicture
    }

    const list = itemlist;
    list.push(newItem)
    setItemList({ ...itemList, itemlist: list })

  }


  return (
    <div className="App">
      {
        //!authenticated ?
        //<Login notification={notification} loginAction={loginAction} setEmail={setEmail} setPassword={setPassword}/>
        //: <Homepage />
      }
      

      <Switch>
        <Route exact path="/">
          <Login notification={notification} loginAction={loginAction} setEmail={setEmail} setPassword={setPassword}/>
        </Route>
        <Route path="/homepage">
          <Homepage item={itemlist} addNewItem={addNewItem} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;