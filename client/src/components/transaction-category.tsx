type TransactionCategoryProps = {
  variant: "Income" | "Expenses" | "Investment" | "Savings";
  amount: string;
};

function TransactionCategory({ variant, amount }: TransactionCategoryProps) {
  return (
    <div className="flex flex-col">
      <p
        className={`text-sm font-medium tracking-tight ${
          (variant == "Income" && "text-green-500") ||
          (variant == "Expenses" && "text-red-500") ||
          (variant == "Investment" && "text-purple-500") ||
          (variant == "Savings" && "text-yellow-500")
        }`}
      >
        {variant}
      </p>
      <p className="text-lg font-medium text-gray-800">${amount}</p>
    </div>
  );
}

export default TransactionCategory;
