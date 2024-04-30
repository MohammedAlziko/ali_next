import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import React from 'react';

import "./pro-details.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import { notFound } from 'next/navigation';
import Image from 'next/image';
import { proData } from '../../(home)/proData';





// async function getData(iddd){
//     const res = await fetch(`http://localhost:4000/products/${iddd}`)
   
//    if(!res.ok){
//     notFound()
//    }
   
//    return res.json()
   
//    }

// export async function generateMetadata({params}){
//   const dd = await getData(params.id)
//   return{
//     title:dd.title,
//     description:dd.description
//   }
// }



 const Page =async ({params}) => {

  
      
      // const data =await getData(params.id);

const data =proData.find((item) => {
  return item.id === params.id
}) ;


  return (
    <div 
    className="proDetails"
    style={{ height: "120vh",
      display: "grid",
      alignItems: "center",
      gridTemplateRows:"auto 1fr auto"}} >

<Header  />

<main style={{ textAlign: "center" }} className="flex">
  
  <Image width={266} height={270}  alt="" src={`${data.productImg}`} />
  <div className="product-details">
    <div style={{ justifyContent: "space-between" }} className="flex">
      <h2>{data.title}</h2>
      <p className="price">${data.price}</p>
    </div>
    <p className="description">
   {data.description}
    </p>
    <button className="flex add-to-cart">
      <FontAwesomeIcon style={{width:"1rem"}} icon={faCartPlus} />
      Add To Cart
    </button>
  </div>
</main>


    
<Footer   />
    
    </div>
  )
}

export default Page