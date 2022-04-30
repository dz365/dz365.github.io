import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-10 p-4 rounded-lg text-center">
        <p className="text-5xl text-sky-500">contact me here!</p>
        <a
          href="mailto: dwqz365@gmail.com"
          className="flex gap-4 transform duration-500 hover:scale-110"
        >
          <EmailOutlinedIcon
            color="primary"
            fontSize="large"
            className="scale-150"
          />
          <p className="text-xl w-64 hover:text-blue-500">dwqz365@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/dz365/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-4 transform duration-500 hover:scale-110"
        >
          <LinkedInIcon
            color="primary"
            fontSize="large"
            className="scale-150"
          />
          <p className="text-xl w-64 hover:text-blue-500">dz365</p>
        </a>

        <a
          href="https://www.github.com/dz365/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-4 transform duration-500 hover:scale-110"
        >
          <GitHubIcon color="primary" fontSize="large" className="scale-150" />
          <p className="text-xl w-64 hover:text-blue-500">dz365</p>
        </a>
      </div>
    </div>
  );
}
