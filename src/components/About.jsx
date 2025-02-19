import personalPic from "/Me.jpg";

export default function About() {
  return (
    <div className="flex flex-grow flex-row justify-around items-center gap-8">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-gray-300 pb-4">Hi! 👋</h1>
        <p className="text-lg text-gray-100 leading-relaxed">
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
      <div>
        <img
          src={personalPic}
          alt="Personal Picture"
          className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
