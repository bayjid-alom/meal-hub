import './App.css'
import FoodSection from './components/FoodSection/FoodSection'
import Navbar from './components/Navbar/Navbar'


function App() {

  const loadMeals = async () => {
    const res = await fetch("https://themealdb.com/api/json/v1/1/search.php?f=a")
    const data = await res.json()
    console.log(data.meals);
  }

  loadMeals()

  return (
    <>

      <Navbar></Navbar>
      <FoodSection></FoodSection>


    </>
  )
}

export default App
