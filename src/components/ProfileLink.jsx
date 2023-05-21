const ProfileLink = ({ icon, name, link }) => {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="flex flex-col items-center gap-2 hover:underline"
    >
      <img src={icon} alt={name} className="w-6 h-6" />
      <span className="text-sm text-blue-800">{name}</span>
    </a>
  );
};

export default ProfileLink;
