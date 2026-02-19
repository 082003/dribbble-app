import { LayoutDashboard, Ticket, Users, Settings, BarChart3, HelpCircle } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Ticket, label: "Tickets" },
    { icon: Users, label: "Capacity" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col p-4">
      <div className="flex items-center gap-2 px-2 mb-10">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <HelpCircle className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">HelpDesk.ai</span>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
              item.active 
                ? "bg-blue-50 text-blue-600 font-semibold" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            }`}
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-2 bg-gray-50 rounded-2xl flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
          AU
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">Admin User</span>
          <span className="text-xs text-gray-500">Support Manager</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;