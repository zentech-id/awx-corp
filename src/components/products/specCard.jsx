


export default function SpecCard({ icon, children }) {
  return (
    <div className="
      w-full flex flex-col gap-[16px] items-center
      md:w-[calc(50%-18px)]
    ">
      {icon}
      <div className="
        w-full text-font league-spartan-default text-[20px] pl-[20px]
      ">{children}</div>
    </div>
  )
}