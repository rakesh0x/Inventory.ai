"use client"

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
import { useState } from "react"

const initialTeamNames = [
  { SerialNo: "01", Names: "Arjun Mehta", Contact: "+91 9758682785", Email: "arjun123@gmail.com" },
  { SerialNo: "02", Names: "Priya Sharma", Contact: "+91 8765987676", Email: "priya123@gmail.com" },
  { SerialNo: "03", Names: "Ravi Kumar", Contact: "+91 7809652546", Email: "ravi123@gmail.com" },
  { SerialNo: "04", Names: "Neha Verma", Contact: "+91 9087987898", Email: "neha123@gmail.com" },
  { SerialNo: "05", Names: "Vikas Patel", Contact: "+91 9691298512", Email: "vikas123@gmail.com" },
  { SerialNo: "06", Names: "Sunita Joshi", Contact: "+91 9075454681", Email: "sunita123@gmail.com" },
  { SerialNo: "07", Names: "Amit Singh", Contact: "+91 6290572434", Email: "amit123@gmail.com" },
]

export default function TableDemo() {
  const [teamNames, setTeamNames] = useState(initialTeamNames)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contactNo, setContactNo] = useState("")

  function appendArray(e: React.FormEvent) {
    e.preventDefault()

    // Calculate the next serial number
    const nextSerial = (teamNames.length + 1).toString().padStart(2, "0")

    // Create new team member object
    const newMember = {
      SerialNo: nextSerial,
      Names: name,
      Email: email,
      Contact: contactNo,
    }

    // Update the state
    setTeamNames([...teamNames, newMember])

    // Clear form fields
    setName("")
    setEmail("")
    setContactNo("")
  }

  // Delete Function
  function deleteMember(serialNoToDelete: string) {
    const updatedTeam = teamNames.filter((member) => member.SerialNo !== serialNoToDelete)
    setTeamNames(updatedTeam)
  }

  return (
    <>
      <Dialog>
        <form onSubmit={appendArray}>
          <DialogTrigger asChild>
            <Button variant="destructive">Add a Member</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Member +</DialogTitle>
              <DialogDescription>
                Enter name, E-mail, and Phone no to add a new member in the team list.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input
                  id="name-1"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">E-mail</Label>
                <Input
                  id="username-1"
                  name="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="phoneNo">Contact No</Label>
                <Input
                  id="ContactNo-1"
                  name="contact"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" onClick={appendArray}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      <Table>
        <TableCaption>A list of your recent team members.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No</TableHead>
            <TableHead>Name of Member</TableHead>
            <TableHead>Email ID</TableHead>
            <TableHead className="text-right">Contact No</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamNames.map((teamMember) => (
            <TableRow key={teamMember.SerialNo}>
              <TableCell className="font-medium">{teamMember.SerialNo}</TableCell>
              <TableCell>{teamMember.Names}</TableCell>
              <TableCell>{teamMember.Email}</TableCell>
              <TableCell className="text-right">{teamMember.Contact}</TableCell>
              <TableCell className="text-center">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteMember(teamMember.SerialNo)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total Members</TableCell>
            <TableCell className="text-center">{teamNames.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}
