'use client' 
{/*using for weird scroll behavior with embed*/}

export default function ResponsiveIFrame({ className = "", ...props }){
    const src = props.src || ""
    if (src.includes("youtube") || src.includes("youtu.be")) {
        return (
        <iframe {...props} className={`not-prose ${className}`}></iframe>
        )
    }
    return (
        <div
            className="not-prose"
            onPointerEnter={() => {
                document.body.style.overflow = 'hidden'
            }}
            onPointerLeave={() => {
                document.body.style.overflow = ''
            }}
        >
        <iframe {...props} className = {`${className}`}> </iframe>
        </div>
    )
}