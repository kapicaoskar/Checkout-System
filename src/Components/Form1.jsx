export default (props) => {
    return (
<div id="container-one" className="max-w-[674px] bg-gray-700 h-[803px] rounded-l-md	flex justify-center	 m-auto  inset-0 absolute ml-72">
<i id="arrow" className="fa-sharp fa-solid fa-arrow-left absolute"></i>
<div className=" w-[60px] h-[60px] absolute mt-[68px] mr-48">
<img src={props.info.sellerLogo} className="w-4/4 h-4/4"></img>
</div>
<p className="text-white text-right   Inter font-bold mt-[85px] mr-[4px]">{props.info.seller}</p>
<div id="valid" className="w-[118px] h-[31px] mt-[83px] mr-[-100px] rounded-md" >
<p className="text-white    Inter font-bold  ml-[13px] mt-0.5">Sprzedawca</p>
</div>
<p className="text-white text-right absolute  Inter font-bold mt-[180px] mr-[135px]">Zapłać {props.info.seller}</p>
<p id="priceDiv"className="text-white text-right absolute  Inter font-bold mt-[195px] mr-[105px]">{props.info.price} {props.info.currency}</p>
<img src={props.info.productImage} className='absolute inset-x-0 rounded-full w-[64px] h-[64px] mt-[270px] ml-[175px] border-2 border-indigo-500    '></img>
<p id="productName"className="text-white text-right absolute  Inter font-bold mt-[277px] mr-[20px]">{props.info.productName}</p>
<p id="productPrice"className="text-white text-right absolute  Inter font-bold mt-[297px] mr-[56px]">{props.info.price} {props.info.currency}</p>
<p className="mr-[205px] text-white    Inter font-bold mt-[365px]  absolute">Kod rabatowy</p>
<input id="promocode" type="text" placeholder="Twój kod" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[300px] h-[46px] rounded-lg absolute  flex justify-center m-auto ml-[-20px]  mt-[395px;]  bg-slate-800 "></input>
<p className="mr-[165px] text-white    Inter font-bold mt-[465px]  absolute">Karta podarunkowa</p>
<input id="giftcard" type="text" placeholder="Twój kod z karty podarunkowej" className="border-transparent focus:outline-none placeholder:text-base    text-white pl-[14px] w-[300px] h-[46px] rounded-lg absolute  flex justify-center m-auto ml-[-20px]  mt-[495px;]  bg-slate-800 "></input>
<p className="absolute text-base Inter text-white mt-[745px] mr-[545px]"> <a href={props.info.termsLink}>Terms</a> | <a href={props.info.privacyLink}>Privacy</a></p>
<p id="text-text2" className='text-left pl-2 m-auto ml-[5px] mt-[768px] absolute inset-x-0 text-white text-base font-bold'>Powered by <a className="text-indigo-500">OskarDev</a></p>
</div>
    )
}