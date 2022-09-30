import React from 'react' ;
import './index.css';
const CartItem = (props) => {
   
        const {price , title , qty } = props.product ;
        const {product , onIncreaseQuantity , onDecreaseQuantity , onDeleteProduct} = props ;
        return (
            <>
           <div className='cart-item'>
            <div className ='left-block'>
                <img style={styles.image} src = {product.img}/> 
            </div>
            <div className ='right-block'>
                <div style={{fontSize : 25}}>{title}</div>
                <div style={{color : '#777'}}>Rs {price}</div>
                <div style={{color : '#777'}}>Qty :{qty}</div>
                <div className = "cart-item-actions">
                  
                    <img 
                    alt = 'increase'
                     className='actions-icons' 
                     src='https://cdn-icons-png.flaticon.com/512/992/992651.png' style={{height: 25 , width: 25 ,margin : 10  }}
                      onClick={ () => onIncreaseQuantity(product)}
                      />
                    <img
                     alt = 'decrease' 
                     className='actions-icons' 
                     src='https://cdn-icons-png.flaticon.com/512/992/992683.png'style = {{height :25 , width: 25 ,margin : 10  }}
                     onClick={ () => onDecreaseQuantity(product) }
                      />
                    <img 
                    alt = 'delete' 
                    className='actions-icons'
                     src='https://cdn-icons-png.flaticon.com/512/484/484611.png'  style = {{height :25 , width: 25 ,margin : 10  }}
                     onClick = {() => onDeleteProduct(product.id)}
                     />
                </div>
            </div>
           </div> 
           </>
        )
    }


const styles = {
    image : {
        height : 110 ,
        width : 110 ,
        borderRadius : 4 ,
        background : '#777' ,
    }
}
export default CartItem ;