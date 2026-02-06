import zentech from "../../assets/zentech.png"
import SpecCard from "./specCard"

export default function ProductSection({
  productMajor,
  productType,
  productTitle,
  productImage,
  specIcon = [],
  specCapt = [],
}) {
  return (
    <>
      <div className="
        w-[calc(100vw-64px)] max-w-[520px] h-max min-h-[100px] flex flex-col gap-[32px] relative left-[50%] translate-x-[-50%]
        lg:w-[calc(100vw-600px)] lg:min-w-[960px] lg:max-w-[unset]
      ">
        <h1 className="caladea-bold-italic text-[clamp(24px,3vw,36px)] text-accent"
        >{productMajor} ({productType})</h1>
        <div className="
          flex flex-col gap-[16px]
          lg:flex-row lg:gap-[88px]
        ">
          <img
            src={productImage ? productImage : zentech}
            alt={productTitle}
            className="rounded-outerradius
              w-[calc(100vw-64px)] aspect-square max-w-[460px] h-max min-h-[100px]
              lg:w-[320px] lg:max-w-[unset]
            "
          />
          <div className="flex flex-col gap-[32px]">
            <h2 className="
              caladea-bold-italic text-[clamp(24px,3vw,36px)] text-accent mt-[16px]
            ">
              {productTitle}
            </h2>
            <div className="flex flex-row flex-wrap gap-[64px] lg:gap-[36px]">
              {specIcon.length > 0 && specCapt.length > 0 && specIcon.length === specCapt.length ? (
                specIcon.map((item, index) => {
                  return (
                    <SpecCard icon={specIcon[index]}>
                      <ul className="list-disc">
                        {specCapt[index].map((item, index) => {
                          return (
                            <li key={index}>{item}</li>
                          )
                        })}
                      </ul>
                    </SpecCard>
                  )
                })
              ) : (
                <p className="text-font text-[20px]">No Data</p>
              )
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}