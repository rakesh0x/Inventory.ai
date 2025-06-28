"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-02", Mens: 97, Womens: 180 },
  { date: "2024-04-03", Mens: 167, Womens: 120 },
  { date: "2024-04-04", Mens: 242, Womens: 260 },
  { date: "2024-04-05", Mens: 373, Womens: 290 },
  { date: "2024-04-06", Mens: 301, Womens: 340 },
  { date: "2024-04-07", Mens: 245, Womens: 180 },
  { date: "2024-04-08", Mens: 409, Womens: 320 },
  { date: "2024-04-09", Mens: 59, Womens: 110 },
  { date: "2024-04-10", Mens: 261, Womens: 190 },
  { date: "2024-04-11", Mens: 327, Womens: 350 },
  { date: "2024-04-12", Mens: 292, Womens: 210 },
  { date: "2024-04-13", Mens: 342, Womens: 380 },
  { date: "2024-04-14", Mens: 137, Womens: 220 },
  { date: "2024-04-15", Mens: 120, Womens: 170 },
  { date: "2024-04-16", Mens: 138, Womens: 190 },
  { date: "2024-04-17", Mens: 446, Womens: 360 },
  { date: "2024-04-18", Mens: 364, Womens: 410 },
  { date: "2024-04-19", Mens: 243, Womens: 180 },
  { date: "2024-04-20", Mens: 89, Womens: 150 },
  { date: "2024-04-21", Mens: 137, Womens: 200 },
  { date: "2024-04-22", Mens: 224, Womens: 170 },
  { date: "2024-04-23", Mens: 138, Womens: 230 },
  { date: "2024-04-24", Mens: 387, Womens: 290 },
  { date: "2024-04-25", Mens: 215, Womens: 250 },
  { date: "2024-04-26", Mens: 75, Womens: 130 },
  { date: "2024-04-27", Mens: 383, Womens: 420 },
  { date: "2024-04-28", Mens: 122, Womens: 180 },
  { date: "2024-04-29", Mens: 315, Womens: 240 },
  { date: "2024-04-30", Mens: 454, Womens: 380 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Mens: {
    label: "Mens",
    color: "var(--primary)",
  },
  Womens: {
    label: "Womens",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-04-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Visitors</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the selected period
          </span>
          <span className="@[540px]/card:hidden">Selected Period</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={(value) => value && setTimeRange(value)}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillMens" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Mens)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Mens)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillWomens" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Womens)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Womens)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Mens"
              type="natural"
              fill="url(#fillMens)"
              stroke="var(--color-Mens)"
              stackId="a"
            />
            <Area
              dataKey="Womens"
              type="natural"
              fill="url(#fillWomens)"
              stroke="var(--color-Womens)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
