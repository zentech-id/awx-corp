import { useParams } from "react-router-dom"
import Navbar from "./navbar";
import ProductSection from "./products/productsSection";

import { IoBed } from "react-icons/io5";
import { FaToilet, FaCouch } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";

export default function Products() {
  const productId = "dpib-miniatur"
  const productTitle = `${productId.split("-")[0].toUpperCase()} — ${productId.split("-")[1].charAt(0).toUpperCase() + productId.split("-")[1].slice(1)}`
  return (
    <>
      <Navbar active="products" />
      <ProductSection 
        productMajor="Desain Permodelan Bangunan"
        productType="Miniatur"
        productTitle="Miniatur  Cluster A — Desain Hunian Modern"
        specIcon={[
          <IoBed color="FFCB7C" size={64}/>,
          <FaToilet color="FFCB7C" size={64}/>,
          <FaCouch color="FFCB7C" size={64}/>,
          <MdKitchen color="FFCB7C" size={64}/>,
        ]}
        specCapt={[
          [
            "Terdiri dari 3 kamar tidur",
            "1 kamar utama + 2 kamar tambahan",
            "Desain ergonomis dan pencahayaan alami",
          ],
          [
            "2 kamar mandi",
            "Kamar mandi utama di dalam kamar tidur utama",
            "Kamar mandi bersama dengan akses mudah",
          ],
          [
            "Ruang keluarga luas dan terbuka",
            "Terhubung langsung dengan ruang makan",
            "Memberikan kesan hangat dan nyaman",
          ],
          [
            "Dapur modern dengan konsep minimalis",
            "Tata letak efisien dan fungsional",
            "Cocok untuk aktivitas memasak harian",
          ],
        ]}
      />
    </>
  )
}