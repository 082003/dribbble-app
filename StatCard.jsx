import { TrendingUp, TrendingDown } from "lucide-react";

const StatCard = ({ title, value, change, isUp }) => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-sm font-medium text-gray-500 mb-2">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        <div className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-full ${
          isUp ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
        }`}>
          {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {change}
        </div>
      </div>
    </div>
  );
};

export default StatCard;