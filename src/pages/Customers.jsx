export default function Customers() {
    const customers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', joined: '2023-01-15', orders: 5 },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', joined: '2023-02-20', orders: 3 },
      { id: 3, name: 'Robert Johnson', email: 'robert@example.com', joined: '2023-03-10', orders: 8 },
    ];
  
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Customers</h1>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-medium text-gray-800">Customer List</h2>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700">
              Add Customer
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map(customer => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.joined}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.orders}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-purple-600 hover:text-purple-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }