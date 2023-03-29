import React from "react";

const UserCard = ({ user }) => {
  console.log(user);

  const { address, geo, company, email, id, name, phone, username, website } =
    user;

  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body text-start">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
        <p>{website}</p>
        <p>City:{address.city}</p>
        <p>Phone Number:{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
