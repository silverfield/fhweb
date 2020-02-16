export function PageSection({
    name,
    headerExtra=null,
    children
}) {
    return <>
        <div className="page-section">
            <div className="page-header">
                <span className="page-sec-title">{name}</span>{headerExtra}
            </div>
            {children}
        </div>
    </>
}