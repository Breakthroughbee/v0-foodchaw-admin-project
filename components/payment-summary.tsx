"use client"

import { BarChart, Calendar, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample payment data
const payments = [
  {
    id: "PAY-001",
    date: "2023-04-19",
    amount: 1245.67,
    method: "Bank Transfer",
    status: "completed",
  },
  {
    id: "PAY-002",
    date: "2023-04-12",
    amount: 987.5,
    method: "Credit Card",
    status: "completed",
  },
  {
    id: "PAY-003",
    date: "2023-04-05",
    amount: 1102.3,
    method: "Bank Transfer",
    status: "completed",
  },
  {
    id: "PAY-004",
    date: "2023-03-29",
    amount: 876.45,
    method: "Credit Card",
    status: "completed",
  },
  {
    id: "PAY-005",
    date: "2023-03-22",
    amount: 1345.2,
    method: "Bank Transfer",
    status: "completed",
  },
]

export function PaymentSummary() {
  const totalEarnings = payments.reduce((sum, payment) => sum + payment.amount, 0)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                <h3 className="text-2xl font-bold">${totalEarnings.toFixed(2)}</h3>
              </div>
              <div className="rounded-full bg-orange-100 p-3">
                <BarChart className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Payment Period</p>
                <div className="flex items-center gap-2">
                  <Select defaultValue="monthly">
                    <SelectTrigger className="w-[140px] h-8 mt-1">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="rounded-full bg-orange-100 p-3">
                <Calendar className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Payment History</h3>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payment ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.id}</TableCell>
                <TableCell>{formatDate(payment.date)}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell className="text-right">${payment.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="rounded-md border p-6 bg-muted/50">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Payment Analytics</h3>
          <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
            <div className="flex flex-col items-center gap-2 text-center">
              <BarChart className="h-10 w-10 text-orange-500" />
              <h3 className="text-sm font-medium">Monthly Revenue Breakdown</h3>
              <p className="text-xs text-muted-foreground">View your earnings trends over time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
