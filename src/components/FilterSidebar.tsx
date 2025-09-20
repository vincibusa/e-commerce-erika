"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([10, 50])
  const [selectedLength, setSelectedLength] = useState("")
  const [selectedStyle, setSelectedStyle] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState("")

  return (
    <aside className="w-full">
      <div className="lg:sticky lg:top-24 space-y-6 lg:space-y-8">
        <div>
          <h3 className="text-xl font-bold text-neutral-900">Filters</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="length">Length</label>
              <Select value={selectedLength} onValueChange={setSelectedLength}>
                <SelectTrigger className="w-full bg-background-light border-primary/30 text-neutral-700 hover:bg-background-light/80">
                  <SelectValue placeholder="Select Length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="long">Long</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="style">Style</label>
              <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                <SelectTrigger className="w-full bg-background-light border-primary/30 text-neutral-700 hover:bg-background-light/80">
                  <SelectValue placeholder="Select Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="natural">Natural</SelectItem>
                  <SelectItem value="volume">Volume</SelectItem>
                  <SelectItem value="dramatic">Dramatic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="material">Material</label>
              <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                <SelectTrigger className="w-full bg-background-light border-primary/30 text-neutral-700 hover:bg-background-light/80">
                  <SelectValue placeholder="Select Material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mink">Mink</SelectItem>
                  <SelectItem value="synthetic">Synthetic</SelectItem>
                  <SelectItem value="silk">Silk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="price">Price Range</label>
              <Slider
                defaultValue={[10, 50]}
                value={priceRange}
                onValueChange={setPriceRange}
                min={10}
                max={100}
                step={5}
                className="mt-4 mb-2"
              />
              <div className="flex justify-between text-xs text-neutral-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}