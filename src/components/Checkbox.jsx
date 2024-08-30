import { useState } from "react";
import { toppings } from "../data.js";

export default function CheckBox() {

  const [total, setTotal] = useState(0)
  const [nameList, setNameList]= useState([])
  const [sumList,setSumList] =useState(nameList)
  function hdlChange(e,price,index) {
    if(e.target.checked){
        setTotal(total+(+e.target.value))
        setNameList([...nameList, {name: e.target.name,price: e.target.value}])
    }else{
        setTotal(total-(+e.target.value))
        const newNameList = nameList.filter((el)=> el.name !== e.target.name)
        console.log(newNameList,'=====')
        setNameList([newNameList])
    }
  }
  console.log(nameList)
  
  const hdlCheckout =()=>{
    setSumList(nameList)
  }

  return (
    <>
    <div>
      {toppings.map((item, index) => (
        <div className="flex bg-cyan-600">
          <input type="checkbox" index = {index} name={item.name} value={item.price} onChange={hdlChange} />
          {item.name}
          <div>{item.price}</div>
        </div>
      ))}
      <h3>Total : {total}</h3>
    </div>
    <button className="border bg-cyan-500" onClick={(e)=>{hdlCheckout(toppings.price,toppings.name)}}>Check out</button>
    {sumList.map((item)=>
      <p>{item.name} : {item.price}</p>
    )
    }
    </>
  );
}
