"use client"

import { useState } from "react"
import { BarChart3, Home, Package, PieChart, Plus, Settings, ShoppingCart, Users, Wallet } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductForm } from "./components/product-form"
import { OrdersTable } from "./components/orders-table"
import { PaymentSummary } from "./components/payment-summary"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6 text-orange-500" />
          <span className="text-lg">FoodVendor</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="hidden w-64 shrink-0 border-r bg-background md:block">
          <div className="flex h-full flex-col gap-2 p-2">
            <div className="px-4 py-4">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User avatar"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Sarah's Kitchen</div>
                  <div className="text-xs text-muted-foreground">Premium Vendor</div>
                </div>
              </div>
            </div>
            <nav className="grid gap-1 px-2">
              <Link
                href="#"
                onClick={() => setActiveTab("overview")}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  activeTab === "overview"
                    ? "bg-orange-500 text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } transition-all`}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                onClick={() => setActiveTab("products")}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  activeTab === "products"
                    ? "bg-orange-500 text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } transition-all`}
              >
                <Package className="h-4 w-4" />
                Products
              </Link>
              <Link
                href="#"
                onClick={() => setActiveTab("orders")}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  activeTab === "orders"
                    ? "bg-orange-500 text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } transition-all`}
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
              </Link>
              <Link
                href="#"
                onClick={() => setActiveTab("payments")}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  activeTab === "payments"
                    ? "bg-orange-500 text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                } transition-all`}
              >
                <Wallet className="h-4 w-4" />
                Payments
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$12,543.00</div>
                    <p className="text-xs text-muted-foreground">+18% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+24</div>
                    <p className="text-xs text-muted-foreground">+12% from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Products</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">+3 new this month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Customers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">+201 since last month</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>You have received 24 orders this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <OrdersTable limit={5} />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Sales Overview</CardTitle>
                    <CardDescription>Monthly revenue breakdown</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed">
                      <div className="flex flex-col items-center gap-1 text-center">
                        <PieChart className="h-8 w-8 text-orange-500" />
                        <h3 className="text-sm font-medium leading-none">Sales Chart</h3>
                        <p className="text-xs text-muted-foreground">Revenue distribution by category</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Products Tab */}
            <TabsContent value="products" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Product</CardTitle>
                  <CardDescription>Upload your food products to your store</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProductForm />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Orders</CardTitle>
                  <CardDescription>Manage your customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <OrdersTable />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                  <CardDescription>View your earnings and payment history</CardDescription>
                </CardHeader>
                <CardContent>
                  <PaymentSummary />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
