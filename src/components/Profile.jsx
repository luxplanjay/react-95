export const Profile = ({ pilot: { name, email, age, avatar, active } }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="180" height="180" />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Status: {active ? 'Active' : 'Retired'}</p>
    </div>
  );
};
