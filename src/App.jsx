
import './App.css'
import Grandpa from './Component/Grandpa/Grandpa'
import ReusableForm from './Component/ReusableForm/ReusableForm'
// import Hookform from './Component/HookForm/Hookform'
// import RefForm from './Component/RefForm/RefForm'
// import StateFullForm from './Component/StateFullForm/StateFullForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'

function App() {
  // const handleSignUpSubmit = data =>{
  //   console.log('sign up',data)};



  // const handleProfileUpdateSubmit = data=>{
  //   console.log('profile update ',data)};


  return (
    <>
     
      <h1>Form Master</h1>

      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
       {/* <Hookform></Hookform> */}
       {/* <ReusableForm formTitle = {'sign up'} handleSubmit={handleSignUpSubmit} >
        <div>
          <h2>sign up</h2>
          <h3>please sign up right now</h3>
        </div>
       </ReusableForm>
      <ReusableForm formTitle = {'Profile Update'} handleSubmit={handleProfileUpdateSubmit} submitButtonText={'Update'}>
      <h2>Profile Update</h2>
      <h3>please Update Profile right now</h3>
      </ReusableForm> */}
    </>

  )
}

export default App
