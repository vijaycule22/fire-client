// "use client"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"

// export default function FireCalculator() {
//     return (
//         <div className="flex flex-col min-h-screen bg-background">

//           <main className="flex-1 py-8 px-4 md:px-6 lg:px-8">
//             <div className="max-w-2xl mx-auto space-y-8">
//               <section>
//                 <h2 className="text-xl font-bold mb-4">Input</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="currentAge">Current Age</Label>
//                     <Input id="currentAge" type="number" min="18" max="100" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="desiredRetirementAge">Desired Retirement Age</Label>
//                     <Input id="desiredRetirementAge" type="number" min="18" max="100" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="currentAnnualSavings">Current Annual Savings</Label>
//                     <Input id="currentAnnualSavings" type="number" min="0" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="currentNetWorth">Current Net Worth</Label>
//                     <Input id="currentNetWorth" type="number" min="0" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="desiredAnnualRetirementSpending">Desired Annual Retirement Spending</Label>
//                     <Input id="desiredAnnualRetirementSpending" type="number" min="0" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="annualInvestmentGrowthRate">Assumed Annual Investment Growth Rate</Label>
//                     <Input id="annualInvestmentGrowthRate" type="number" min="0" max="100" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="annualInflationRate">Assumed Annual Inflation Rate</Label>
//                     <Input id="annualInflationRate" type="number" min="0" max="100" />
//                   </div>
//                 </div>
//               </section>
//               <section>
//                 <h2 className="text-xl font-bold mb-4">Results</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label>Years to Retirement</Label>
//                     <div className="text-2xl font-bold">25</div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label>Total Savings at Retirement</Label>
//                     <div className="text-2xl font-bold">$1,500,000</div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label>Projected Retirement Income</Label>
//                     <div className="text-2xl font-bold">$60,000</div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label>Retirement Savings Needed</Label>
//                     <div className="text-2xl font-bold">$1,200,000</div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label>Projected Retirement Expenses</Label>
//                     <div className="text-2xl font-bold">$50,000</div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label>Projected Retirement Surplus/Shortfall</Label>
//                     <div className="text-2xl font-bold text-green-500">$10,000</div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </main>

//         </div>
//       )
//     }

import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

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

