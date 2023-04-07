import React, {useEffect, useState} from 'react';
import './App.css';
import {db} from "./Firebase";
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import  dbk  from './hero-pattern-dark.webp';
import  lbk  from './hero-pattern.webp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import axios from 'axios';

import LightModeIcon from '@mui/icons-material/LightMode';
function App() {
  const [user, setuser] =useState("");
  const [currentUser,setcurrentUser]=useState("");
  const [message, setmessage] =useState("done!");
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const empty={color:"rgb(15, 23, 42)"};
  const [open, setOpen] = useState(false);
  const  vertical="bottom";
  const horizontal= "center";

  const [links, setlinks] =useState({});









  ///////////////theme change///////////
  const [isdark,setisdark]=useState(false);
const [toggle, settoggle] =useState(false);
const [theme, settheme]=useState("Dark");
const [body,setbody]=useState(empty);
const [torso,settorso]=useState(empty);
const bodyD={
"backgroundColor": "rgba(17, 24, 39, 0.9)",
"color": "#fff"
};

const bluebutton={
background: "#336fd1",
boxshadow:"0px 24px 38px 3px hsla(0,0%,0%,0.14), 0px 9px 46px 8px hsla(0,0%,0%,0.12), 0px 11px 15px -7px hsla(0,0%,0%,0.2)"
};
const brownbutton={
  background: "#46576e",
  boxshadow:"0px 24px 38px 3px hsla(0,0%,0%,0.14), 0px 9px 46px 8px hsla(0,0%,0%,0.12), 0px 11px 15px -7px hsla(0,0%,0%,0.2)"
  };


const [textfeilds,settextfeilds]=useState(empty);
const textfeildsD={
border:"1.8px solid #333333",
"backgroundColor": "#111827",
"color": "#fff"
};
const themeset =( x)=>{
  if (x===false )
  {
    setisdark(false);
    settheme("Dark ");
    setbody(empty);
    settextfeilds(empty);
    settorso(empty);
  }
  else{
    setisdark(true);
    settheme("Light ");
    setbody(bodyD);
    settextfeilds(textfeildsD);
    settorso({"backgroundColor":"#111827"});
  }

};

const themechange =(e)=>{
  themeset(e.target.checked);
}
useEffect(()=> {themeset(defaultDark);settoggle(defaultDark)},[]);
/////////////////////////////////////theme end




function linkchange(key , e){
  let temp={...links}
  temp[key]=e.target.value
  setlinks(temp);

}

useEffect(() => {
  console.log('useEffect ran. lonks is: ', links);
}, [links]);


useEffect(() => {
  console.log('useEffect ran. userkey is: ', user);
}, [user]);
/////////////////////data fetch //////////////

function isEmpty(ob){
  for(var i in ob){ return false;}
 return true;
}

const getdata = async () => {
  try {
    const sendData={
      "type":"get",
      "key":user
  }
    let response = await axios({'method':'POST',
    'url':"https://c13xazudu6.execute-api.us-east-1.amazonaws.com/settext",
    'data':sendData,
    })
    response=await response.data.data;
    return response;
  }
  catch (e) {
    return {};
  }
}

async function getlinks(){
  
  if(user==""){
    return
  }
  let data;
  setcurrentUser(user);
  setlinks({});
  data = await getdata();
  console.log("first")
  console.log(data);
  if(isEmpty(data)){
    setmessage(" error ocured try again check internet connectivity") ;

    setOpen(true);
  }
  else{
    if(data.created==0){
      setlinks(data);
      setmessage(" fetching data !!!") ;
      setOpen(true);
    }
    else{
      setlinks(data);
    setmessage("  key created !!!") ;
    setOpen(true);
    }
    
  }
 
  
    }





const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};


const keychange=(e)=> {
  if (e.key === 'Enter') {
    getlinks()
  }

}

// writing data

const setdata = async () => {
  try {
    const sendData={...links};
    sendData["type"]="POST";
    sendData["user"]=currentUser;
    console.log(sendData)
    let response = await axios({'method':'POST',
    'url':"https://c13xazudu6.execute-api.us-east-1.amazonaws.com/settext",
    'data':sendData,
    });
    console.log(response)
    return response;
  }
  catch (e) {
    return {};
  }
}

function linkupdate(key){
  if(user==""){
    return ;
  }
setdata()

}

const saveHit=(key,e)=>{
  if (e.key === 'Enter') {
    linkupdate(key);
    setOpen(true); 
    setmessage("Data Saved !!!");

  }

};







  return (
    


  <div className='body' style={body}>

<div className="sticky">
<div className='header' style={body}>
<a className='title1' style={body} href='/' title="dumplinks.ga" >Dump<span style={{color:"#3c82f6"}}>L</span>inks</a>


<div className='toggle' title="change theme" >
<LightModeIcon  style={{opacity:isdark?"1":"0.5",marginRight:"5px"}} />
<label className="switch">
  <input  type="checkbox" checked={toggle}  onChange={(e)=>{settoggle(e.target.checked); themechange(e)}}/>
  <span className="slider round"></span>
</label>
<DarkModeIcon  style={{opacity:isdark?"0.5":"1"}}/>
</div>


</div>
</div>





<div className="torso" style={torso}>
<img src={dbk} style={{display:isdark?"block":"none"}} className="lighting1"/>
<img src={lbk} style={{display:isdark?"none":"block"}} className="lighting2"/>


























<div className="key" >
    
  <p className="description">Dumplinks is a platform to share links & texts between devices(pc ⇄ phone).
First time users enter any key of your own choice and hit <b>get data </b>
 to create a new key. Enter the same key later and hit <b>get data </b> to get the data saved.</p>
  <div className='key_input'> 
  <input style={textfeilds}   autoFocus  type="textbox" placeholder="*Enter key" className="copyLinkInput1"  onChange={(e)=>{setuser(e.target.value);}} onKeyPress={keychange} value={user} />
{/* <button onClick={()=>{getdata()}}>click</button> */}
  <button  style ={{background: "#3c82f6",
boxshadow:"0px 24px 38px 3px hsla(0,0%,0%,0.14), 0px 9px 46px 8px hsla(0,0%,0%,0.12), 0px 11px 15px -7px hsla(0,0%,0%,0.2)"}
} onClick={()=>{getlinks(); }}  >Get Data </button>
</div>
</div>

<div className="copylinks">


<div className="copyLinkElement" key="link1">
    <label>
    <input style={textfeilds}    type="textbox" placeholder="enter any text and hit save" className="copyLinkInput"  onChange={e =>   linkchange("link1",e)}  onKeyPress={(e)=>saveHit("link1",e)} value={links["link1"]} />
    <button style ={isdark? bluebutton: {background: "#5e98f8"}} onClick={()=>{linkupdate("link1");setOpen(true); setmessage("Data Saved !!!")   }} >save link!</button>
    <button style ={isdark? brownbutton: {background: "#5C6B70"}} onClick={ () => {navigator.clipboard.writeText(links["link1"]);setOpen(true); setmessage("copied !!!") }}>copy link!</button>
    </label>
    </div> 

    <div className="copyLinkElement" key="link2">
    <label>
    <input style={textfeilds}    type="textbox" placeholder="enter any text and hit save" className="copyLinkInput"  onChange={e =>   linkchange("link2",e)}  onKeyPress={(e)=>saveHit("link2",e)} value={links["link2"]}/>
    <button style ={isdark? bluebutton: {background: "#5e98f8"}} onClick={()=>{linkupdate("link2");setOpen(true); setmessage("Data Saved !!!")   }} >save link!</button>
    <button style ={isdark? brownbutton: {background: "#5C6B70"}} onClick={ () => {navigator.clipboard.writeText(links["link2"]);setOpen(true); setmessage("copied !!!") }}>copy link!</button>
    </label>
    </div> 

    <div className="copyLinkElement" key="link3">
    <label>
    <input style={textfeilds}    type="textbox" placeholder="enter any text and hit save" className="copyLinkInput"  onChange={e =>   linkchange("link3",e)}  onKeyPress={(e)=>saveHit("link3",e)} value={links["link3"]}/>
    <button style ={isdark? bluebutton: {background: "#5e98f8"}} onClick={()=>{linkupdate("link3");setOpen(true); setmessage("Data Saved !!!")   }} >save link!</button>
    <button style ={isdark? brownbutton: {background: "#5C6B70"}} onClick={ () => {navigator.clipboard.writeText(links["link3"]);setOpen(true); setmessage("copied !!!") }}>copy link!</button>
    </label>
    </div> 

















</div>







<div className="copylinks">

<div className="copyTextElement" key="text1">
    
    <textarea style={textfeilds} placeholder="enter any text and hit save" className="copyTextInput" onChange={(e)=> linkchange("text1",e)}    value={links["text1"]}></textarea>
    <button style ={isdark? bluebutton: {background: "#5e98f8"}} onClick={()=>{linkupdate("text1");setOpen(true); setmessage("Data Saved !!!")   }} >save link!</button>
    <button style ={isdark? brownbutton: {background: "#5C6B70"}} onClick={ () => {navigator.clipboard.writeText(links["text1"]);setOpen(true); setmessage("copied !!!") }}>copy link!</button>
   
    </div> 


    <div className="copyTextElement" key="text2">
    
    <textarea style={textfeilds} placeholder="enter any text and hit save" className="copyTextInput" onChange={(e)=> linkchange("text2",e)}    value={links["text2"]}></textarea>
    <button style ={isdark? bluebutton: {background: "#5e98f8"}} onClick={()=>{linkupdate("text2");setOpen(true); setmessage("Data Saved !!!")   }} >save link!</button>
    <button style ={isdark? brownbutton: {background: "#5C6B70"}} onClick={ () => {navigator.clipboard.writeText(links["text2"]);setOpen(true); setmessage("copied !!!") }}>copy link!</button>
   
    </div> 












</div>



<Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2399} 
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
</div>
</div>  
  );
}

export default App;
