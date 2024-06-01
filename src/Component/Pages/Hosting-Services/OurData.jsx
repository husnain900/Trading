import { FaArrowRightLong } from "react-icons/fa6"

const OurData = () => {
    const certifications = [
        'OHSAD 18001',
        'ISO 9001',
        'SSAE 16/ISAE 3402',
        'ISO 27001',
        'PCI DSS',
        'ISO 50001'
    ];

    const dataCenterFacts = [
        '99.9999% Uptime Record',
        'Less than 10ms of Local Latency',
        '200+ Network Service Providers',
        '70,250+ Square Meters of Colocation Space'
    ];
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <h1
                        className="section-title"
                        style={{
                            fontSize: '65px',
                            color: '#0e1b36',
                            textAlign: 'left'
                        }}
                    >
                        Our Data Centers
                    </h1>
                    <h3 style={{
                        textAlign: 'left'
                    }} className="section-title">Equinix’s London International Business Exchange™ (IBX®)</h3>
                    <h3 className="bluetitle">Europe’s largest multi-asset trading community
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-1 d-none d-md-block"></div>
                <div className="col-12 col-md-4">
                    <div className="box-blue">
                        <ul className="p-0">
                            {certifications.map((certification, index) => (
                                <li className="d-flex gap-2 text-white pb-2" key={index}><FaArrowRightLong className="mt-1" /> {certification}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="box-blue">
                        <ul className="p-0">
                            {dataCenterFacts.map((fact, index) => (
                                <li className="d-flex gap-2 text-white pb-2" key={index}><FaArrowRightLong className="mt-1" /> {fact}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-1 d-none d-md-block"></div>
            </div>
        </div>
    )
}

export default OurData
