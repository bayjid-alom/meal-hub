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
        fallback={
          <div className="flex justify-center items-center !py-25">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <FoodSection foodDataRes={foodDataRes}></FoodSection>
      </Suspense>



      <WhyChooseUs></WhyChooseUs>



      <CustomerReview></CustomerReview>


      <Footer></Footer>

    </>
  )
}

export default App
