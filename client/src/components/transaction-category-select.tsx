import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TransactionCategorySelect() {
  return (
    <Select>
      <SelectTrigger className="w-80">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="income">Income</SelectItem>
          <SelectItem value="expenses">Expenses</SelectItem>
          <SelectItem value="investment">Investment</SelectItem>
          <SelectItem value="savings">Savings</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default TransactionCategorySelect;
