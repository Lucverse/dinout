import { NavLink } from "react-router-dom";

function Available(){
    const options = ['Delhi', 'Mumbai', 'Banglore', 'Chennari', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabar', 'Chandigarh', 'Goa', 'Jaipur', 'Lucknow', 'Indore', 'Udaipur', 'Agra', 'Vadodara', 'Nagpur', 'Kochi', 'Surat', 'Ludhiana'];
    return(
        <div className="available">
            <h4>Available in</h4>
            <div className="availablediv">
            {
                options.map((elem,i)=>{
                    return (
                        <NavLink to={elem} style={{textDecoration:'none', color:'black', padding:'5px'}} key={elem}>
                            {elem}
                        </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Available;