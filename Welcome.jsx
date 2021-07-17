import React, {Component} from 'react'
import './style.css'



class Welcome extends Component{


  state = {
    email : '',
    password : ''
  }
 

  formSubmit = (e) =>{

    e.preventDefault()
    alert(this.state.email, this.state.password)
  }

  render(){

    return(

      <div>   

         <strong > {this.state.email} </strong><br></br>
         <strong > {this.state.password} </strong>
         
          <form onSubmit={this.formSubmit} >
            <div className='form-control'>
               <label>Name:</label><br/>
               <input type='email' name='email' onChange={(e) =>(this.setState({email:e.target.value}))} /><br/>
               <input type='password' name='password' onChange={(e)=>(this.setState({password:e.target.value}))} /><br/>
               
               <button type='submit'>Submit</button>
            </div>
          </form>      
      </div>
    )
  }

}

export default Welcome;

