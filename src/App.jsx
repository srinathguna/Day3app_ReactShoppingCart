import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  let data = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brandName:"Rayban",
      name: "Men's SunGlasses",
      price: 1200
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      brandName:"Boat",
      name: "Headphone",
      price: 1800
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brandName:"Samsung",
      name: "Active smartwatch",
      price: 5600
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1542219550-37153d387c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brandName:"Nike",
      name: "Canvas Shoe",
      price: 10600
    },
    {
      id:5,
      imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brandName:"Curology",
      name: "Skin Care cream",
      price: 700
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brandName: "coco",
      name: "Channel spray",
      price: 900
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brandName: "sun",
      name: "Sun sipper waterbottle",
      price: 900
    },
    {
      id: 8,
      imageUrl: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brandName: "coco",
      name: "coco body oil",
      price: 1900
    }
  ]
  const [products, setProducts] = useState(data);
  return (
    <>
      <Nav count={count} setCount={setCount} />
      <Header />
      <ProductSection products={products} setProducts={setProducts} count={count} setCount={setCount}/>
      <Footer/>
    </>
  )
}

export default App
