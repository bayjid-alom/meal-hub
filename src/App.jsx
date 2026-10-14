import { Suspense } from 'react'
import './App.css'
import FoodSection from './components/FoodSection/FoodSection'
import Navbar from './components/Navbar/Navbar'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'



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


      <Suspense fallback={<h4>Loading meals....</h4>}>
        <FoodSection foodDataRes={foodDataRes}></FoodSection>
      </Suspense>



      <WhyChooseUs></WhyChooseUs>



    </>
  )
}

export default App
