import BlueBox from "../../Ui-Component/BlueBox"

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
        <div className="">
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-10 col-lg-7">
                        <h1
                            className="section-title text-larger"
                            style={{
                                color: '#0e1b36',
                                textAlign: 'left'
                            }}
                        >
                            Our Data Centers
                        </h1>
                        <h3 className="section-title text-start">Equinix’s London International Business Exchange™ (IBX®)</h3>
                        <h3 className="bluetitle">Europe’s largest multi-asset trading community
                        </h3>
                    </div>
                </div>
                <BlueBox certifications={certifications} dataCenterFacts={dataCenterFacts} />
                <p className="section-text2 HostingpageP">Connection to Europe’s extensive financial service market through the Slough campus (LD4, LD5, LD6, LD7, LD10, LD13x data centers) Highly secure and hosts Europe’s largest multilateral trading facility, BATS Chi-X, and FX trading system ICAP’s EBS.
                </p>
            </div>
        </div>


    )
}

export default OurData
