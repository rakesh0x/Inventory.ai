import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TeamNames = [
  {
    SerialNo: "01",
    Names: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    SerialNo: "02",
    Names: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    SerialNo: "03",
    Names: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    SerialNo: "04",
    Names: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    SerialNo: "05",
    Names: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    SerialNo: "06",
    Names: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    SerialNo: "07",
    Names: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.No</TableHead>
          <TableHead>Name of Assignee</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TeamNames.map((TeamNames) => (
          <TableRow key={TeamNames.SerialNo}>
            <TableCell className="font-medium">{TeamNames.SerialNo}</TableCell>
            <TableCell>{TeamNames.Names}</TableCell>
            <TableCell>{TeamNames.paymentMethod}</TableCell>
            <TableCell className="text-right">{TeamNames.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
