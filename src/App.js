import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Homepage from './components/Homepage/Homepage'
import Cart from './components/Cart/Cart'
import Log from './components/Log/Log'
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
      ItemPrice: 30,
      ItemCount: 0,
      ItemDescription: 'nails have a sharp point on one end and a flattened head on the other, but headless nails ',
      ItemPicture: 'https://www.concrete-nails.com/img/black-concrete-nails-plain.jpg'
    },
    {
      ItemName: 'Lock',
      ItemPrice: 50,
      ItemCount: 3,
      ItemDescription: 'a lock which is used for fastening two things together',
      ItemPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2q7mVWMGlXpu02WiOSjmniufRR1am9W_Nw&usqp=CAU'
    },
    {
      ItemName: 'Hammer',
      ItemPrice: 500,
      ItemCount: 20,
      ItemDescription: 'a hand tool, consisting of a weighted "head" fixed to a long handle that is swung to deliver an impact to a small area of an object.',
      ItemPicture: 'https://media.istockphoto.com/photos/hammer-picture-id183759696?k=20&m=183759696&s=612x612&w=0&h=DRDKhrKEkSMcwMyYN_CnXpC9rhpr6ijtySRDw2Nedxw='
    },
    {
      ItemName: 'Knife',
      ItemPrice: 100,
      ItemCount: 12,
      ItemDescription: 'A utensil that has a handle and a blade that may or may not be sharp-edged',
      ItemPicture: 'https://m.media-amazon.com/images/I/31yRLZXQbrL._AC_SY1000_.jpg'
    }
  ]

  const [idCount, setIdCount] = useState()

  const [itemList, setItemList] = useState({
    itemlist: item
  })

  const [cartList, setCartList] = useState({
    cartlist: []
  })

  const [logList, setLogList] = useState({
    loglist: []
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

  const { loglist } = logList;
  const { cartlist } = cartList;
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
      if (users[i].email == useremail && users[i].password == password) {
        history.push('/homepage')
        setAuth({ ...auth, authenticated: true })
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

    const newLog = {
      ItemName: itemName,
      ActionName: 'New Item Added',
      Action: 'removed'
    }

    const log = loglist; 
    log.push(newLog)
    setLogList({...logList, loglist: log})


  }

  const deleteItem = (index, itemName) => {

    const itemindex = itemlist.findIndex(
      item =>  item.ItemName === itemName 
    )

    const list = itemlist;
    list.splice(itemindex, 1)
    setItemList({ ...itemList, itemlist: list })
    console.log(list)

    const newLog = {
      ItemName: itemName,
      ActionName: 'Item Removed',
      Action: 'added'
    }

    const log = loglist; 
    log.push(newLog)
    setLogList({...logList, loglist: log})

  }

  const AddItemtoCart = (cart, count, name, price, picture) => {

    const index = itemlist.findIndex(
      item =>  item.ItemName === name 
    )

    const newCartItem = {
      CartOrder: cart,
      CartItemName: name,
      CartQuantity: count,
      CartPrice: price,
      CartItemPicture: picture 
    }

    const items = itemlist;
    items[index].ItemCount = count - cart;
    setItemList({...itemlist, itemlist: items})
    
    const list = cartlist;
    list.push(newCartItem)
    setCartList({...cartList, cartList: list})
    console.log(cartlist)

  }

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Login notification={notification} loginAction={loginAction} setEmail={setEmail} setPassword={setPassword} />
        </Route>
        <Route path="/homepage">
          <Homepage item={itemlist} addNewItem={addNewItem} deleteItem={deleteItem} AddItemtoCart={AddItemtoCart} />
        </Route>
        <Route path="/cart">
          <Cart cartlist={cartlist} />
        </Route>
        <Route path="/log">
          <Log loglist={loglist} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;