import BlueBox from "../../Ui-Component/BlueBox"

const Equinix = () => {
    const certifications = [
        'SOC 1 Type II',
        'PCI-DSS',
        'SOC 2 Type II',
        'ISO 27001',
        'ISO 9001:2015',
        'ISO 14001:2015',
        'ISO 22301',
        'ISO 50001',
        'OHSAS 18001'
    ];

    const dataCenterFacts = [
        'N+1 Power Redundancy',
        'N+1 Cooling Redundancy',
        '99.9999% Uptime Record',
        'Less than 10ms of Local Latency'
    ];
    return (
        <div className="hosting-bg-1">
            <div className="container">
                <img className="w-100 h-auto px-0 px-lg-5 mt-4 mb-5" src="Assets/Images/map1.png" alt="" />
                <div className="Equinix-content">
                    <div className="col-12 col-md-6">
                        <h3 style={{
                            textAlign: 'left'
                        }} className="section-title">Equinix FR2 International Business Exchange™ (IBX®)</h3>
                        <h3 className="bluetitle">Direct interconnection infrastructure for major banks in Germany</h3>
                    </div>
                </div>
                <BlueBox certifications={certifications} dataCenterFacts={dataCenterFacts} />
                <p className="section-text2">
                    European gateway to global trading. <br />
                    Equinix Frankfurt’s financial ecosystem. <br />
                    Hosts major players in global electronic payment. <br />
                    Over 150+ financial services firms and 20+ trading venues. <br />
                    Supports the storage, connectivity and compliance needs of payment services providers.
                </p>
                <img className="w-100 h-auto px-0 px-lg-5 my-5" src="Assets/Images/map2.png" alt="" />

            </div>
        </div>
    )
}

export default Equinix
