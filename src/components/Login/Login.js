import React,{Component} from 'react';
import classes from './Login.css';
import axios from '../../axios-blog';
import img from '../../assets/tecshop.png'

import NavbarItem from '../UI/Navbar/NavbarItem/NavbarItem'
class Login extends Component{
	render(){
		return (<header>
            <nav className={classes.Navbar}>
                <ul className={classes.NavbarList}>
                    <NavbarItem
                        index={3}
                        to="/LoginAdmin"
                        exact
                        label="LoginAdmin" />   
                   
                    
                </ul>
            </nav>
            <div  className={classes.modal}>
        <form className="modal-content animate" >
          <div className="imgcontainer">
            <img src={img}  className={classes.avatar} />
          </div>
      
          <div className={classes.container}>
            <label for="uname"><b>NOMBRE</b></label>
            <input type="text" placeholder="Ingrese su Nombre" />
      
            <label for="psw"><b>CONTRASEÑAS</b></label>
            <input type="password" placeholder="Ingrese su Contraseña" name="psw"  />
      
            <button type="submit" to="admin" >LOGIN </button>
           
          </div>
      
         
        </form>
      </div>
      <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    

    <label ><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label ><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
    <p>By creating an account you agree to our </p>

    <div className={classes.clearfix}>
      <button type="button" className={classes.cancelbtn}>Cancel</button>
      <button type="submit" className={classes.signupbtn}>Sign Up</button>
    </div>
    </div>

        </header>);
	}
}

export default Login;