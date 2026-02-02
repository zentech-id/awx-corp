import { useParams } from "react-router-dom"
import Navbar from "./navbar";
import ProductCard from "./productCard";

import zentech from "../assets/ZenTech.png"


export default function Products({ path }) {
  const productIdParam = useParams();
  const productid = productIdParam.productid === undefined || productIdParam.productid === null ? path : productIdParam.productid;

  const productTitle = `${productid.split("-")[0].toUpperCase()} — ${productid.split("-")[1].charAt(0).toUpperCase() + productid.split("-")[1].slice(1)}`
  return (
    <>
      <Navbar active="products" />
      <div className="
        w-[calc(100vw-64px)] h-max max-w-[450px] absolute left-[50%] translate-x-[-50%] top-[200px] z-0
        md:w-[calc(100vw-100px)] md:max-w-[unset]
        lg:w-[calc(100vw-600px)] lg:max-w-[unset] lg:min-w-[940px]
      ">
        <h1 className="
          text-accent text-[40px] league-spartan
          md:text-[52px]
          lg:text-[52px]
          ">
          {productTitle}
        </h1>
        <div className="
          w-full h-max grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-[32px]
          md:w-[calc(100vw-100px)] md:max-w-[unset]
          lg:w-[calc(100vw-600px)] lg:max-w-[unset] lg:min-w-[940px]
        ">
          <ProductCard image={zentech} />
          <ProductCard image={zentech} />
          <ProductCard image={zentech} />
        </div>
      </div>
    </>
  )
}