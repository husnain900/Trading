
const Liquidity = () => {
    return (
        <div className="container">
            <div className="row my-5 pt-lg-5 pt-1">
                <div className="col-12 col-md-10 ">
                    <h1 className="section-title text-start text-larger p-0 pb-lg-2" >
                        Liquidity Management
                    </h1>
                    <h3 className="bluetitle my-4">Enhancing Transaction Efficiency</h3>
                    <p>Effective liquidity management begins with a comprehensive analysis of liquidity quality. At Athena, we utilize this insight to optimize liquidity, aiming to minimize execution costs and enhance the quality of order settlements. Our strategic approach ensures that transactions are both cost-effective and executed with precision, supporting the overall financial health and operational efficiency of your business.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-1 d-none d-md-block"></div>
                <div className="col-12 col-md-10">
                    <h3 className="bluetitle text-black text-center fw-bold my-5">
                        Grouping liquidity providers with similar behavior to optimize
                    </h3>
                    <div className="d-block d-md-none my-4 mb-5">
                        <div className="mb-4">
                            <h2 className="fs-2" >Spread</h2>
                            <p className="section-text2 text-black">The difference between the bid and offer prices.</p>
                        </div>
                        <div>
                            <h2 className="fs-2">Fill Ratio (%)</h2>
                            <p className="section-text2 text-black">Amount of order settled without rejections and requotes.</p>
                        </div>
                    </div>
                    <img className="w-100 h-auto" src="Assets/Images/17.png" alt="" />
                    <div className="d-block d-md-none my-4 mt-5">
                        <div className="mb-4">
                            <h2 className="fs-2">Cost of Rejects</h2>
                            <p className="section-text2 text-black">The cost associates with the immediate price change following a rejection.</p>
                        </div>
                        <div>
                            <h2 className="fs-2">Execution time</h2>
                            <p className="section-text2 text-black">Amount of time for an order to be accepted and filled in milliseconds.</p>
                        </div>
                    </div>
                </div>
                <div className="col-1 d-none d-md-block"></div>
            </div>
        </div>
    )
}

export default Liquidity
