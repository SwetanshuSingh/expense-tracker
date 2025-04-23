import TransactionCategory from "./transaction-category";

type AmountBarProps = {
  expenses: number;
  investment: number;
  savings: number;
};

function AmountBar({ expenses, investment, savings }: AmountBarProps) {
  const totalAmount = expenses + investment + savings;

  const expensesPercentage = ((expenses / totalAmount) * 100).toFixed(0);
  const savingsPercentage = ((savings / totalAmount) * 100).toFixed(0);
  const investmentPercentage = ((investment / totalAmount) * 100).toFixed(0);

  console.log(savingsPercentage);

  return (
    <div className="w-2/4 h-1.5 rounded-lg flex items-center">
      <span
        style={{ width: `${expensesPercentage}%` }}
        className="h-full bg-red-500 rounded-s-lg"
      ></span>
      <span
        style={{ width: `${investmentPercentage}%` }}
        className="h-full bg-purple-500"
      ></span>
      <span
        style={{ width: `${savingsPercentage}%` }}
        className="h-full bg-yellow-500 rounded-e-lg"
      ></span>
    </div>
  );
}

function Summary() {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-3xl font-bold text-gray-800">Summary</h3>

      <span>
        <p className="text-sm font-medium text-gray-600">Net Total</p>
        <div className="flex justify-between items-baseline gap-2">
          <p className="text-xl font-medium">$218,345.28</p>
          <AmountBar expenses={400} investment={600} savings={900} />
        </div>
      </span>

      <div className="w-full flex justify-between items-center">
        <TransactionCategory variant="Income" amount="134,546" />
        <TransactionCategory variant="Expenses" amount="45,677" />
        <TransactionCategory variant="Investment" amount="34,900" />
        <TransactionCategory variant="Savings" amount="23,400" />
      </div>
    </section>
  );
}

export default Summary;
