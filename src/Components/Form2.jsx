

export default (props) => {
let created = false
let name = ""
let email = ""
let dwelling = ""
let post = ""
let voideship = ""
let paymentMethod = ""

const validateData = () => {
if (name == "" | email == "" | dwelling == "" | post == "" | voideship == "" || paymentMethod == "") {
    return false
} else {
    return true
}
}

    const pay = () => {
    if( validateData() == true ){
        window.location.href = "https://github.com/kapicaoskar"
        //YOUR THINGS HERE
    
    } else {
        if(created == false){

        const para = document.createElement("H2");
        para.setAttribute("id", "textError")
    const node = document.createTextNode("Upewnij się że wypełniłeś wszystkie pola!");
    para.appendChild(node);
    const footerDoc = document.querySelector("#container-two")
    footerDoc.appendChild(para)
    created = true
        }
    }

}
const handleChangeName = (event) => {
    name = event.target.value;
};

const handleChangeEmail = (event) => {
    email = event.target.value;
};
const handleChangeDwelling = (event) => {
    dwelling = event.target.value;
};
const handleChangePost = (event) => {
    post = event.target.value;
};
const handleChangeVoideship = (event) => {
    voideship = event.target.value;
};

const validatePayment = (event) => {
paymentMethod = event.target.id
document.getElementById("blik").style.border = "0px solid";
document.getElementById("paypal").style.border = "0px solid";
document.getElementById("transfer").style.border = "0px solid";
document.getElementById(event.target.id).style.border = "1px solid #818CF8";
}


    return (
<div id="container-two" className="max-w-[674px] bg-slate-800 h-[803px] rounded-r-md	flex justify-center	 m-auto  inset-0 absolute mr-72">
<p className="ml-[-295px] text-white    Inter font-bold mt-[80px] flex justify-left">Imię i nazwisko</p>
<input id="nick" type="text" placeholder="Imię i nazwisko" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[440px] h-[46px] rounded-lg absolute  flex justify-center m-auto ml-[25px]   mt-[110px;]  bg-gray-700 " onChange={handleChangeName}></input>
<p className="ml-[-365px] text-white    Inter font-bold mt-[190px] flex justify-left absolute">Email</p>
<input id="mail" type="email" placeholder="Adres email" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[440px] h-[46px] rounded-lg absolute  flex justify-center m-auto ml-[25px]  mt-[220px;]  bg-gray-700 " onChange={handleChangeEmail}></input>
<p className="ml-[-270px] text-white    Inter font-bold mt-[300px] flex justify-left absolute">Metoda płatności</p>
<div id="paypal" className="w-[138px] h-[80px] flex justify-center      m-auto mr-[406px] absolute inset-x-0  bg-gray-700 rounded-lg mt-[335px]  " onClick={validatePayment} >
<img alt="paypal" src="https://cdn.discordapp.com/attachments/1076893397597573281/1077314141003448351/Paypal_2014_logo.png" className="w-[50px] h-[50px] mt-4" onClick={validatePayment}></img>
</div>
<div id="blik" className="w-[138px] h-[80px] flex justify-center      m-auto mr-64 absolute inset-x-0  bg-gray-700 rounded-lg mt-[335px]  "  onClick={validatePayment}>
<img alt="blik" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9YW62uZhO5OC4u_c5J474NRd2R7PTPehXMXfUNpt0g&s" className="w-[70px] h-[40px] mt-5" onClick={validatePayment}></img>
</div>
<div id="transfer" className="w-[138px] h-[80px] flex justify-center      m-auto  absolute inset-x-0 mr-[105px] bg-gray-700 rounded-lg mt-[335px] " onClick={validatePayment}>
<img id="transfer" alt="transfer-logo" src="https://cdn.discordapp.com/attachments/1057070797996441621/1065716194142855198/22323232-removebg-preview.png" className="w-[70px] h-[70px] ml-4 mt-[6px] absolute" onClick={validatePayment}></img>
</div>

<p className="ml-[-250px] text-white    Inter font-bold mt-[440px] flex justify-left absolute">Adres rozliczeniowy</p>
<input id="dwelling" type="text" placeholder="Twój adres" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[440px] h-[46px] rounded-lg absolute  flex justify-center m-auto ml-[25px]  mt-[475px;]  bg-gray-700 " onChange={handleChangeDwelling}></input>
<input id="postcode" type="text" placeholder="Kod pocztowy" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[213px] h-[46px] rounded-lg absolute  flex justify-center m-auto ml-[-200px]  mt-[535px;]  bg-gray-700 " onChange={handleChangePost}></input>
<input id="voideship" type="text" placeholder="Miejscowość" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[213px] h-[46px] rounded-lg absolute  flex justify-center m-auto ml-[250px]  mt-[535px;]  bg-gray-700 " onChange={handleChangeVoideship}></input>
<p className="absolute w-[440px] ml-8 Inter font-regular mt-[590px]" id="text">Klikając przycisk “Zakup” oświadczam, że zapoznałem/-am się z regulaminem serwisu <a className=""> five-pay.net ( https://five-pay.net/tos ) </a> </p>
<p className="absolute w-[440px] ml-8 Inter font-regular mt-[635px]" id="text">Klikając przycisk “Zakup” oświadczam, że zapoznałem/-am się, że nie przysługuje mi prawo do odstąpienia od umowy zawartej elektronicznie</p>
<button id="payButton" className="text-white text-2xl Inter font-bold pt-1 w-[440px] duration-500 hover:bg-indigo-700     h-[45px] rounded-lg absolute top-2/4 flex justify-center m-auto mt-[310px]   bg-indigo-400  ml-8 " onClick={pay} >Zakup</button>

</div>
    )
}