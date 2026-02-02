import { useNavigate } from "react-router-dom"
import Navbar from "./navbar";
import ContactContainer from "./contactContainer";

// Icons
import { IoCall, IoMail, IoLocation, IoGlobeOutline } from "react-icons/io5";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar active="contact"/>
      <div className="
        w-[calc(100vw-64px)] max-w-[520px] min-h-[540px] items-center flex flex-col gap-[32px] absolute left-[50%] translate-x-[-50%] top-[200px]
        md:w-[calc(100vw-100px)] md:min-w-[720px] md:flex-row md:top-[50%] md:translate-y-[-50%] md:gap-0
        lg:w-[calc(100vw-600px)] lg:min-w-[960px] lg:max-w-[unset]
      ">
        <div className="
          w-full h-full flex flex-col justify-center gap-[32px]
          md:w-[50%]
        ">
          <h1 className="letter-spacing-[0.05em] league-spartan">
            <span className="md:text-[clamp(84px,10vw,140px)] text-[100px] text-accent tracking-[-4px]">Contact</span><br/>
            <span className="md:text-[clamp(84px,10vw,140px)] text-[100px] text-accent tracking-[-4px] leading-[0.2]">Person.</span>
          </h1>
          <p className="
            league-spartan-default text-font text-[20px] lg:max-w-[75%]
            md:text-[24px]
            lg:text-[24px]
          ">
            Hubungi kami untuk konsultasi, pemesanan jasa, maupun kerjasama profesional.
          </p>
        </div>

        <div className="
          bg-secondary w-full h-full flex flex-col border-4 border-border mb-[80px]
          md:w-[50%] md:mb-0
        ">
          <ContactContainer icon={<IoCall color="FFCB7C" size={36}/>} title="Phone/WhatsApp" item="+62 899 9898 7676"/>
          <ContactContainer icon={<IoMail color="FFCB7C" size={36}/>} title="Email" item="awxcorporation@gmail.com"/>
          <ContactContainer icon={<IoLocation color="FFCB7C" size={36}/>} title="Location" item="Jl. Dr. Cipto Nomor 121, Semarang"/>
          <ContactContainer icon={<IoGlobeOutline color="FFCB7C" size={36}/>} title="Website" item="https://zentech-id.github.io/awx-corporation" hasBorder={false}/>
        </div>
      </div>
    </>
  )
}
    