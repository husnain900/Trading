import { IoCheckmarkCircle } from 'react-icons/io5';
function DigitalMarketingBanner() {
  return (
    <div className="Brand_Identity_bg">
    <div className="container">
      <div className="row ">
        <div className="col-12 ">
          <h2 className="Brand_Heading">DIGITAL</h2>
          <h2 className="Identity_Heading">Marketing</h2>
          <div className="BrandIdentity_P">
            <p>
              <IoCheckmarkCircle />Convert new audiences into loyal customers
            </p>
            <p>
              <IoCheckmarkCircle />Push your message to the right audiences
            </p>
            <p>
              <IoCheckmarkCircle /> Digital marketing strategy that fits your business
            </p>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  </div>
  )
}

export default DigitalMarketingBanner