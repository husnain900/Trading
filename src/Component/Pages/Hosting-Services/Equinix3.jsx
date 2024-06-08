import BlueBox from "../../Ui-Component/BlueBox"

const Equinix3 = () => {
    const certifications = [
        'SOC 1 Type II',
        'SOC 2 Type II',
        'SS 564 Energy Efficiency',
        'ISO 27001',
        'PCI-DSS'
    ];

    const dataCenterFacts = [
        '99.9999% Uptime Record',
        'Less than 10ms of Local Latency',
        '205+ Network Service Providers',
        '41,400+ Square Meters of Colocation Space'
    ];
    return (
        <div className="container">
            <div className="Equinix-content">
                <div className="col-12 col-md-7">
                    <h3 style={{
                        textAlign: 'left'
                    }} className="section-title">Equinix Singapore Data Centers</h3>
                    <h3 className="bluetitle">Servicing most banks and FX liquidity providers in Southeast Asia</h3>
                </div>
            </div>
            <BlueBox certifications={certifications} dataCenterFacts={dataCenterFacts} />
            <p className="section-text2 HostingpageP">Financial community and ecosystem located in Southeast Asia with the access to 205+ network providers.</p>
        </div>
    )
}

export default Equinix3
