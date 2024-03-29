'use client'
import Image from "next/image";
import { getOrderData, getPricingData, getReviewData } from "./util/dataStore";
import PieGraph from "./components/PieGraph";
import { DataPoint, Order, OrderItem, Review } from "./util/types";
import StatCard from "./components/StatCard";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
import { SetStateAction, useState } from "react";
import ReactDropdown, { Option } from "react-dropdown";
import 'react-dropdown/style.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const REVIEW_COLOURS: { [key: string]: string } = {
  'angry': '#db0000',
  'sad': '#0050db',
  'happy': '#8bdb00',
  'delighted': '#006e30'
};

const PIZZA_SIZE_OPTS = ['None', 'S', 'M', 'L'];
const PIZZA_TYPE_OPTS = ['None', 'Cheese', 'Pepperoni', 'Deluxe', 'Hawaiian', 'Meatlovers'];

export default function Home() {
  const [pizzaSizeFilter, setPizzaSizeFilter] = useState("None");
  const [pizzaTypeFilter, setPizzaTypeFilter] = useState("None");

  const [startDate, setStartDate] = useState(null as Date | null);
  const [endDate, setEndDate] = useState(null as Date | null);

  const changePizzaSize = (size: Option) => {
    setPizzaSizeFilter(size.value);
  }
  const changePizzaType = (type: Option) => {
    setPizzaTypeFilter(type.value);
  }

  const resetDates = () => {
    setStartDate(null);
    setEndDate(null);
  }

  //set active filters
  const reviewPieGraphFilter = (r: Review) => {
    if (startDate !== null && new Date(r.date) < startDate) return false;
    if (endDate !== null && new Date(r.date) > endDate) return false;

    return true;
  }

  const orderBarGraphFilter = (o: Order) => {
    if (pizzaSizeFilter !== "None" && !o.items.some(i => pizzaSizeFilter === i.size)) return false;
    if (pizzaTypeFilter !== "None" && !o.items.some(i => pizzaTypeFilter === i.type)) return false;
    if (startDate !== null && new Date(o.date) < startDate) return false;
    if (endDate !== null && new Date(o.date) > endDate) return false;

    return true;
  }

  const revenueLineGraphFilter = (o: Order) => {
    if (startDate !== null && new Date(o.date) < startDate) return false;
    if (endDate !== null && new Date(o.date) > endDate) return false;

    return true;
  }


  //Grab Data
  const orderData = getOrderData();
  const pricingData = getPricingData();
  const reviewData = getReviewData() as Review[];

  const tableToDataPoints = (table: { [key: string]: number }) => {
    const result: DataPoint[] = [];
    for (const key in table) {
      result.push({ ind: key, dep: table[key] });
    }
    return result;
  }

  const sumByGroup = (data: { [key: string]: any }[], groupKey: string, itemFilter: (o: any) => boolean = () => true): DataPoint[] => {
    const sum: { [key: string]: number } = {}; // to add up items

    data.filter(itemFilter)
      .forEach((entry: { [key: string]: any }) => {
        // add key to sum if non-existent
        if (!(entry[groupKey] in sum)) sum[entry[groupKey]] = 0;
        // add to sum
        sum[entry[groupKey]]++;
      });

    // generate DataPoint array
    const result: DataPoint[] = tableToDataPoints(sum);
    // add colour
    result.forEach((point) => { point.colour = REVIEW_COLOURS[point.ind] });
    // return
    return result.sort((a, b) => a.ind < b.ind ? -1 : 1);
  }

  const sumOrderCostsByMonth = (data: Order[], itemFilter: (o: any) => boolean = () => true): DataPoint[] => {
    const sumOrderItems = (items: OrderItem[]): number => {
      return items.map((i) => pricingData[i.type][i.size])
        .reduce((x, y) => x + y, 0); // sum up all prices
    }

    const monthTable: { [key: string]: number } = {
      '01': 0,
      '02': 0,
      '03': 0,
      '04': 0,
      '05': 0,
      '06': 0,
      '07': 0,
      '08': 0,
      '09': 0,
      '10': 0,
      '11': 0,
      '12': 0,
    } // per-month total of orders



    data.filter(itemFilter)
    .forEach((order: Order) => {
      const month = order.date.substring(5, 7); // grab the 'MM' from 'YYYY-MM-DD'
      monthTable[month] += sumOrderItems(order.items); // add to per-month sum
    })

    //generate data points, sort ascending, and return
    return tableToDataPoints(monthTable).sort((a, b) => a.ind < b.ind ? -1 : 1);
  }


  const reviewPieGraphData = sumByGroup(reviewData, 'sentiment', reviewPieGraphFilter);
  const orderBarGraphData = sumByGroup(orderData, 'store', orderBarGraphFilter);
  const revenueLineGraphData = sumOrderCostsByMonth(orderData, revenueLineGraphFilter);
  const totalRevenue = revenueLineGraphData.reduce((a, b) => a + b.dep, 0);

  return (
    <main className="bg-yellow-500 h-screen text-white">
      <div className="text-center py-3 text-xxl font-bold border-b-2">
        <p>A Slice of Pi</p>
      </div>
      <h1 className="text-center font-extrabold text-6xl py-3">Dashboard</h1>
      <div className="flex flex-row-reverse mx-4 rounded-lg bg-yellow-600 w-fit p-2">
        <div className="mx-2">
          <p>End Date</p>
          <DatePicker className="border text-black" selected={endDate} onChange={(date) => setEndDate(date)} />
        </div>
        <div className="mx-2">
          <p>Start Date</p>
          <DatePicker className="border text-black" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>

        <div className="mx-2">
          <p>Filter by date range:</p>
          <button className="rounded bg-yellow-500 py-1 px-2 hover:scale-105 ease-in-out duration-300" onClick={resetDates}>Reset</button>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <StatCard title="Reviews by Sentiment">
          <PieGraph data={reviewPieGraphData} semi_circ />
        </StatCard>
        <StatCard title="Orders by Store">
          <>
            <div className="flex py-2 flex-row-reverse">
              <ReactDropdown className="mx-2" options={PIZZA_SIZE_OPTS} onChange={changePizzaSize} value={PIZZA_SIZE_OPTS[0]}></ReactDropdown>
              <ReactDropdown className="mx-2" options={PIZZA_TYPE_OPTS} onChange={changePizzaType} value={PIZZA_TYPE_OPTS[0]}></ReactDropdown>
            </div>
            <BarGraph data={orderBarGraphData} xAxis="Store" yAxis="Order Count" />
          </>
        </StatCard>
        <StatCard title="Total Revenue for Current Date Range">
          <p className="font-bold text-6xl text-center pt-8">${totalRevenue}</p>
        </StatCard>
        <StatCard title="Monthly Revenue">
          <LineGraph data={revenueLineGraphData} xAxis="Month" yAxis="Revenue ($)" />
        </StatCard>
      </div>
    </main>
  );
}
