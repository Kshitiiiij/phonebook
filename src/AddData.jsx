import { useState } from "react";
const AddData = ({ data, setData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState(false);

  const addItem = () => {
    const listItem = {
      name: firstName + " " + lastName,
      contact: contact,
    };
    const dataj = [...data, listItem];
    setData(dataj);
    localStorage.setItem("data", JSON.stringify(dataj));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length == 0 || lastName.length == 0 || contact.length == 0) {
      setError(true);
      return;
    }

    if (
      data.find(
        (item) =>
          item.name.toUpperCase() ===
          firstName.toUpperCase() + " " + lastName.toUpperCase()
      )
    ) {
      alert("Name already exists");
      return;
    }
    if (data.find((item) => item.contact === contact)) {
      alert("Contact already exists");
      return;
    }
    addItem();
    setFirstName("");
    setLastName("");
    setContact("");
  };
  return (
      <form onSubmit={handleSubmit}>
        <div className="names">
          <label htmlFor="name">Person's Name</label>

          <div className="names_inner">
            <input
              className="firstName"
              id="name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              className="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="error">
            {error && firstName.length == 0 ? (
              <p>First Name is required</p>
            ) : (
              ""
            )}
            {error && lastName.length == 0 ? <p>Last Name is required</p> : ""}
          </div>
        </div>
        <div className="contact">
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {error && contact.length == 0 ? <p className="error">Contact is required</p> : ""}
        </div>
        <button className="button_submit" type="submit">Submit</button>
      </form>
  );
};

export default AddData;
