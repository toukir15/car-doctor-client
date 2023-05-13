import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Checkout() {
  const { title, _id, img, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const order = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price,
    };
    console.log(order);
    fetch("http://localhost:5000/checkouts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2>Book Service:{title}</h2>

      <form onSubmit={handleCheckout}>
        <div className="grid gird-col-1 md:grid-cols-2 gap-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="name"
              defaultValue={user?.name}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder=""
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="amount"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6 mb-20">
          <button className="btn btn-primary btn-block">Login</button>
        </div>
      </form>
    </div>
  );
}
