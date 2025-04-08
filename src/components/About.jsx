import personalPic from "/Me.jpg";

export default function About({ isMobile }) {
  return (
    <div
      className={`flex flex-grow ${
        isMobile ? "flex-col" : "flex-row"
      } justify-around items-center gap-8 p-4`}
    >
      <div className={`max-w-lg text-center ${isMobile ? "" : "md:text-left"}`}>
        <h1
          className={`${
            isMobile ? "text-3xl" : "text-5xl"
          } font-extrabold text-gray-300 pb-4`}
        >
          Hi! 👋
        </h1>
        <p
          className={`${
            isMobile ? "text-base" : "text-lg"
          } text-gray-100 leading-relaxed`}
        >
          I am a motivated and disciplined{" "}
          <span className="font-bold text-gray-300">
            software engineering student/full stack developer
          </span>{" "}
          with a passion for learning and problem-solving! I thrive in
          collaborative environments, adapt easily, and love tackling new
          challenges. My goal is to build a successful career in software
          engineering, contributing to innovative projects with dedication and
          teamwork!
        </p>
      </div>
      <div className={`${isMobile ? "mt-6" : ""}`}>
        <img
          src={personalPic}
          alt="Personal Picture"
          className={`${
            isMobile ? "w-64 h-64" : "w-80 h-80 md:w-96 md:h-96"
          } object-cover rounded-full shadow-lg`}
        />
      </div>
    </div>
  );
}
