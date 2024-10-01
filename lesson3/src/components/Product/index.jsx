const Product = ({name, amount,done})=>(
    <div className='product-list'>
        <span>{name}</span>
        <span>{amount}</span>
        <span className={done ? 'item-done-tick' :null}> </span>
  
    </div>
  )
  export default Product