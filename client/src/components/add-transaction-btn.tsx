import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import TransactionCategorySelect from "./transaction-category-select";
import DatePicker from "./date-picker";

function AddTransaction() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-fit bg-black/80 text-white rounded-3xl px-5 py-2">
          Add
        </button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm tracking-tight text-gray-500">
              Enter Amount *
            </p>
            <input
              className="w-80 border border-gray-200 rounded-md px-2 py-1"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm tracking-tight text-gray-500">
              Select Transaction Category *
            </p>
            <TransactionCategorySelect />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm tracking-tight text-gray-500">
              Enter Description
            </p>
            <input
              className="w-80 border border-gray-200 rounded-md px-2 py-1"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm tracking-tight text-gray-500">
              Select Date *
            </p>
            <DatePicker />
          </div>

          <div className="flex flex-col gap-2">
            <button className="w-full bg-black/80 text-white rounded-3xl px-5 py-3">
              <p className="tracking-tight">Add Transaction</p>
            </button>
            <DialogClose>
              <button className="w-full bg-white text-black border border-gray-200 rounded-3xl px-5 py-2 hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors duration-200">
                <p className="tracking-tight">Cancel</p>
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddTransaction;
