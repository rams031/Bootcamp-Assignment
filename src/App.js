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
import CreateUser from './components/CreateUser/CreateUser'
import TestLogin from './components/TestLogin/TestLogin'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Switch, Route, useHistory } from 'react-router';
import './App.css';

function App() {

  const history = useHistory();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsersApi(response.data);
      })
  }, []);

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

  const users = [
    {
      id: 1,
      email: 'pat@gmail.com',
      password: 123
    }
  ]

  const [idCount, setIdCount] = useState()

  const [usersApi, setUsersApi] = useState([])

  const [searchProduct, setSearchProduct] = useState("")

  const [itemList, setItemList] = useState({
    itemlist: item
  })

  const [itemdetails, setItemdetails] = useState({
    itemname: '',
    itemprice: 0,
    itemquantity: 0,
    itemdescription: '',
    itemimage: ''
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

  const [productNotif, setProductNotif] = useState({
    productNotification: false
  })

  const [listProductValidationMessage, setListProductValidationMessage] = useState({
    productValidationMessage: ''
  })

  const setItemname = (e) => {
    setItemdetails({ ...itemdetails, itemname: e.target.value })
  }

  const setItemprice = (e) => {
    setItemdetails({ ...itemdetails, itemprice: e.target.value })
  }
  const setItemquantity = (e) => {
    setItemdetails({ ...itemdetails, itemquantity: e.target.value })
  }
  const setItemdescription = (e) => {
    setItemdetails({ ...itemdetails, itemdescription: e.target.value })
  }
  const setItemimage = (e) => {
    setItemdetails({ ...itemdetails, itemimage: e.target.value })
  }

  const [auth, setAuth] = useState({
    authenticated: false
  })

  const [account, setAccount] = useState({
    useremail: '',
    username: ''
  })

  const [loginValidation, setLoginValidation] = useState({
    message: ''
  })

  const setEmail = (e) => {
    setAccount({ ...account, useremail: e.target.value })
  }

  const setUsername = (e) => {
    setAccount({ ...account, username: e.target.value })
  }

  const loginAction = (e) => {

    const emailValidation = useremail.includes("@") && useremail.includes(".");
    const emailAuthentication = usersApi.find(item => item.email === useremail);
    const userNameAuthentication = usersApi.find(item => item.username === username);

      if (!emailValidation) {
        notificationMessage = "Email Incorrect Format";
        setLoginValidation({ message: notificationMessage })
        setNotif({ ...notif, notification: true })

        setInterval(() => {
          setNotif({ ...notif, notification: false })
          setLoginValidation({ message: '' })
        }, 3000)
      }
    

    if (!useremail && !username || useremail && !username || !useremail && username) {
      notificationMessage = "Make sure to fill all fields";
      setLoginValidation({ message: notificationMessage })
      setNotif({ ...notif, notification: true })

      setInterval(() => {
        setNotif({ ...notif, notification: false })
        setLoginValidation({ message: '' })
      }, 3000)
    }

    if (useremail != '' && username != '') {
      console.log("may laman parehas")
      if (emailAuthentication && userNameAuthentication) {
        history.push('/homepage')
        setAuth({ ...auth, authenticated: true })
      }
    }

    if (!userNameAuthentication) {
      notificationMessage = "Wrong Username Credential";
      setLoginValidation({ message: notificationMessage })
      setNotif({ ...notif, notification: true })

      setInterval(() => {
        setNotif({ ...notif, notification: false })
        setLoginValidation({ message: '' })
      }, 3000)
    }

    if (!userNameAuthentication && !emailAuthentication) {
      notificationMessage = "Wrong Credential";
      setLoginValidation({ message: notificationMessage })
      setNotif({ ...notif, notification: true })

      setInterval(() => {
        setNotif({ ...notif, notification: false })
        setLoginValidation({ message: '' })
      }, 3000)
    }

    if (!emailAuthentication) {
      notificationMessage = "Wrong Email Credential";
      setLoginValidation({ message: notificationMessage })
      setNotif({ ...notif, notification: true })

      setInterval(() => {
        setNotif({ ...notif, notification: false })
        setLoginValidation({ message: '' })
      }, 3000)
    }

    if (!userNameAuthentication) {
      console.log("wrong Credential")
    } else { console.log("right username") }
    console.log(usersApi)
    console.log(emailAuthentication)







    //for (let i = 0; i < users.length; i++) {
    //  if (users[i].email == useremail && users[i].password == password) {
    //    history.push('/homepage')
    //    setAuth({ ...auth, authenticated: true })
    //    break;
    //  } else {
    //    setNotif({ ...notif, notification: true })
    //    setAccount({ ...account, useremail: '', password: '' })
    //
    //    setInterval(() => {
    //      setNotif({ ...notif, notification: false })
    //       
    //    }, 3000)
    //    
    //  }
    //}
  }

  const addNewItem = (itemName, itemPrice, itemQuanity, itemDetails, itemPicture) => {
    if (!itemName || !itemPrice || !itemQuanity || !itemDetails || !itemPicture) {
      productNotificationMessage = "Make sure to fill up all fields";
      setListProductValidationMessage({ productValidationMessage: productNotificationMessage })
      setProductNotif({ ...productNotification, productNotification: true })

      setInterval(() => {
        setProductNotif({ ...productNotification, productNotification: false })
        setListProductValidationMessage({ productValidationMessage: '' })
      }, 5000)
    }

    if (itemName && itemPrice && itemQuanity && itemDetails && itemPicture) {

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
      setLogList({ ...logList, loglist: log })

    }


  }

  const deleteItem = (index, itemName) => {

    const itemindex = itemlist.findIndex(
      item => item.ItemName === itemName
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
    setLogList({ ...logList, loglist: log })

  }

  const AddItemtoCart = (cart, count, name, price, picture) => {

    const index = itemlist.findIndex(
      item => item.ItemName === name
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
    setItemList({ ...itemlist, itemlist: items })

    const list = cartlist;
    list.push(newCartItem)
    setCartList({ ...cartList, cartList: list })
    console.log(cartlist)

  }

  const searchProductHandler = (e) => {
    setSearchProduct(e.target.value)
    console.log(searchProduct)
  }

  const { productValidationMessage } = listProductValidationMessage;
  const { productNotification } = productNotif;
  const { message } = loginValidation;
  const { loglist } = logList;
  const { cartlist } = cartList;
  const { itemlist } = itemList;
  const { useremail, username } = account;
  const { authenticated } = auth;
  const { notification } = notif;
  const remainingTable = itemlist;
  let notificationMessage;
  let productNotificationMessage;
  

  useEffect(() => {
    
    if(searchProduct) { 
      console.log(itemlist)
      const filteredTodos = itemlist.filter((item) => item.ItemName.includes(searchProduct))
      console.log(filteredTodos)
      setItemList({ itemlist: filteredTodos })
    }

    if(!searchProduct) {
      console.log(searchProduct)
      console.log(remainingTable)
      setItemList({ itemlist: remainingTable })
      console.log(itemlist)
    }
 

  }, [searchProduct]);
 

  console.log(usersApi)


  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Login
            notification={notification}
            loginAction={loginAction}
            setEmail={setEmail}
            setUsername={setUsername}
            useremail={useremail}
            username={username}
            message={message} />
        </Route>
        <Route path="/homepage">
          <Homepage
            item={itemlist}
            addNewItem={addNewItem}
            deleteItem={deleteItem}
            AddItemtoCart={AddItemtoCart}
            productNotification={productNotification}
            productValidationMessage={productValidationMessage}
            itemdetails={itemdetails}
            setItemname={setItemname}
            setItemprice={setItemprice}
            setItemquantity={setItemquantity}
            setItemdescription={setItemdescription}
            setItemimage={setItemimage}
            searchProductHandler={searchProductHandler} />
        </Route>
        <Route path="/cart">
          <Cart cartlist={cartlist} />
        </Route>
        <Route path="/log">
          <Log loglist={loglist} />
        </Route>
        <Route path="/createuser">
          <CreateUser />
        </Route>
        <Route path="/testlogin">
          <TestLogin />
        </Route>
      </Switch>

    </div>
  );
}

export default App;