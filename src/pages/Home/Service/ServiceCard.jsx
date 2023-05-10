export default function ServiceCard({ service }) {
  console.log(service);
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions">
          <button className="btn bg-[#FF3811] border-0">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
