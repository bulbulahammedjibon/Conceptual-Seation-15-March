

const CartAdd = ({item,index,handleDelete }) => {
    return (
        <div>
            <div className="cart-info">
                  <h5>{index+1}</h5>
                  <h5>{item.title.slice(0, 10)}</h5>
                  <h5>{item.price} </h5>
                  <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>
        </div>
    );
};

export default CartAdd;