const SimpleForm = () => {

    const handleSubmit = event => {
        event.preventDefault();
        // console.log("Form submitted");
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.name);
        // console.log(event.target.name.value);
        // console.log(event.target.email.value);
        console.log(event.target.phone.value);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
