import Image from "next/image";
import { getOrderData, getPricingData, getReviewData } from "./util/dataStore";
import PieGraph from "./components/PieGraph";
export default function Home() {
  const orderData = getOrderData();
  const pricingData = getPricingData();
  const reviewData = getReviewData();

  return (
    <main>
      <div className="text-center py-3 font-bold border-b-2">
          <p>Slice of pi</p>
      </div>
    </main>
  );
}
