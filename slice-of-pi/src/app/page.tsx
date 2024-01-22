'use client'
import Image from "next/image";
import { getOrderData, getPricingData, getReviewData } from "./util/dataStore";
import PieGraph from "./components/PieGraph";
import { DataPoint } from "./util/types";

const REVIEW_COLOURS: { [key: string]: string } = {
  'angry': '#db0000',
  'sad': '#0050db',
  'happy': '#8bdb00',
  'delighted': '#006e30'
}

type Order = {
  order_id: number,
  store: string,
  items: {
    type: string
    size: 'L' | 'M' | 'S',
  }[],
  date: string
}

type Review = {
  review_id: number,
  sentiment: string,
  store: string,
  date: string,
  message: string
}

export default function Home() {
  const orderData = getOrderData();
  const pricingData = getPricingData();
  const reviewData = getReviewData() as Review[];

  const aggregateReviewData = (data: Review[]): DataPoint[] => {
    const sum: { [key: string]: number } = {}; // to add up reviews
    const result: DataPoint[] = []; // to return

    data.forEach((review: Review) => {
      // add key if non-existent
      if (!(review.sentiment in sum)) sum[review.sentiment] = 0;
      //add to sum
      sum[review.sentiment]++;
    })

    // generate DataPoint array
    for (const key in sum) {
      result.push({ ind: key, dep: sum[key], colour: REVIEW_COLOURS[key] ?? '#a3a3a3' })
    }

    return result;
  }

  const reviewGraphData = aggregateReviewData(reviewData);

  return (
    <main>
      <div className="text-center py-3 font-bold border-b-2">
        <p>Slice of pi</p>
      </div>
      <div>
        <PieGraph data={reviewGraphData} semi_circ />
      </div>
    </main>
  );
}
