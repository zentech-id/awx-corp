import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function productCard({ image, name, price }) {
  return (
    <div className="
      relative aspect-square flex items-center justify-center rounded-outerradius bg-accent
      hover:scale-[1.03] transition-all duration-300 cursor-pointer
      active:scale-[0.98]
      select-none
    ">
      <LazyLoadImage 
        src={image} 
        alt=""
        effect='blur'
        className="w-[calc(100%-16px)] m-auto aspect-square object-cover rounded-innerradius select-none" 
      />
    </div>
  )
}