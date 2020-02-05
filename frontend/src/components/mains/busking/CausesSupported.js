function Causes({
    name,
    children
}) {
    return <>
        <div className="cause-section">
            <span className="cause-sec-title">{name}</span>
            {children}
        </div>
    </>
}

export default function CausesSupported({

}) {
    return (
        <>
            
            <Causes name="Christmas busking choirs" sum="200">
                <img src={require("../../../pics/xmas-busk-1.jpg")} alt="Christmas busking" />
                <img src={require("../../../pics/xmas-busk-2.jpg")} alt="Christmas busking" />
            </Causes>

            <Causes name="Guitar for SOS village in Bergen" sum="300">
                <img src={require("../../../pics/sos-1.jpg")} alt="Christmas busking" />
                <img src={require("../../../pics/sos-2.jpg")} alt="Christmas busking" />
            </Causes>

            <Causes name="Busking for Llamau" sum="150">
                
            </Causes>

            <Causes name="Education for underprivileged children" sum="150">
                
            </Causes>

            <Causes name="Various other causes" sum="150">
                
            </Causes>
        </> 
    );
}
  