import { ChevronDown } from "lucide-react";
import TransactionsByDay from "./transaction-by-day";
import AddTransaction from "./add-transaction-btn";

function Transactions() {
  return (
    <section className="w-full flex flex-col gap-12">
      <div className="w-full flex justify-between items-center">
        <span className="flex flex-col">
          <p className="text-xl font-bold text-gray-800">Transactions</p>
          <p className="text-sm text-gray-400 tracking-tight">
            You had 2 incomes and 23 expenses this month.
          </p>
        </span>

        <span className="flex items-center gap-6">
          <button className="w-fit rounded-3xl px-5 py-2 text-gray-400 hover:bg-gray-100 hover:text-black/80 transition-colors duration-200">
            <span className="flex justify-center items-center gap-1">
              <p>Type</p>
              <ChevronDown size={16} />
            </span>
          </button>
          <button className="w-fit rounded-3xl px-5 py-2 text-gray-400 hover:bg-gray-100 hover:text-black/80 transition-colors duration-200">
            <span className="flex justify-center items-center gap-1">
              <p>Category</p>
              <ChevronDown size={16} />
            </span>
          </button>

          <AddTransaction />
          {/* <button className="w-fit bg-black/80 text-white rounded-3xl px-5 py-2">
            Add
          </button> */}
        </span>
      </div>

      <div className="flex flex-col gap-5">
        <TransactionsByDay />
        <TransactionsByDay />
      </div>
    </section>
  );
}

export default Transactions;
