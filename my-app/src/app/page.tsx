import StickyHeader from '../components/StickyHeader'
import Banner from '@/components/Banner'
import Middle from '@/components/Middle'
import End from '@/components/End'

// type BoxProps = {
//   children?: React.ReactNode;
//   className?: string;
// };

// function Box({ children, className = "" }: BoxProps) {
//   return (
//     <div className={`w-[700px] h-screen bg-gray-200 border border-gray-400 rounded-md p-4 shadow-md ${className}`}>
//       {children}
//     </div>
//   );
// }

export default function Home() {
  return (
    <>
    <StickyHeader />
    <Banner />
    <Middle />
    <End />
    { }
    </>
  );
}
