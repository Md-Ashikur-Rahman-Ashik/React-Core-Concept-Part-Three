import "./App.css";
import GrandFather from "./components/GrandFather/GrandFather";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign Up Data", data)
  // };

  // const handleProfileUpdateSubmit = (data) => {
  //   console.log("Update Profile", data)
  // };

  return (
    <>
      <h1>Form Master</h1>
      <GrandFather></GrandFather>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleProfileUpdateSubmit}
        submitButtonText={"Update"}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
