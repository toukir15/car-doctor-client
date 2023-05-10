import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

export default function Banner() {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-lg" />
        <div className="absolute  left-0 top-0  text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full rounded-lg">
          <div className="flex flex-col justify-center pl-8 w-1/3 h-full rounded-lg">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn mr-6 bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a
            href="#slide4"
            className="btn btn-circle mr-5 bg-[ rgba(255, 255, 255, 0.5)]"
          >
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full object-cover">
        <img src={banner2} className="w-full" />
        <div className="absolute  left-0 top-0  text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full rounded-lg">
          <div className="flex flex-col justify-center pl-8 w-1/3 h-full rounded-lg">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn mr-6 bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle mr-6">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute  left-0 top-0  text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full rounded-lg">
          <div className="flex flex-col justify-center pl-8 w-1/3 h-full rounded-lg">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn mr-6 bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle mr-6">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full object-cover" />
        <div className="absolute  left-0 top-0  text-white  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full rounded-lg">
          <div className="flex flex-col justify-center pl-8 w-1/3 h-full rounded-lg">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn mr-6 bg-[#FF3811] border-0">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle mr-6">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
