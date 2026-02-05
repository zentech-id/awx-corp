import zentech from "../../assets/zentech.png"
import SpecCard from "./specCard"

export default function ProductSection({
  productMajor,
  productType,
  productTitle,
  specIcon = [],
  specCapt = [],
}) {
  console.log(specCapt[0], typeof specCapt[0])
  return (
    <>
      <div className="
        w-[calc(100vw-64px)] max-w-[520px] h-max min-h-[100px] flex flex-col gap-[32px] absolute left-[50%] translate-x-[-50%] top-[200px]
        lg:w-[calc(100vw-600px)] lg:min-w-[960px] lg:max-w-[unset] lg:top-[50%] lg:translate-y-[-50%]
      ">
        <h1 className="caladea-bold-italic text-[clamp(24px,3vw,36px)] text-accent"
        >{productMajor} ({productType})</h1>
        <div className="
          flex flex-col gap-[16px]
          lg:flex-row lg:gap-[88px]
        ">
          <img src={zentech} alt={productTitle} className="
            rounded-outerradius relative
            w-[calc(100vw-64px)] max-w-[460px] h-max min-h-[100px]
            lg:w-[320px] lg:max-w-[unset]
          "/>
          <div className="flex flex-col gap-[32px]">
            <h2 className="
              caladea-bold-italic text-[clamp(24px,3vw,36px)] text-accent mt-[16px]
            ">
              {productTitle}
            </h2>
            <div className="flex flex-row flex-wrap gap-[64px] lg:gap-[36px]">
              <SpecCard icon={specIcon[0]}>
                <ul className="list-disc">
                  {specCapt[0].map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })}
                </ul>
              </SpecCard>
              <SpecCard icon={specIcon[1]}>
                <ul className="list-disc">
                  {specCapt[1].map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })}
                </ul>
              </SpecCard>
              <SpecCard icon={specIcon[2]}>
                <ul className="list-disc">
                  {specCapt[2].map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })}
                </ul>
              </SpecCard>
              <SpecCard icon={specIcon[3]}>
                <ul className="list-disc">
                  {specCapt[3].map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })}
                </ul>
              </SpecCard>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}