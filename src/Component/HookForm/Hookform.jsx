import useInputState from "../Hooks/Hooks";



const Hookform = () => {

    const [name, handlenameChange] =  useInputState('syma sultana');

    const handleSubmit = e =>{
        e.preventDefault();
    };


    return (
        <div>
            
            <form onSubmit ={handleSubmit}>
            <input value={name} onChange={handlenameChange} type="text" name="name" />

                {/* //onChange ar moddhe oi handler diye dite hobe oikahne */}

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

export default Hookform;