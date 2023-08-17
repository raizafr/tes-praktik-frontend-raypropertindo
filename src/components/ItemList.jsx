const ItemList = () => {
  return (
    <tr>
      <th>1</th>
      <td>John Doe</td>
      <td>08123456789</td>
      <td>johndoe666@gmail.com </td>
      <td className="flex flex-row justify-center gap-1">
        <button className="border px-2 border-black rounded py-0.5">
          Edit
        </button>
        <button className="px-2 py-0.5 rounded bg-[#DC3545] text-white border border-[#DC3545]">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ItemList;
