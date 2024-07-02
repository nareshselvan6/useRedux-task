import React, {useEffect, useState } from 'react';
import "../Components/Card.css"
import { useDispatch, useSelector } from 'react-redux';
import { ADD, REMOVE, SUB } from '../redux/OperationSlice';

const Card = () => {

    // const [changed,setChanged] = useState(false)

    const dispatch=useDispatch();

    const {products}=useSelector((state)=>state.productstate)
    // console.log(products);

    // const[product,setProduct]=useState(products)

    const [totalqty, setTotalqty] = useState(0);
    const [totalcost, setTotalcost] = useState(0);


    useEffect(()=>{
        const totalqty = products.reduce((acc, product) => acc + product.quantity , 0);
        const totalcost = products.reduce((acc, product) => acc + product.quantity*  product.finalprice, 0);
        setTotalqty(totalqty);
        setTotalcost(totalcost)
       products
    },)
    console.log(totalqty);
    console.log(totalcost);


    const add=(index)=>{

        const add=products.filter(i=>i.id===index+1);
        
        dispatch(ADD(add[0]))  // why iam passing means , the array of object is 0th index thats why
      
    }

    const sub=(index)=>{

        const sub=products.filter((ele)=>ele.id===index+1)

        dispatch(SUB(sub[0]));  // why iam passing means , the array of object is 0th index thats why
    }

    const remove=(id)=>{
        
        const del=products.filter((ele)=>ele.id===id);
        dispatch(REMOVE(del[0]))  // why iam passing means , the array of object is 0th index thats why
    }

    const totalprice=()=>{
        console.log();
    }

  

    return (
        <div>
            <div className='totalvalueofcart'>
                <div className='totalcart'>
                    <h1>Totalquantity:{totalqty}</h1>
                    <h1>TotalPrice:{totalcost}</h1>

                </div>
            </div>
            {products?.map((element,index)=>{
                return(
                    <div key={element.id}>
                        
                        <div className='cart'>
                        <div className='products'>
                        <div className='productimage'>
                            <img src={element.image}/>
                            </div> 
                           
                            <div className='productdetails'>
                            <div className='img_price'>
                           <div className='product_img_text'>

                            
                            <h3>{element.title}</h3>
                           
                            <div className='incdec'>
                            
                            <button type='button' className='minus' onClick={()=> sub(index)}>-</button>
                            <p className='quantity'> {element.quantity} </p>
                            <button type='button' className='plus' onClick={()=> add(index)}>+</button>
                            <p className='qprice'><span>{element.price}</span></p>
                            </div>
                            </div>
</div>
                           
                            <p><span>Brand :</span> {element.brand}</p>
                            <p><span >Description : </span>{element.description}</p>
                            <p><span>In Stock : </span><span className='offer'>{element.stock}</span></p>
                            <p><span>Rating : </span>{element.rating}</p>
                            <div className='remove'>
                            <p><span>Discount Price : </span><span className='offer'>{element.discountPercentage}</span></p>
                            <button type='button' className='removebtn rem' onClick={()=>remove(element.id)} >Remove</button>

                            </div>
                            <hr/>
                            <p className="price">Price Per Item :<span > ${element.price}</span></p>
                            <p className="price">Discount Amount : <span className='offer'>${element.discountprice}</span> </p>
                            <p className="price">Final Price : <span className='final'> ${element.finalprice}</span></p>
                            <p className="price">Total Price :<span className='total'>${element.quantity*element.finalprice}</span> </p>
                            <div className='pay'>
                                
                            <button type='button' className='paynow'>Pay now</button>
                            </div>
                            {/* <div>
                                <h1>tttcost:</h1>
                            </div>
        */}
                    </div>
                    </div>
                    </div>
                    </div>
                )
            })}

        </div>
        
    );
};

export default Card;