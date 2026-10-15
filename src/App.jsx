import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FoodSection from './components/FoodSection/FoodSection'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import CustomerReview from './components/CustomerReview/CustomerReview'
import Footer from './components/Footer/Footer'



const foodDataRes = fetch("https://themealdb.com/api/json/v1/1/search.php?f=a")
  .then(res => res.json())


function App() {

  return (
    <>

      <Navbar></Navbar>


      <div className="meals-header">
        <h2 className="meals-heading">Explore Our Meals</h2>
        <p>Discover delicious dishes, explore exciting flavors, and find your
          favorite meals prepared to make every dining moment special.</p>
      </div>



      <Suspense
        fallback={<SkeletonLoading></SkeletonLoading>}
      >
        <FoodSection foodDataRes={foodDataRes}></FoodSection>
      </Suspense>



      <WhyChooseUs></WhyChooseUs>

      <CustomerReview></CustomerReview>

      <Footer></Footer>

    </>
  )
}





const SkeletonLoading = () => {
  return (
    <div className="!mx-20 mx-auto grid grid-cols-4 gap-6 px-6 py-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 rounded-xl p-4 shadow"
        >
          <div className="skeleton h-48 w-full"></div>
          <div className="skeleton h-6 w-3/4"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-1/2"></div>
          <div className="skeleton h-10 w-1/3"></div>
        </div>
      ))}
    </div>
  );
};





export default App
