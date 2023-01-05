import React from "react";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className}
        style={{ ...style, background: "#ff654a", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", padding: "8px", marginRight: "28px", border: "1px solid #ff645a", zIndex: "999", marginBottom: "10px" }}
        onClick={onClick} 
        >
        </div>
    )
}

export default NextArrow;