import about1 from "../../../assets/images/about_us/person.jpg";
import about2 from "../../../assets/images/about_us/parts.jpg";
export default function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={about1} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={about2}
            className="max-w-sm rounded-lg shadow-2xl absolute right-4 -bottom-24"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <p className="font-bold text-[#FF3811]">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] border-0">Get More Info</button>
        </div>
      </div>
    </div>
  );
}
