import { useNavigate } from "react-router-dom"

export default function Navbar({ active }) {
  const navigate = useNavigate();

  return (
    <div className="
      w-full h-[100px] px-[32px] fixed z-10 backdrop-blur-3xl
      md:h-[100px] md:px-[60px]
    ">
      <div className="w-full h-full flex justify-between items-center">
        <div className="w-max h-full flex justify-start items-center">
          <h2 className="
            text-[32px] text-accent caladea-bold-italic text-center leading-none cursor-pointer select-none
            md:text-[40px]
          " onClick={() => navigate('/')}>AWX<br/>Corporation</h2>
        </div>
        <div className="w-max h-full flex justify-end items-center">
          <ul className="
            flex text-font caladea-bold text-[20px] gap-x-[40px] select-none
            md:text-[28px] md:gap-x-[40px]
          ">
            <li className={active === "home" ? "text-accent underline underline-accent underline-offset-8" : "underline-transparent"} onClick={() => navigate("/")}>
              Beranda
            </li>
            <li className={active === "products" ? "text-accent underline underline-accent underline-offset-8" : "underline-transparent"} onClick={() => navigate("/products")}>
              Produk
            </li>
            <li className={active === "contact" ? "text-accent underline underline-accent underline-offset-8" : "underline-transparent"} onClick={() => navigate("/contact")}>
              Kontak
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}