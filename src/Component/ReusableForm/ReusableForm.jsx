

const ReusableForm = ({formTitle,handleSubmit,submitButtonText= 'submit',children }) => {
    //we set formTitle as props

    const handleLocalSubmit = e=>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        
        handleSubmit( data);
    }

   

  
    return (
        <div>
             <form onSubmit={handleLocalSubmit}>

                {/* <h2>{formTitle}</h2> */}
                <h2>{children}</h2>
                <input type="name"  name="name"/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
              <input type="submit"  value={submitButtonText}/>
            </form>
        </div>
    );
};

export default ReusableForm;