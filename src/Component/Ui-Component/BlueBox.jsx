import { FaArrowRightLong } from "react-icons/fa6"

const BlueBox = ({ certifications, dataCenterFacts }) => {
    return (
        <div className="row my-4">
            <div className="col-1 d-none d-md-block"></div>
            <div className="col-12 col-md-4">
                <div className="box-blue">
                    <ul className="p-0">
                        {certifications.map((certification, index) => (
                            <li className="d-flex gap-2 text-white pb-2" key={index}>
                                <FaArrowRightLong className="mt-1" /> {certification}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="box-blue">
                    <ul className="p-0">
                        {dataCenterFacts.map((fact, index) => (
                            <li className="d-flex gap-2 text-white pb-2" key={index}>
                                <FaArrowRightLong className="mt-1" /> {fact}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-1 d-none d-md-block"></div>
        </div>
    )
}

export default BlueBox
