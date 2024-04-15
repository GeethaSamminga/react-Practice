import { useRef } from "react"

const UnControlledInput=()=>{
   const UserNameref= useRef("")
   const passwordref=useRef("")

   const handlerSubmit=()=>{
   Event.preventDefault()
   }
    return(
        <div>
      <form onSubmit={handlerSubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={UserNameref}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
    />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    </div>

    )
}
export default UnControlledInput;