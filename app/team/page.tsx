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
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const TeamNames = [
  {
    SerialNo: "01",
    Names: "Arjun Mehta",
    Contact: "+91 9758682785",
    Email: "arjun123@gmail.com",
  },
  {
    SerialNo: "02",
    Names: "Priya Sharma",
    Contact: "+91 8765987676",
    Email: "priya123@gmail.com",
  },
  {
    SerialNo: "03",
    Names: "Ravi Kumar",
    Contact: "+91 7809652546",
    Email: "ravi123@gmail.com",
  },
  {
    SerialNo: "04",
    Names: "Neha Verma",
    Contact: "+91 9087987898",
    Email: "neha123@gmail.com",
  },
  {
    SerialNo: "05",
    Names: "Vikas Patel",
    Contact: "+91 9691298512",
    Email: "vikas123@gmail.com",
  },
  {
    SerialNo: "06",
    Names: "Sunita Joshi",
    Contact: "+91 9075454681",
    Email: "sunita123@gmail.com",
  },
  {
    SerialNo: "07",
    Names: "Amit Singh",
    Contact: "+91 6290572434",
    Email: "amit123@gmail.com",
  },
]

function addaTeammember() {
  TeamNames.map
}

export default function TableDemo() {
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="destructive">Add a Member</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Member +</DialogTitle>
              <DialogDescription>
                Enter name , E-mail and Phone no to add a new Member in the team list.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input id="username-1" name="username" defaultValue="@peduarte" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    <Table>
      <TableCaption>A list of your recent.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.No</TableHead>
          <TableHead>Name of Member</TableHead>
          <TableHead>Email ID</TableHead>
          <TableHead className="text-right">Contact No</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TeamNames.map((TeamNames) => (
          <TableRow key={TeamNames.SerialNo}>
            <TableCell className="font-medium">{TeamNames.SerialNo}</TableCell>
            <TableCell>{TeamNames.Names}</TableCell>
            <TableCell>{TeamNames.Email}</TableCell>
            <TableCell className="text-right">{TeamNames.Contact}</TableCell>
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
    </>
  )
}