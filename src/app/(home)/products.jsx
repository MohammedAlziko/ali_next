import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { proData } from './proData';



// async function getData(){
//   // await new Promise(res => setTimeout(res,50000))
//  const res = await fetch("http://localhost:4000/products",{next : {revalidate :0}})

// if(!res.ok){
// notFound()
// }

// return res.json()

// }








  
const Products = async () => {

// const products = await getData();

const products =proData ;


  return (
    <>
             <section className="products flex">
{
products.map((item) => {
  return(
    <article title={item.title} key={item.proImg} className="card">
    <Link href={`/productDetails/${item.id}`}>
      <Image height={260} width={266} src={item.productImg} alt="" srcSet="" />
    </Link>
    <div style={{ width: 266 }} className="content">
      <h1 className="title">{item.title.slice(0,15)}...</h1>
      <p className="description">
     {item.description.slice(0,111)}...
      </p>
      <div
        className="flex"
        style={{ justifyContent: "space-between", paddingBottom: "0.7rem" }}
      >
        <div className="price">{item.price}</div>
        <button className="add-to-cart flex">
          <i className="fa-solid fa-cart-plus" />
          Add To Cart
        </button>
      </div>
    </div>
  </article>

  )
})


}



   

     
      </section>

    </>
  )
}

export default Products