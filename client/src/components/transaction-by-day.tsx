function TransactionsByDay() {
  return (
    <div className="w-full flex flex-col gap-4">
      <span className="flex justify-between text-gray-400 tracking-tight text-sm">
        <p>Today</p>
        <p>- $12,333</p>
      </span>

      <div className="flex flex-col border-b-[1.5px] border-gray-200/60">
        <span className="flex justify-between items-center border-t-[1.5px] border-t-gray-200/60 py-3 px-2 font-medium text-sm text-black/80">
          <p>Netflix</p>
          <p>- $300</p>
        </span>
      </div>
    </div>
  );
}

export default TransactionsByDay;
