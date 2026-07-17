import Card from "./ui/Card";

function LiveHistory() {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold">
        Recent Live Sessions
      </h2>

      <Card>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">
                Date
              </th>

              <th className="py-3">
                Revenue
              </th>

              <th className="py-3">
                Orders
              </th>

              <th className="py-3">
                Duration
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-4">
                15 Jul
              </td>

              <td className="text-center">
                ₹12.4K
              </td>

              <td className="text-center">
                16
              </td>

              <td className="text-center">
                42 min
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </section>
  );
}

export default LiveHistory;