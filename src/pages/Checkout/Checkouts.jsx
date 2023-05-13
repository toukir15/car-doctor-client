import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import CheckoutRow from "./CheckoutRow";

export default function Checkouts() {
  const [checkouts, setCheckouts] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure delete the service");
    if (proceed) {
      fetch(`http://localhost:5000/checkouts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = checkouts.filter(
              (checkout) => checkout._id !== id
            );
            setCheckouts(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/checkouts?${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCheckouts(data));
  }, []);
  console.log(checkouts);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Services</th>
              <th>Email</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {checkouts.map((checkout) => (
              <CheckoutRow
                key={checkout._id}
                checkout={checkout}
                handleDelete={handleDelete}
              ></CheckoutRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
