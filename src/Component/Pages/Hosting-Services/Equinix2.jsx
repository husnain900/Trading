import BlueBox from "../../Ui-Component/BlueBox"

const Equinix2 = () => {
    const certifications = [
        'SOC 1 Type II',
        'PCI-DSS',
        'SOC 2 Type II',
        'ISO 27001',
        'HIPAA',
        'NIST 800-53/FISMA'
    ];

    const dataCenterFacts = [
        'N+1 Power Redundancy',
        'N+1 Cooling Redundancy',
        '99.9999% Uptime Record',
        'Less than 10ms of Local Latency'
    ];

    return (
        <div className="container">
            <div className="Equinix-content">
                <div className="col-12 col-md-6">
                    <h3 style={{
                        textAlign: 'left'
                    }} className="section-title">Equinix NY2 International Business Exchange™ (IBX®)
                    </h3>
                    <h3 className="bluetitle">Data center for the world’s largest financial institutions</h3>
                </div>
            </div>
            <BlueBox certifications={certifications} dataCenterFacts={dataCenterFacts} />
            <p className="section-text2">Equinix Financial Exchange with low latency connectivity to a large ecosystem of financial firms including BATS, CBOE, ICAP, Knight Capital, ISE and BOX. </p>
            <img className="w-100 h-auto px-0 px-lg-5 my-5" src="Assets/Images/map3.png" alt="" />
        </div>
    )
}

export default Equinix2