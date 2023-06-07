import  { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ProductContext } from '../Contexts/ProductsContext'
import { Button } from 'react-bootstrap'
import RatingPage from '../components/functionComponents/RatingPage'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaRegGrinTongueSquint } from 'react-icons/fa'
import { CartContext } from '../Contexts/CartContext'



export default function Description() {
    const {id , quantity} = useParams() // i removed the quantity from here  
    const {products } = useContext(ProductContext)
    const [product , setProduct] = useState(null)
    const [ Quantity, setQuantity ] = useState(0);
    const {mycounter , setMycounter} = useContext(CartContext)
    
    const add = () => {
      setQuantity(Quantity + 1);
      setMycounter(mycounter + 1)
    };
    const remove = () => {
      setQuantity(Quantity - 1);
      setMycounter(mycounter - 1);
    };

    
    useEffect(()=>{
        setProduct(products.find((product) => product.id === parseInt(id)))
        
    },[id,products])
  return (
    <div>
<div style={{alignItems:'center' , position:'relative'}}>
<img 
style={{
  marginTop: '25px',
  padding: '15px',
  marginLeft: '20px',
  width: '400px',
  borderRadius: '50px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
}}  src={product?.image} alt="" />
 
 <p style={{fontSize:'20px'}}>Product Name:{product?.title}</p>
 </div>

        
        <div style={{alignItems:'center' , position:'relative' , marginLeft:'500px' ,bottom: '400px' }}>
        <div style ={{fontSize:'40px'}}>Price : {product?.price}$</div>
        <div style ={{fontSize:'40px'}} >Qunatity : {Quantity} </div>
        


        
        
        <div  style ={{fontSize:'25px'}}>Description : {product?.description}</div>
        </div>
        
        < div  style={{alignItems:'center' , position:'relative' , marginLeft:'500px' ,bottom: '400px' }}> 
        <RatingPage/>




        <div className='justify-content-center my-2' style= {{alignItems:'center'  , position:'relative' ,bottom: '0.5px' }} >
            <Button
              variant="success"
              style={ { width: "10%" }}
              onClick={add}
            >
              add<FaRegGrinTongueSquint></FaRegGrinTongueSquint>
            </Button>
            </div>
           
             <div  style= {{bottom: '0.5px' }}>
              
                


                <Button variant="danger"  style={ { width: "10%" }}x
                onClick={remove}
                >
                  remove<FaRegGrinTongueSquint></FaRegGrinTongueSquint>
                </Button>
                 
             
              
            
          </div>
        </div> 
        
        
    </div>
  )
}
