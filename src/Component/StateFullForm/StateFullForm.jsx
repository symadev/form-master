import { useState } from "react";


const StateFullForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(" ");


    const handleSubmit = e =>{
        e.preventDefault(); 
//the condition for the password

        if(password.length <6){
            setError('Password must be 6 character or more longer');
        }
        else{
            setError('') ;
            console.log(email,password);
        }
       
    }
    const handleEmailChange = e =>{
      console.log(e.target.value);  
      //now we set the value in the state
      setEmail(e.target.value);
    }


    const handlePasswordChange = e =>{
      console.log(e.target.value);  
      //now we set the value in the state
      setPassword(e.target.value);
    }

    return (
        

<div>
            <form onSubmit ={handleSubmit}>
                <input type="name"  name="name"/>
                <br />
                <input   onChange={ handleEmailChange}
               type="email" name="email" />
                <br />
                <input   onChange={handlePasswordChange }type="password" name="password" required />
                <br />
              <input type="submit"  value="Submit"/>
              {
                error && <p>{error}</p>
              }
            </form>
           
        </div>
            
       
    );
};

export default StateFullForm;