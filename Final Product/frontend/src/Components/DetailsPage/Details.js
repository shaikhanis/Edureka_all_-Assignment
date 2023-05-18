import React,{useEffect, useState} from 'react'
import '../../Styles/Details.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { json, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import GoogleButton from 'react-google-button';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { getByDisplayValue, getDefaultNormalizer } from '@testing-library/react';
import { isDisabled } from '@testing-library/user-event/dist/utils';


export default function Details() {

    const {rName}=useParams();

    const[login,setLogin]=useState(false);
    const[createAcc,setAcc]=useState(false);
    const [placeOrder,setPlaceOrder]=useState(false);
    const [menu,setMenu]=useState([]);
    const[restaurant,SetRestaurant]=useState({});
    const [totalPrice,setTotalPrice]=useState(0);
    const [userName,setUserName]=useState(undefined);
    const [PassWord,setPassword]=useState(undefined);
    const [rePassword,setRePassword]=useState(undefined);
    const [payment,setPayment]=useState(false);
    const [orderName,setOrderName]=useState(undefined);
    const [orderMail,setOrderMail]=useState(undefined);
    const [orderNumber,setOrderNumber]=useState(undefined);
    const [amountBtnDisabled,setAmountBtnDisabled]=useState(false);
    
    useEffect(()=>{
        fetch(`http://localhost:7001/zomato/details/${rName}`)
        .then((response)=>response.json())
    .then((data)=>SetRestaurant(data.data))
    },[])

    const customStyles = {
        content: {
          height:'65%',
          width:'30%',  
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          boxShadow:' 3px 3px 9px 2px grey',
        },
      };
    const customStyles2 = {
        content: {
          height:'70%',
          width:'30%',  
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          boxShadow:' 3px 3px 9px 2px grey'
        },
      };  
    const customStyles3 = {
        content: {
          height:'90%',
          width:'60%',  
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          boxShadow:' 3px 3px 9px 2px grey',
        },
        MediaQueryList:{}
      };   
      const customStyles4 = {
        content: {
          height:'80%',
          width:'40%',  
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          boxShadow:' 3px 3px 9px 2px grey',
        },
        MediaQueryList:{}
      };     
    
    const getMenu=()=>{
        fetch(`http://localhost:7001/zomato/menu/${rName}`,{method:'GET'})
        .then((response)=>response.json())
        .then((data)=>{
            data.data=data.data.map((item,index)=>{return{...item,qty:0,key:index}})
            setMenu(data.data);
        })
    };

    // console.log(menu);
    // var s={...menu};
    // console.log(s);
    // console.log([...menu]);

    const responseFacebook = (response) => {
        console.log(response);
      }
    const responseGoogle = (response) => {
        console.log(response);
      }

    const numberLimit=()=>{
        document.querySelectorAll('input[type="number"]').forEach(input=>{
            input.oninput=()=>{
                if(input.value.length > input.maxLength) input.value=input.value.slice(0,input.maxLength);
            }
        })
    }
    }
    
  return (
    <div>
        <div className='headbar'>
            <span className='eLogo'>e!</span>
            <div className='accountManage'>
                <button className='LogInButton'><a className='a1' onClick={()=>setLogin(true)}>Log In</a></button>
                <div className='CreateAcc'>
                    <button className='AccInButton'><a className='a1' onClick={()=>setAcc(true)}>Create Account</a></button>
                </div>
            </div>
        </div>
        <center>
        <div className='imageTag'>
            <img src={restaurant.thumb} height='450px' width='100%'></img>
        </div></center>
        <div className='bakeryName'>
            <span><h2>{restaurant.name}</h2></span> <button className='btn btn-danger orderButton' onClick={()=>{
                setPlaceOrder(true);
                getMenu()
                }}>
                    Place Online Order
                </button>
            <div className='Tabsall'>
            <Tabs>
                <TabList>
                <Tab>Overview</Tab>
                <Tab>Contact</Tab>
                </TabList>

                <TabPanel>
                <h2>About the place</h2>
                <h4>Cuisine</h4>
                {!(restaurant.Cuisine==undefined) && (restaurant.Cuisine.length) && 
                   <ul>
                        {
                           restaurant.Cuisine.map((item,index)=><li key={index}>{item.name}</li>)
                        }
                   </ul>}
                <h4>Meal Type</h4>
                {!(restaurant.type==undefined) && (restaurant.type.length) && 
                    <ul>{
                        restaurant.type.map((item,index)=><li key={index}>{item.name}</li>)
                    }</ul>}
                <h4>Average Cost</h4>
                &#8377;{restaurant.cost}
                </TabPanel>

                <TabPanel>
                <h4>Phone</h4>
                {restaurant.contact_number}
                <h4>Address</h4>
                {restaurant.address}
                </TabPanel>
            </Tabs>
            </div>
        </div>


        {/*login Model*/}
        <Modal
         isOpen={login}
         style={customStyles}
         contentLabel="Example Modal"
        >
           <div > 
                <h2 className='modelHead'>Login</h2> 
                <button className='x' onClick={()=>{
                    setLogin(false);
                    setPassword(undefined);
                    setUserName(undefined);
                }}>x</button>
            </div>
            <br/>
            <center>
                <div className='logInbtns'>
                    <div>
                        <input className='inputBox' type='text' placeholder='Enter your User Name' onChange={(e)=>e.target.value=='' ? setUserName(undefined):setUserName(e.target.value)}/><br/><br/>
                        <input className='inputBox' type='password' placeholder='Enter Your Password' onChange={(e)=>e.target.value=='' ? setPassword(undefined):setPassword(e.target.value)}/><br/><br/>
                        <button className='btn btn-primary' disabled={userName!=undefined&&PassWord!=undefined ? false:true}>LogIn</button>
                    </div>
                <p className='up-in-parent'>If no Account use <b className='up-in' onClick={()=>{setAcc(true);setLogin(false)}}>Sign-Up</b></p>    
                       
                <div className='google-fb'>
                <GoogleButton
                    clientId="1021090884211-u92l9v86p37r96dfq9b11q2e2asl4mol.apps.googleusercontent.com"
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> <br/>
                {/* <GoogleButton
                    onClick={() => { console.log('Google button clicked') }}
                    type="dark"
                    disabled={false}
                    label='LOGIN WITH GOOGLE'
                ></GoogleButton> <br/> */}
                <FacebookLogin
                    appId="859576005343218"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook} 
                    icon="fa-facebook"
                    textButton='SIGN-IN WITH FACEBOOK'
                ></FacebookLogin>
                </div>

                </div> 
            </center>   
        </Modal>
       
       {/*create accountModel*/}
        <Modal
         isOpen={createAcc}
         style={customStyles2}
         contentLabel="Example Modal"
        >
           <div> 
                <h2 className='modelHead'> Create Account</h2>
                <button className='x' onClick={()=>{
                    setAcc(false);
                    setUserName(undefined);
                    setPassword(undefined);
                }}>x</button>
            </div><br/>
            <center>
                <div className='logInbtns'>
                    <div>
                        <input 
                            className='inputBox'
                            type='text'
                            placeholder='User Name' 
                            onChange={
                               (e)=>e.target.value=='' ? setUserName(undefined):setUserName(e.target.value)
                            }/>
                        <br/><br/>
                        <input 
                            className='inputBox'
                            type='password'
                            placeholder='Password'
                            onChange={
                                (e)=>e.target.value=='' ? setPassword(undefined):setPassword(e.target.value)
                            }/>
                        <br/><br/>
                        <input 
                            className='inputBox'
                            type='password' 
                            placeholder='Re-Enter Password'
                            onChange={
                                (e)=>e.target.value=='' ? setRePassword(undefined):setRePassword(e.target.value)
                            }/>
                        <br/><br/>
                        <button 
                            className='btn btn-primary' 
                            disabled={userName!=undefined&&PassWord!=undefined&&rePassword!=undefined&&PassWord==rePassword ? false:true}
                            
                        >
                            Create Account
                        </button>
                    </div>
                       
                <div className='google-fb'>
                <GoogleLogin
                    clientId="1021090884211-u92l9v86p37r96dfq9b11q2e2asl4mol.apps.googleusercontent.com"
                    buttonText="SIGN-UP WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> <br/> <br/> 

                <FacebookLogin
                    appId="859576005343218"
                    buttonText="SIGN-Up"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    icon="fa-facebook"
                    textButton='&nbsp;&nbsp;SIGN-UP WITH FACEBOOK'
                ></FacebookLogin>
                </div>

                </div> 
            </center>   
        </Modal>
        

        {/*Place Order Model*/}
        <Modal
          isOpen={placeOrder}
        // isOpen={false}
        style={ customStyles3}
          
        >
           <header className='paynow-div'> 
            <span><button className='x' onClick={()=>{setPlaceOrder(false);setTotalPrice(0)}}>x</button></span>
            <span><h2>Place Your Order</h2></span> <br/>
            <span><h4 className='total'>Total: &nbsp;{totalPrice}</h4></span>
             <button
              className={totalPrice<=0 ? 'paybtn btn btn-black': 'paybtn btn btn-danger'}
              disabled={totalPrice<=0 ? true:false}
              onClick={()=>{
                setPayment(true);
                setOrderName(undefined);
                setOrderMail(undefined);
                setOrderNumber(undefined);
              }}
            >
                Pay Now
            </button>
            </header>
            <br/><br/>
            {
                menu.length &&  menu.map((item,index)=><div key={index}>
                <div className='menu_heading'>
                  <img className='menu_poster' src={item.thumb}/>
                  <div><h5 className='itemName'>{item.itemName}</h5>&nbsp;{item.isVeg ? <sub className='veg'>Veg</sub>:<sub className='non-veg'>Non-Veg</sub>}</div>
                </div>
                <p>{item.itemDescription}</p>
                &#8377;{item.itemPrice}&nbsp;<span>
                    <button 
                       value={item.itemPrice}
                       onClick={(e)=>{
                             setTotalPrice((totalPrice>=0)&&(totalPrice+Number(e.target.value)));
                             var menu_1=[...menu];
                             menu_1[index].qty+=1;
                             setMenu(menu_1);
                            }
                        }
                       className='btn btn-outline-secondary btn-sm'>
                          +
                    </button>
                    &nbsp;
                    {menu[index].qty}
                    &nbsp;
                    {menu[index].qty<=0 ? null: (
                    <button
                        value={item.itemPrice} 
                        onClick={(e)=>{
                               setTotalPrice((totalPrice>0)&&totalPrice-Number(e.target.value));
                               var menu_1=[...menu];
                               menu_1[index].qty-=1;
                               setMenu(menu_1);
                            }}  
                            disabled={menu.qty<0}
                        className='btn btn-outline-secondary btn-sm'>
                            -
                    </button>
                    )}
                    </span>
                <hr/>
                </div>)
            }
        </Modal>

        {/*payment details model*/}
        <Modal
             isOpen={payment}
            // isOpen={false}
              style={customStyles4}
        >
            <div >
                <header className='paynow-div'> 
                <span><button className='x' onClick={()=>{setPayment(false)}}>x</button></span>
                <span><h2>Enter Details and Pay</h2></span> <br/>
                <div>
                    <h1 className='paymentModelh1'>{rName}</h1>
                    <button
                    disabled={orderName!=undefined && orderMail!=undefined && orderNumber!=undefined && orderNumber.length==10? false:true}
                    className={orderName!=undefined && orderMail!=undefined && orderNumber!=undefined && orderNumber.length==10? 'amountbtn btn btn-success': 'amountbtn btn btn-black'}
                    onClick={()=>{
                        makePayment();
                        setTimeout(() => {
                            setPayment(false);
                            setPlaceOrder(false);
                            setTotalPrice(0);
                        }, 0);
                    }}
                    >
                        &#8377;&nbsp;{totalPrice}
                    </button>
                </div>
                </header>

                <div className='inputs-container'>
                    <input 
                        id='nameInput' 
                        className='input' 
                        type='text' 
                        placeholder='Enter Name'
                        onChange={
                            (e)=>e.target.value=='' ? setOrderName(undefined):setOrderName(e.target.value)
                        }
                    />
                    
                    <input 
                        id='mailInput' 
                        className='input' 
                        type='email' 
                        placeholder='Enter Mail-Id'
                        onChange={
                            (e)=>e.target.value=='' ? setOrderMail(undefined):setOrderMail(e.target.value)
                        }
                    />
                
                    <input 
                        id='phoneInput' 
                        className='input' 
                        type='number'
                        maxLength='10' 
                        pattern="[1-9]{1}[0-9]{9}" 
                        placeholder='Enter Mobile Number'
                        onChange={
                            (e)=>e.target.value=='' ? setOrderNumber(undefined):setOrderNumber(e.target.value)
                        }
                    />
               </div>
            </div>
        </Modal>
        {numberLimit()}
    </div>
  )

