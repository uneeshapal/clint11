import React from "react";

function AdminOrder() {
  return (
    <div className="p-4">
      <h2>Orders</h2>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#1001</td>
            <td>Rahul</td>
            <td>₹2500</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrder;