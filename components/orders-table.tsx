"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample order data
const orders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    date: "2023-04-19T10:30:00",
    status: "completed",
    total: 42.99,
    items: [
      { name: "Chicken Burger", quantity: 2, price: 12.99 },
      { name: "French Fries", quantity: 1, price: 4.99 },
      { name: "Soda", quantity: 2, price: 2.99 },
    ],
  },
  {
    id: "ORD-002",
    customer: "Emily Johnson",
    date: "2023-04-19T11:45:00",
    status: "processing",
    total: 35.5,
    items: [
      { name: "Veggie Pizza", quantity: 1, price: 18.99 },
      { name: "Garden Salad", quantity: 1, price: 8.99 },
      { name: "Iced Tea", quantity: 1, price: 3.49 },
    ],
  },
  {
    id: "ORD-003",
    customer: "Michael Brown",
    date: "2023-04-19T12:15:00",
    status: "pending",
    total: 27.98,
    items: [
      { name: "Pasta Alfredo", quantity: 1, price: 16.99 },
      { name: "Garlic Bread", quantity: 1, price: 5.99 },
      { name: "Bottled Water", quantity: 1, price: 1.99 },
    ],
  },
  {
    id: "ORD-004",
    customer: "Sarah Wilson",
    date: "2023-04-19T13:30:00",
    status: "completed",
    total: 52.97,
    items: [
      { name: "Steak Sandwich", quantity: 2, price: 19.99 },
      { name: "Onion Rings", quantity: 1, price: 6.99 },
      { name: "Milkshake", quantity: 1, price: 5.99 },
    ],
  },
  {
    id: "ORD-005",
    customer: "David Lee",
    date: "2023-04-19T14:45:00",
    status: "cancelled",
    total: 31.98,
    items: [
      { name: "Fish & Chips", quantity: 1, price: 17.99 },
      { name: "Coleslaw", quantity: 1, price: 3.99 },
      { name: "Lemonade", quantity: 2, price: 4.99 },
    ],
  },
  {
    id: "ORD-006",
    customer: "Jessica Taylor",
    date: "2023-04-19T15:30:00",
    status: "processing",
    total: 45.97,
    items: [
      { name: "BBQ Ribs", quantity: 1, price: 24.99 },
      { name: "Corn on the Cob", quantity: 2, price: 4.99 },
      { name: "Iced Tea", quantity: 2, price: 3.49 },
    ],
  },
  {
    id: "ORD-007",
    customer: "Robert Martinez",
    date: "2023-04-19T16:15:00",
    status: "pending",
    total: 38.98,
    items: [
      { name: "Chicken Wings", quantity: 2, price: 14.99 },
      { name: "Potato Wedges", quantity: 1, price: 5.99 },
      { name: "Soda", quantity: 1, price: 2.99 },
    ],
  },
]

type OrdersTableProps = {
  limit?: number
}

export function OrdersTable({ limit }: OrdersTableProps) {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  const displayOrders = limit ? orders.slice(0, limit) : orders

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "processing":
        return "bg-blue-500"
      case "pending":
        return "bg-yellow-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayOrders.map((order) => (
            <>
              <TableRow key={order.id}>
                <TableCell>
                  <Button variant="ghost" size="icon" onClick={() => toggleOrderDetails(order.id)}>
                    {expandedOrder === order.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </TableCell>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>
                  <Badge className={`${getStatusColor(order.status)} text-white`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Update status</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Contact customer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              {expandedOrder === order.id && (
                <TableRow>
                  <TableCell colSpan={7} className="bg-muted/50 p-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Order Items</h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {order.items.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.quantity}</TableCell>
                              <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                              <TableCell className="text-right">${(item.quantity * item.price).toFixed(2)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
