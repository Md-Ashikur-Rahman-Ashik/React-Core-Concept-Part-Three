import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState("Babri");

  const handleSubmit = (event) => {
    console.log("Form data", name);

    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
