"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function FireCalculator() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
         
          <main className="flex-1 py-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-4">Input</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentAge">Current Age</Label>
                    <Input id="currentAge" type="number" min="18" max="100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="desiredRetirementAge">Desired Retirement Age</Label>
                    <Input id="desiredRetirementAge" type="number" min="18" max="100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentAnnualSavings">Current Annual Savings</Label>
                    <Input id="currentAnnualSavings" type="number" min="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentNetWorth">Current Net Worth</Label>
                    <Input id="currentNetWorth" type="number" min="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="desiredAnnualRetirementSpending">Desired Annual Retirement Spending</Label>
                    <Input id="desiredAnnualRetirementSpending" type="number" min="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="annualInvestmentGrowthRate">Assumed Annual Investment Growth Rate</Label>
                    <Input id="annualInvestmentGrowthRate" type="number" min="0" max="100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="annualInflationRate">Assumed Annual Inflation Rate</Label>
                    <Input id="annualInflationRate" type="number" min="0" max="100" />
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Years to Retirement</Label>
                    <div className="text-2xl font-bold">25</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Total Savings at Retirement</Label>
                    <div className="text-2xl font-bold">$1,500,000</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Projected Retirement Income</Label>
                    <div className="text-2xl font-bold">$60,000</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Retirement Savings Needed</Label>
                    <div className="text-2xl font-bold">$1,200,000</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Projected Retirement Expenses</Label>
                    <div className="text-2xl font-bold">$50,000</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Projected Retirement Surplus/Shortfall</Label>
                    <div className="text-2xl font-bold text-green-500">$10,000</div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        
        </div>
      )
    }