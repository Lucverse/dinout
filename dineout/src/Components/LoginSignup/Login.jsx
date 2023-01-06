import { border } from "@chakra-ui/react"

function Login({setLogin}) {

    const overlay = {
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        height:'100vh',
        width:'100vw',
        background:'rgba(0,0,0,0.25)',
      zIndex:1000,
      display:'grid',
      placeItems:'center'
    }

  return (
    <div style={overlay}>
      <div style={{height:'15rem',width:'25rem', background:"white", position:"relative",borderRadius:'3px',padding:"2rem"}}>
        <span onClick={(e) => setLogin(false)} style={{position:'absolute', right:"1rem",top:"1rem" }}>X</span>
        <h1 style={{color:'tomato', textAlign:'left',fontSize:'28px',marginBottom:"2rem"}}>Log In / Sign Up</h1>
        <input style={{display:'block',paddingBottom:"0.7rem", border:"none", outline:"none", borderBottom:'1px solid gray', width:'100%'}} type="text" placeholder="Enter Mobile Number or Email" />
        <button style={{display:'block', width:'100%', marginTop:"1.5rem",height:"2.5rem", background:"tomato", color:"white", border:"none"}}>Continue</button>
        <hr style={{position:"relative", top:"11.5%",zIndex:0 }} />
        <p style={{background:"white", padding:"0 1rem", width:"fit", display:"inline-block", position:"relative",marginTop:"-10px"}}>Or Login via</p>
        <div style={{display:"flex",justifyContent:"center", gap:"1rem"}}>
          <button style={{padding:"1rem  5rem",height:"40px",background:"#486FA4",border:"none",color:"white",alignItems:"center",justifyContent:"center",marginTop:"-10px",borderRadius:"3px"}}> <img style={{marginLeft:"-20px"}} src="https://im1.dineout.co.in/images/uploads/misc/2020/Jan/10/facebook-16.png" alt="logo" /> Facebook</button>
          <button style={{padding:"1rem  5rem",height:"40px",color:"grey",background:"white",marginTop:"-10px"}}>Gmail</button>

        </div>
      </div>
    </div>
  )
}

export default Login
