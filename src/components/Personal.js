import React from "react";

function Personal(props) {
  return (
    <div className="PersonalDetails">
      <h2 id="about" className="GroupHeading">
        About
      </h2>
      <div className="Name">
        <input
          type="text"
          id="first-name"
          name="firstName"
          placeholder="First Name"
          value={props.data.firstName}
          onChange={props.onChange}
        />
        <input
          type="text"
          id="last-name"
          name="lastName"
          placeholder="Last Name"
          value={props.data.lastName}
          onChange={props.onChange}
        />
      </div>
      <div className="Other">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          onChange={props.onChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={props.onChange}
        />
      </div>
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        onChange={props.onChange}
        rows={5}
      />
    </div>
  );
}

export default Personal;
