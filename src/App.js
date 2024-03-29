import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
class App extends React.Component  {
  constructor(){
    super();
    this.state = {
        products : [
            {
                price :999 ,
                title : 'Watch',
                qty :  1 ,
                img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id: 1 ,
            },
            {
                price : 9999,
                title : 'Mobile' ,
                qty : 1 ,
                img : 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                id : 2 ,
            },
          {
            price : 40000 ,
            title : 'Laptop',
            qty : 1 ,
            img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
            id  :  3 ,
          }, 
          {
            price : 40000 ,
            title : 'Laptop',
            qty : 1 ,
            img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
            id  :  3 ,
          }
        ]
    }
    
}
handleIncreaseQuantity = (product) => {
const {products} = this.state ;
const index = products.indexOf(product);

products[index].qty +=1 ;

this.setState({
    products 
})
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state ;
    const index = products.indexOf(product);

     if( products[index].qty===0){
        return ;
     }
    products[index].qty -=1 ;

    this.setState({
        products 
    })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state ;

        const items = products.filter((item)=> item.id !== id);
        this.setState({
            products : items
        })
    }

    getCartCount = ()=> {
      const {products} = this.state ;

      let count = 0 ;
      products.forEach((product)=>{
        count += product.qty ;
      })
      return count ;
    }
    getCartTotal = () => {
      const {products} = this.state ;

      let cartTotal = 0 ;

      products.map((product)=>{
        cartTotal = cartTotal + product.qty * product.price ;
      })
    
      return cartTotal ;
    }
  render(){
    const {products} = this.state ;
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity} 
      onDecreaseQuantity = {this.handleDecreaseQuantity}
       onDeleteProduct = {this.handleDeleteProduct}
      /> 
      <div style ={{padding : 10 , fontSize : 20 }}>TOTAL :{this.getCartTotal()}</div>
    </div>
  );
}
}
export default App;
