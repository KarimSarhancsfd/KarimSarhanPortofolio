import t1 from "../assets/test1.png";
import t2 from "../assets/test2.png";
import t3 from "../assets/test3.png";
import t4 from "../assets/test4.png";
import styles from './testtimonial.module.css';

export default function Testimonial() {
  return (
    <div className="overflow-hidden relative w-full py-8">
      <div className={`${styles.marqueeContainer} flex`}>
        <div className="flex space-x-8 pr-8">
          {/* Testimonial 1 */}
          <div className="relative rounded-xl overflow-auto min-w-[400px]">
            <div className="bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 p-6">
              <img src={t1} className="w-24 h-24 rounded-full shadow-lg" />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-gray-600">Amazing service!</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="relative rounded-xl overflow-auto min-w-[400px]">
            <div className="bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 p-6">
              <img src={t2} className="w-24 h-24 rounded-full shadow-lg" />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Excellent work!</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="relative rounded-xl overflow-auto min-w-[400px]">
            <div className="bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 p-6">
              <img src={t3} className="w-24 h-24 rounded-full shadow-lg" />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">Mike Johnson</h3>
                <p className="text-gray-600">Highly recommended!</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 4 */}
          
          
         
        </div>
      </div>
    </div>
  );
}
// } display them in flex beside each other and make it move from right to lift