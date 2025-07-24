import { useState } from "react";
import type { UserProfileCardProps } from "../types";

const UserProfileCard = (userProps: UserProfileCardProps) => {
  const { avatarUrl, id, name, email, role } = userProps.user;
  const { user, showEmail, showRole, onEdit, children } = userProps;

  const [isRole, setIsRole] = useState<boolean>(showRole ?? false);
  const [isEmail, setIsEmail] = useState<boolean>(showEmail ?? false);

  const handleShowEmail = () => {
    console.log("clicked");
    setIsEmail(!isEmail);
  };
  const handleShowRole = () => {
    setIsRole(!isRole);
  };

  return (
    <>
      <div key={id} style={{ display: "flex", flexDirection: "column", padding:"10px" }}>
        <img src={avatarUrl} alt="user-avatar" />
        <h3>{name}</h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column",padding:"10px" }}>
        <div style={{padding:"10px" }}>
          <span>{isEmail ? email : ""}</span>
          <button onClick={handleShowEmail}>
            {isEmail ? "Hide Email" : "Show Email"}
          </button>
        </div>
        <div style={{padding:"10px" }}>
          <span>{isRole ? role : <></>}</span>
          <button onClick={handleShowRole}>
            {isRole ? "Hide Role" : "Show Role"}
          </button>
        </div>
      </div>
      <div>
        <button onClick={() => onEdit && onEdit(user.id)}>Edit User</button>
      </div>
      {children}
    </>
  );
};

export default UserProfileCard;
