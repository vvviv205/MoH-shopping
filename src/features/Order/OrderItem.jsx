import React from "react";
import Deletesvg from "../../utilities/Deletesvg";

export default function OrderItem({ ord }) {
  return (
    /*     <div>
      <h4>#{num}</h4>
      <h4>{item.id}</h4>
      <h4>{item.cart.length} items</h4>
      <h4>{item.deliverDate}</h4>
      <div>
        <NavLink to={`/order/${item.id}`}>
          <Showsvg />
        </NavLink>
        <Deletesvg id={item.id} />
      </div>
    </div> */
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">{ord.id}</p>
          </div>
        </div>
      </td>
      <td class="pl-8 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{ord.cart.length}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{ord.deliverDate}</p>
      </td>
      <td class="pl-6 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
          <Deletesvg id={ord.id} />
        </p>
      </td>
    </tr>
  );
}
