import React, { useState } from "react";
import FormStyle from './FormStyle.css'


function Form ({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevUserdata)=>({
            ...prevUserdata,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    const [errors, setErrors] = useState({});
    

    return(
        <div className="container">

           <label className="Label">Email</label>
           <input className="inputEmail" 
                name="email" 
                type="text" 
                placeholder="Introduzca su Email"
                value={userData.email}
                onChange={handleChange}
           />
           {errors.email && <p>{errors.email}</p>}

           <label className="Label">Password</label>
           <input className="inputPassword"
                name="password" 
                type="password"    
                placeholder="Introduzca su contraseña"
                value={userData.password}
                onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
           
           <button className="Boton" name="submit" type="submit" onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Form