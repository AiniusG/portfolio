import personalPic from "/Me.jpg";

export default function About() {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-8 p-4 flex-grow">
      <div className="max-w-lg text-left sm:text-left">
        <h1 className="text-3xl sm:text-5xl text-center sm:text-left font-extrabold text-gray-300 pb-4">
          Hi! 👋
        </h1>
        <p className="text-base text-gray-100 leading-relaxed">
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
      <div className="mt-6 sm:mt-0">
        <img
          src={personalPic}
          alt="Photo of [Your Name], a software engineering student"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
