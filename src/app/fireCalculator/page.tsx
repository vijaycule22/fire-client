"use client"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CartesianGrid, XAxis, Line, LineChart, Bar, BarChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { JSX, ClassAttributes, HTMLAttributes, SVGProps } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import RetirementDetailsSchema from "@/schemas/retirementDetails"

export default function FireCalculator() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(RetirementDetailsSchema)
  });

  const onSubmitForm = async (data: any) => {
    console.log('on submit')
    console.log(data);

    try {
      const response = await fetch('http://0.0.0.0:8000/fire_calculator_retirement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to sign up');
      }

      const result = await response.json();
      // setSuccessMessage(result.message);
    } catch (error) {
      // setServerError(error.message);
    }
  };
  const getErrorMessage = (error: any) => {
    if (error) {
      return error.message;
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 py-12 md:py-20 mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Achieve Financial Independence, Retire Early</h1>
            <p className="text-muted-foreground text-lg">
              Use our FIRE calculator to plan your path to financial freedom.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit((data) => onSubmitForm(data))}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current_monthly_expenses">current monthly expenses</Label>
                  <Input id="current_monthly_expenses"   {...register("current_monthly_expenses", { valueAsNumber: true })} type="number" placeholder="Enter your annual income" />
                  {errors.current_monthly_expenses && <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.current_monthly_expenses)}</p>}

                </div>
                <div className="space-y-2">
                  <Label htmlFor="current_age">current age</Label>
                  <Input id="current_age" {...register("current_age", { valueAsNumber: true })} type="number" placeholder="Enter your annual expenses" />
                  {errors.current_age && <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.current_age)}</p>}

                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="retirement_age">Retirement age</Label>
                  <Input id="retirement_age" type="number" {...register("retirement_age", { valueAsNumber: true })} placeholder="Enter your current savings" />
                  {errors.retirement_age && <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.retirement_age)}</p>}

                </div>
                <div className="space-y-2">
                  <Label htmlFor="expected_life_span">Expected life span</Label>
                  <Input id="expected_life_span" type="number" {...register("expected_life_span", { valueAsNumber: true })} placeholder="Enter your desired retirement age" />
                  {errors.expected_life_span && <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.expected_life_span)}</p>}

                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current_investments">Current investment</Label>
                  <Input id="current_investments" type="number" {...register("current_investments", { valueAsNumber: true })} placeholder="Enter your expected investment return" />
                  {errors.current_investments && <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.current_investments)}</p>}

                </div>
                <div className="space-y-2">
                  <Label htmlFor="expected_inflation">Inflation Rate</Label>
                  <Input id="expected_inflation" {...register("expected_inflation", { valueAsNumber: true })} type="number" placeholder="Enter your expected inflation rate" />
                  {errors.expected_inflation && <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.expected_inflation)}</p>}

                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="post_retirement_return">Post retirement return</Label>
                  <Input id="post_retirement_return" type="number" {...register("post_retirement_return", { valueAsNumber: true })} placeholder="Enter your expected investment return" />
                  {errors.post_retirement_return && <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.post_retirement_return)}</p>}

                </div>
                <div className="space-y-2">
                  <Label htmlFor="pre_retirement_return">Pre retirement return</Label>
                  <Input id="pre_retirement_return" {...register("pre_retirement_return", { valueAsNumber: true })} type="number" placeholder="Enter your expected inflation rate" />
                  {errors.pre_retirement_return && <p className="mt-2 text-sm text-red-600">{getErrorMessage(errors.pre_retirement_return)}</p>}

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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Savings Growth Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <LinechartChart className="aspect-[16/9]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Retirement Income Projections</CardTitle>
            </CardHeader>
            <CardContent>
              <BarchartChart className="aspect-[16/9]" />
            </CardContent>
          </Card>
        </div>
      </main>

    </div>
  )
}

export function BarchartChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}


function FlameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function LinechartChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}

