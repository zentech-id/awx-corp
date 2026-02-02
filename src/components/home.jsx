
import { useNavigate } from "react-router-dom"
import Navbar from "./navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar active="home"/>
      <div className="
        w-[calc(100vw-64px)] h-max flex flex-col gap-[32px] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]
        md:w-[calc(100vw-100px)]
        lg:w-[calc(100vw-400px)] lg:min-w-[900px] lg:max-w-[1300px]
      ">
        <h1 className="letter-spacing-[0.05em] league-spartan">
          <span className="md:text-[120px] text-[100px] text-accent tracking-[-12px]">AWX</span><br/>
          <span className="md:text-[100px] text-[64px] text-accent leading-0">Corporation.</span>
        </h1>
        <p className="
          league-spartan-default text-font text-[20px] lg:max-w-[80%]
          md:text-[20px]
          lg:text-[24px]
        ">
          AWX Corporation merupakan perusahaan yang bergerak di bidang jasa dan beberapa produk unggulan lain. AWX Corporation menyediakan jasa installasi dan perawatan listrik rumah tangga, jaringan rumah tangga, serta beberapa desain miniatur dan infastruktur lainnya.
        </p>
        <button onClick={() => navigate("/products/dpib-miniatur")} 
        className="
          w-[180px] h-[44px] grid place-items-center bg-accent text-primary text-[16px] league-spartan-medium font-bold rounded-full cursor-pointer
          lg:text-[20px] lg:w-[200px] lg:h-[48px]
        ">
          Produk Kami
        </button>
      </div>
    </>
  )
}
    