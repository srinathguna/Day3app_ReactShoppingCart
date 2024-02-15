import React,{useState} from 'react';

const Card = ({item,setCount}) => {
    const [status, setStatus] = useState(true)
    const addcart = () => {
        setStatus(false)
        setCount(val=>val+1)
    }
    const removecart = () => {
        setStatus(true)
        setCount(val=>val-1)
    }
    return (
        <>
            <div className="col mb-5" key={item.id}>
                <div className="card p-0 h-100">
                    <img class="card-img-top img-fluid card_img" src={item.imageUrl} alt="..."></img>
                    <div className="card-body p-2">
                        <div className="text-left">
                            <h5 className="fs-6 fw-bolder">{item.brandName}</h5>
                            <h5 className="fs-6">{item.name}</h5>
                            <h5 className="fs-5 fw-bolder">${item.price}</h5>
                            {
                                status?  <button className="btn btn-outline-dark" onClick={addcart}>Add to cart</button>:<button className="btn btn-outline-dark" onClick={removecart}>Remove from cart</button>
                            }
                                    
                                    
                        </div>
                    </div>                            
                </div>
            </div> 
        </>
    );
};

export default Card;