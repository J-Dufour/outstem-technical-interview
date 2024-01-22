'use client'
import Image from "next/image";
import { getOrderData, getPricingData, getReviewData } from "./util/dataStore";
import PieGraph from "./components/PieGraph";
import { DataPoint } from "./util/types";
import StatCard from "./components/StatCard";
import BarGraph from "./components/BarGraph";

const REVIEW_COLOURS: { [key: string]: string } = {
  'angry': '#db0000',
  'sad': '#0050db',
  'happy': '#8bdb00',
  'delighted': '#006e30'
}

type Order = {
  order_id: number,
  store: 'Kanata' | 'Orleans' | 'Downtown' | 'Sandy Hill' | 'The Glebe',
  items: {
    type: 'Cheese' | 'Pepperoni' | 'Deluxe' | 'Hawaiian' | 'Meatlovers',
    size: 'L' | 'M' | 'S',
  }[],
  date: string
}

type Review = {
  review_id: number,
  sentiment: 'delighted' | 'happy' | 'sad' | 'angry',
  store: 'Kanata' | 'Orleans' | 'Downtown' | 'Sandy Hill' | 'The Glebe',
  date: string,
  message: string
}

export default function Home() {
  const orderData = getOrderData();
  const pricingData = getPricingData();
  const reviewData = getReviewData() as Review[];

  const sumByGroup = (data: {[key: string]: any}[], groupKey: string): DataPoint[] => {
    const sum: { [key: string]: number } = {}; // to add up reviews
    const result: DataPoint[] = []; // to return

    data.forEach((entry: {[key: string]: any}) => {
      // add key to sum if non-existent
      if (!(entry[groupKey] in sum)) sum[entry[groupKey]] = 0;
      //add to sum
      sum[entry[groupKey]]++;
    })

    // generate DataPoint array
    for (const key in sum) {
      result.push({ ind: key, dep: sum[key], colour: REVIEW_COLOURS[key]})
    }

    return result;
  }

  const reviewGraphData = sumByGroup(reviewData, 'sentiment');

  return (
    <main>
      <div className="text-center py-3 text-xxl font-bold border-b-2">
        <p>Slice of pi</p>
      </div>
      <div className="flex flex-wrap w-full">
        <StatCard title="Reviews">
          <PieGraph data={reviewGraphData} semi_circ />
        </StatCard>
      </div>
    </main>
  );
}
