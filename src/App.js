import './App.css';
import Form1 from './Components/Form1'
import Form2 from './Components/Form2'

function App() {
  const info = {
    "seller": "OskarDeveloper",
    "sellerLogo": "https://cdn.discordapp.com/attachments/1057070797996441621/1058458937722150942/Five_Solutions_15.png",
    "productName": "OskarDev 1 Month",
    "productImage": "https://cdn.discordapp.com/attachments/1057070797996441621/1058458937722150942/Five_Solutions_15.png",
    "price": "129.00",
    "currency": "PLN",
    "termsLink": "https://discordapp.com/",
    "privacyLink": "https://discordapp.com",
  } 
  return (
    <div className="App " >
  <div id="containers" >
<Form1 info={info}/>
<Form2 />
  </div> 
    </div> // APP
  );
}

export default App;
