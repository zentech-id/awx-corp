import { useParams } from "react-router-dom"
import Navbar from "./navbar";
import ProductSection from "./products/productsSection";

import zentech from "../assets/ZenTech.png"

import { IoBed } from "react-icons/io5";
import { FaToilet, FaCouch, FaWifi, FaCar } from "react-icons/fa";
import { MdKitchen, MdSettingsInputComponent } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";
import { FaComputer, FaSolarPanel  } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { ImCogs } from "react-icons/im";
import { ImCog } from "react-icons/im";
import { PiEngineBold, PiScrewdriver } from "react-icons/pi";
import { LuDrill, LuLampCeiling  } from "react-icons/lu";
import { TbSolarElectricity } from "react-icons/tb";

export default function Products() {
  const AllProducts = [
    {
      productMajor: "Desain Permodelan Bangunan",
      productType: "Miniatur",
      productTitle: "Miniatur  Cluster A — Desain Hunian Modern",
      productImage: zentech,
      specIcon: [
        <IoBed color="FFCB7C" size={64}/>,
        <FaToilet color="FFCB7C" size={64}/>,
        <FaCouch color="FFCB7C" size={64}/>,
        <MdKitchen color="FFCB7C" size={64}/>,
      ],
      specCapt: [
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
      ]
    },

    {
      productMajor: "Komputer dan Jaringan",
      productType: "Maintenance",
      productTitle: "Application of Network Technician",
      productImage: zentech,
      specIcon: [
        <FiGlobe color="FFCB7C" size={64}/>,
        <FaComputer color="FFCB7C" size={64}/>,
        <BsTools color="FFCB7C" size={64}/>,
        <FaWifi color="FFCB7C" size={64}/>,
      ],
      specCapt: [
        [
          "Jasa Installasi dan pemasangan jaringan rumah tangga",
          "Jasa perawatan dan maintenance jaringan rumah tangga",
        ],
        [
          "Jasa installasi aplikasi dan sistemasi komputer seperti windows, linux, ubuntu, dll",
          "Jasa instalasi aplikasi dasar pada Laptop/PC, seperti Microsoft Excel dan Microsoft Word",
        ],
        [
          "Jasa perbaikan dan reparasi komputer",
          "Jasa perbaikan dan perawatan keamanan komputer dari malware/virus",
        ],
        [
          "Jasa pembuatan desain arsitektur jaringan ada rumah tangga ataupun perkantoran",
          "Jasa penyedia layanan internet/ISP"
        ],
      ]
    },

    {
      productMajor: "Pemesinan",
      productType: "Design and Create",
      productTitle: "Application of Machine Technician",
      productImage: zentech,
      specIcon: [
        <ImCogs color="FFCB7C" size={64}/>,
        <BsTools color="FFCB7C" size={64}/>,
        <ImCog color="FFCB7C" size={64}/>,
      ],
      specCapt: [
        [
          "Jasa Installasi dan pemasangan jaringan rumah tangga",
          "Jasa perawatan dan maintenance jaringan rumah tangga",
        ],
        [
          "Jasa installasi aplikasi dan sistemasi komputer seperti windows, linux, ubuntu, dll",
          "Jasa instalasi aplikasi dasar pada Laptop/PC, seperti Microsoft Excel dan Microsoft Word",
        ],
        [
          "Jasa perbaikan dan reparasi komputer",
          "Jasa perbaikan dan perawatan keamanan komputer dari malware/virus",
        ]
      ]
    },

    {
      productMajor: "Kendaraan Ringan dan Otomotif",
      productType: "Installation and Service",
      productTitle: "Application of Automotive",
      productImage: zentech,
      specIcon: [
        <FaCar color="FFCB7C" size={64}/>,
        <PiEngineBold color="FFCB7C" size={64}/>,
        <PiScrewdriver color="FFCB7C" size={64}/>,
        <LuDrill color="FFCB7C" size={64}/>,
      ],
      specCapt: [
        [
          "Jasa pemasangan mesin kendaraan",
          "Jasa perbaikan mesin kendaraan",
        ],
        [
          "Service mesin, Tune up, Ganti oli, dll",
          "Bongkar pasang mesin, perbaikan piston, klep, dll",
        ],
        [
          "Perbaikan sistem kelistrikan mobil",
          "Perbaikan body penyok, las, dempul, dan pengecatan kendaraan.",
        ],
        [
          "Perawatan dan perbaikan AC mobil (freon, kompresor, evaporator).",
          "Servis transmisi manual maupun otomatis.",
        ],
      ]
    },

    {
      productMajor: "Kelistrikan",
      productType: "Installation and Service",
      productTitle: "Application of Electrical Technician",
      productImage: zentech,
      specIcon: [
        <LuLampCeiling color="FFCB7C" size={64}/>,
        <MdSettingsInputComponent color="FFCB7C" size={64}/>,
        <TbSolarElectricity color="FFCB7C" size={64}/>,
        <FaSolarPanel color="FFCB7C" size={64}/>,
      ],
      specCapt: [
        [
          "Pasang instalasi listrik rumah, gedung, sekolah, dan industri (panel, MCB, kabel, grounding).",
          "Perbaikan korsleting, lampu, stop kontak, panel listrik, dan sistem distribusi.",
        ],
        [
          "Merakit, memasang, dan maintenance panel kontrol (MDP, SDP, panel ATS-AMF).",
          "Pemasangan dan perawatan gardu distribusi, trafo, dan jaringan tegangan rendah/menengah.",
        ],
        [
          "Pemasangan KWh meter, pemeliharaan jaringan, dan pelayanan kelistrikan.",
          "Jasa instalasi listrik, panel, dan perawatan listrik bangunan.",
        ],
        [
          "Instalasi, perawatan, dan troubleshooting panel surya.",
          "Menangani mesin-mesin produksi berbasis listrik di pabrik.",
        ],
      ]
    }
  ]
  return (
    <>
      <Navbar active="products" />
      <div className="flex flex-col gap-[128px] absolute top-[200px] left-[50%] translate-x-[-50%] pb-[200px]">
        {AllProducts.map((product, index) => (
          <ProductSection 
            key={index}
            productMajor={product.productMajor}
            productType={product.productType}
            productTitle={product.productTitle}
            productImage={product.productImage}
            specIcon={product.specIcon}
            specCapt={product.specCapt}
          />
        ))}  
      </div>
    </>
  )
}