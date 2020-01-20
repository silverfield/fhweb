function BuskingSection({
    name,
    children
}) {
    return <>
        <div className="busking-section">
            <span className="busking-sec-title">{name}</span>
            {children}
        </div>
    </>
}

export default function Busking({

}) {
    return (
        <>
            <BuskingSection name="Christmas busking choir" sum="200">
                
            </BuskingSection>

            <BuskingSection name="Guitar for SOS village in Bergen" sum="300">
                
            </BuskingSection>

            <BuskingSection name="Busking for Llamau" sum="150">
                
            </BuskingSection>

            <BuskingSection name="Education for underprivileged children" sum="150">
                
            </BuskingSection>

            <BuskingSection name="Various other causes" sum="150">
                
            </BuskingSection>
        </> 
    );
}
  