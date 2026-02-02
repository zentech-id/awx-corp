
export default function ContactContainer({ icon, title, item, hasBorder = true }) {
  return (
    <div className={`
      w-full h-[calc((100%/4))] flex flex-col p-[16px] overflow-hidden
      ${hasBorder ? "border-b-4 border-border" : ""}
    `}>
      <div className="flex flex-row items-center gap-[16px]">
        <div>{icon}</div>
        <h1 className="text-accent text-[28px] league-spartan-default">{title}</h1>
      </div>
      <p className="
        ml-[52px] text-font text-[24px] league-spartan-default leading-none
        md:text-[24px]
      ">{item}</p>
    </div>
  )
}