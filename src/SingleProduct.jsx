

const SingleProduct = ({ product, handleCart }) => {
  // console.log(product)
  return (
    <div>
      <div className="card">
        <img className='card-img' src={product.image} />

        <h1>{product.title.slice(0, 11)}</h1>
        <p>{product.description}</p>

        <div className="card-footer">
          <h1>520$</h1>
          <button onClick={() => handleCart(product)} className='add-btn'>Add to cart</button>
        </div>

      </div>
    </div>
  );
};

export default SingleProduct;