import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Productdisplay(props) {
  console.log(props)
   const {allproduct}=props
   const [cartItems, setCartItems] = useState([]);
      
        const isInCart = (productId) => cartItems.some(item => item.id === productId);
      
       
        const addToCart = (product) => {
          setCartItems([...cartItems, product]);
        }
      
         const removeFromCart = (productId) => {
          setCartItems(cartItems.filter(item => item.id !== productId));
        }
        const value=cartItems.length
    return (
      <>
   <Box sx={{ width: 'auto', padding: 1}}>
      <AppBar position="static"sx={{height:150}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginTop: 5.5}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, p:2, justifyContent:'center',textAlign:'center',marginTop:4 }}> Shop in style
          </Typography>
          <Button color="inherit" sx={{border:1}}>{value}< ShoppingCartIcon/></Button>
        </Toolbar>
      </AppBar>
    </Box>
      { allproduct.map((element)=>
         <Card  position="relative" component="div" sx={{ maxWidth: 320, maxHeight:330,display: 'inline-flex',flexWrap: 'wrap',p: 2,m:3,justifyContent:'center',right:150}}>
         <Stack sx={{maxHeight:100}}><CardMedia
           component="img"
           height="120"
           image={element.image}
           alt=""
         /></Stack>
         
         <CardContent>
           <Typography  variant="h5"  component="div" sx={{  maxHeight:30, overflow:'hidden' }}>
           {element.title}</Typography>
           <Typography variant="body2" component="div" sx={{ color: 'text.secondary', maxHeight:40, overflow:'hidden' }}>
             {element.description}
           </Typography>
           <Typography variant="h6" sx={{ color: 'text.secondary' }}>Category:
             {element.category}
           </Typography>
           <Typography  gutterBottom variant="h7"  component="div" > Price: 
             {element.price}
           </Typography>
         </CardContent>
         <CardActions >
         {isInCart(element.id) ? (
                 <Button  color="primary" variant="contained"  onClick={() => removeFromCart(element.id)}>Remove from Cart</Button>
               ) : (
                 <Button  color="primary" variant="contained" onClick={() => addToCart(element)}>Add to Cart</Button>
               )}
         </CardActions >
         <Paper elevation={10} />
         
       </Card>)

       
}
<div style={{backgroundColor:'darkgrey', height:100,color:'white',
  textAlign:'center',paddingTop:"40px"
}}>
  Copyright@2023

</div>
      </>
    )
  }


  
  export default Productdisplay