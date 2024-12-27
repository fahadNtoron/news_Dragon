import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLOgIn = () => {
  return (
    <div>
      <h2 className="font-bold">Log in With</h2>
      <div className="space-y-2 mt-5">
        <button className="btn p-2">
          <FaGoogle /> Log in with Google
        </button>
        <button className="btn p-2">
          <FaGithub /> Log in with github
        </button>
      </div>
    </div>
  );
};

export default SocialLOgIn;
