

const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form is submitted');
    }
    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <input type="name"  name="name"/>
                <br />
                <input type="Email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
              <input type="submit"  value="Submit"/>
            </form>
           
        </div>
    );
};

export default SimpleForm;
