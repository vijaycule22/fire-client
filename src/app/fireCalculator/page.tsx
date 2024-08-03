import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">

      <main className="flex-1 py-12 md:py-20 mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Achieve Financial Independence, Retire Early</h1>
            <p className="text-muted-foreground text-lg">
              Use our FIRE calculator to plan your path to financial freedom.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="income">Annual Income</Label>
                  <Input id="income" type="number" placeholder="Enter your annual income" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expenses">Annual Expenses</Label>
                  <Input id="expenses" type="number" placeholder="Enter your annual expenses" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="savings">Current Savings</Label>
                  <Input id="savings" type="number" placeholder="Enter your current savings" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="retirement-age">Retirement Age</Label>
                  <Input id="retirement-age" type="number" placeholder="Enter your desired retirement age" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="investment-return">Investment Return</Label>
                  <Input id="investment-return" type="number" placeholder="Enter your expected investment return" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inflation-rate">Inflation Rate</Label>
                  <Input id="inflation-rate" type="number" placeholder="Enter your expected inflation rate" />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Calculate
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Time to Financial Independence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Years to FI:</span>
                  <span className="font-semibold">12 years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Savings Needed:</span>
                  <span className="font-semibold">$500,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Retirement Income:</span>
                  <span className="font-semibold">$40,000/year</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What is FIRE?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  FIRE (Financial Independence, Retire Early) is a movement that focuses on saving and investing a large
                  percentage of your income to achieve financial independence and the ability to retire early.
                </p>
                <Link href="#" className="text-primary hover:underline" prefetch={false}>
                  Learn more about the FIRE movement
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

    </div>
  )
}

