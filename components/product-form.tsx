"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProductForm() {
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)
      // Simulate upload delay
      setTimeout(() => {
        setPreview(URL.createObjectURL(file))
        setIsUploading(false)
      }, 1500)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      alert("Product added successfully!")
      // Reset form
      setPreview(null)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="Delicious Burger" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input id="price" type="number" step="0.01" min="0" placeholder="9.99" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select required>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="appetizers">Appetizers</SelectItem>
                <SelectItem value="main-course">Main Course</SelectItem>
                <SelectItem value="desserts">Desserts</SelectItem>
                <SelectItem value="beverages">Beverages</SelectItem>
                <SelectItem value="sides">Sides</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe your product..." className="min-h-[120px]" required />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Product Image</Label>
            <Card className="flex flex-col items-center justify-center border-dashed p-6 h-[300px]">
              {preview ? (
                <div className="relative w-full h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={preview || "/placeholder.svg"}
                    alt="Product preview"
                    className="w-full h-full object-contain"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="absolute bottom-2 right-2"
                    onClick={() => setPreview(null)}
                  >
                    Change
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Drag & drop your image here</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG or WEBP up to 5MB</p>
                  </div>
                  <Input id="image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                  <Label
                    htmlFor="image"
                    className="cursor-pointer rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
                  >
                    Select Image
                  </Label>
                </div>
              )}
            </Card>
          </div>

          <div className="space-y-2">
            <Label htmlFor="inventory">Inventory</Label>
            <Input id="inventory" type="number" min="0" placeholder="50" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preparation-time">Preparation Time (minutes)</Label>
            <Input id="preparation-time" type="number" min="1" placeholder="15" required />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600" disabled={isUploading}>
          {isUploading ? "Saving..." : "Add Product"}
        </Button>
      </div>
    </form>
  )
}
