import { IoCheckmarkCircle } from "react-icons/io5";

const Infrastructure = () => {
    const items = [
        'Singapore',
        'Sydney',
        'Miami',
        'New York',
        'Silicon Valley',
        'Washington D.C.',
        'Amsterdam',
        'London'
    ];

    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-10 col-lg-6">
                        <h1 className="section-title text-start text-larger" >
                            Infrastructure
                        </h1>
                        <h3 className="section-title text-start">Low latency connectivity within Equinix data centers</h3>
                        <h3 className="bluetitle my-4">Minimize trade requests up to a hundredth of a millisecond.</h3>
                    </div>
                    <div className="col-12 mt-4">
                        <img className="w-100 h-auto d-none d-lg-block" src="Assets/Images/19.png" alt="" />
                        <img className="w-100 h-auto d-block d-lg-none" src="Assets/Images/map.png" alt="" />
                        <div className="d-block d-lg-none">
                            <div className="check-p mt-5">
                                {items.map((item, index) => (
                                    <p className="align-items-center text-black d-flex gap-2 pb-0 fs-5" key={index}>
                                        <IoCheckmarkCircle className="mb-1" style={{ color: "#5584FF" }} size={18} /> {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <p className="section-text2 my-4 my-lg-5">
                            Low latency connectivity to the world’s largest financial ecosystem within Equinix data centers, enabling us to minimize trade requests up to a hundredth of a millisecond with physical proximity to trade servers of major liquidity providers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infrastructure
