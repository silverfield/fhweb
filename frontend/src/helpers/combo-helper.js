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

export function randomId() {
    return 'a' + Math.random().toString(36).substr(2, 9);
};
  

export function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}