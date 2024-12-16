
import "../styles/features.css"
import Image from "next/image"


export default function Features()
{
return(
    <div className="max-w-screen-2xl mx-14 mt-10 ">
    <div className="featured-header">Featured</div>
    <div className="featured-image">
    <Image 
      src="/images/features.png" 
      alt="Running" 
      width={1300}
      height={700}
    />
    </div>
    <div className="featured-text">
      <h1>STEP INTO WHAT FEELS GOOD</h1>
      <p>Cause everyone should know the feeling of running in that perfect pair.</p>
      <button>Find Your Shoe</button>
    </div>
  </div>
)
}



