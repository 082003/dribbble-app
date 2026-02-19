import { MoreVertical, ExternalLink } from "lucide-react";
import { TICKETS } from "../../data";

const TicketTable = () => {
  // Status style mapping for premium look
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'open':
        return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'resolved':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mt-8">
      <div className="p-6 border-b border-gray-50 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900">Recent Tickets</h3>
        <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:underline">
          View all <ExternalLink size={14} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Ticket ID</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">User Name</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {TICKETS.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-5 text-sm font-semibold text-blue-600">{ticket.id}</td>
                <td className="px-6 py-5 text-sm font-medium text-gray-900">{ticket.userName}</td>
                <td className="px-6 py-5 text-sm text-gray-500">{ticket.subject}</td>
                <td className="px-6 py-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyle(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <button className="p-1 hover:bg-gray-100 rounded-md text-gray-400 transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketTable;