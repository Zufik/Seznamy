import Product from "../Product";

const ProductList = ({products}) => {
    return (
        <div>
        products.map(item =>  <Product name={item.product} amount={item.amount} done={item.done}></Product>)
        </div>  
    
            )
}

export default ProductList