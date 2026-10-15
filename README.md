## Meal Hub



#### Section components
```
import { Suspense } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import FoodSection from './components/FoodSection/FoodSection' !!
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import CustomerReview from './components/CustomerReview/CustomerReview'
import Footer from './components/Footer/Footer'
```


####   List meals by first letter

```
API : "https://themealdb.com/api/json/v1/1/search.php?f=a"
```



Problem : Can't Direct deploy react project
Solution :  You have to build first.
npm run build >>>
dist [Folder cole asbe]


```
Not work. Not update in UI...console e show hocche:

  let number = 0;
  const changeNumber = () => {
    number = 6;
    console.log(number)  
  }


   <button onClick={changeNumber}>Click Me</button>
```



```
const [number, setNumber] = useState(0)
Here:
number >> variable
setNumber >> function
  
```


```
Worked :

function App() {
  const [number, setNumber] = useState(0)

  const changeNumber = () => {
    const newNumber = number + 5;
    setNumber(newNumber)
  }

  return (
    <>
      <h2>Number - {number}</h2>
      <button onClick={changeNumber}>Click Me</button>
    </>
  )
}
```


#### Initial Setup niye asar jonno 
rsc >>> Enter

### Auto Import a Components Path
<ComponentName   >>> Enter

### Problem : Image not show
<img src="./assets/food.jpg" alt="Food image!" />

To fix :
```
import navImage from "./assets/food.jpg"
<img src={navImage} alt="Food image!" />
```


### promise {props} hisebe receive korle seta ke 
 use().....er vitor rakhle >>> object return korbe {....Array[]}
```
const FoodSection = ({ foodDataRes }) => {
    const data = use(foodDataRes)
    const foods = data.meals;
    console.log(foods);
```




#### Use one component another files
```
App.jsx ||

import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  const [number, setNumber] = useState(0)

  const changeNumber = () => {
    const newNumber = number + 5;
    setNumber(newNumber)
  }

  return (
    <>
      <h3>From App.jsx - {number}</h3>
      <Home number={number}></Home>

      <button onClick={changeNumber}>Click Me</button>
    </>
  )
}

export default App



Home.jsx ||

import React from 'react';

const Home = ({ number }) => {
    return (
        <div>
            <h3>From Home.jsx - {number}</h3>
        </div>
    );
};

export default Home;
```



### Multiple button e color dite chaile
```
App.css

.add-btn{
  color: white;
  background-color: black;
  padding: 7px 20px;
  border-radius: 5px;
}
```

```
<>
      <button className='add-btn'>Add Now</button>
      <button style={{backgroundColor: 'gray'}} className='add-btn'>Add Now</button>
      <button className='add-btn'>Add Now</button>
      <button className='add-btn'>Add Now</button>
    </>
```

### Easy way is :
```
Button.jsx ||

import React from 'react';

// এখানে চাইলে আরও props receive করতে পারি । যেমনঃ (textColor)
const Button = ({ bgColor, text }) => {
    return (
        <div>
            <button style={{ backgroundColor: bgColor }} className='add-btn'>{text}</button>
        </div>
    );
};

export default Button;
```



```
App.jsx ||

import './App.css'
import Button from './components/Button/Button'

function App() {

  return (
    <>
      <h2>Button From App.jsx</h2>
      <Button bgColor={'black'} text={'Add Now'}></Button>
      <Button bgColor={'navy'} text={'Learn More'}></Button>
      <Button bgColor={'green'} text={'Read Now'}></Button>
    // এখান থেকে চাইলে আরও props send করতে পারি । যেমনঃ (textColor={'bisque'})
    </>
  )
}

export default App
```



### Loading spiinner (fallback)
```
<Suspense
        fallback={
          <div className="flex justify-center items-center !py-25">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
   >
    <FoodSection foodDataRes={foodDataRes}></FoodSection>
</Suspense>
```































<br>

### || React Fundamentals

<details>
<summary>1. Library vs Framework</summary>

### A. A Minimal Setup (Library)
A **Library** provides specific tools and functions that developers can use to solve particular problems. Developers have more control over how to structure their applications.

**Example:** React is a JavaScript library for building user interfaces.

### B. A Full Setup (Framework)
A **Framework** provides a more structured environment with predefined rules and tools for building applications. It often handles routing, data management, and other common tasks.

**Example:** Angular is a frontend framework.

</details>

<details>
<summary>2. Advantages of Using React</summary>

### A. Virtual DOM
The Virtual DOM is a lightweight representation of the actual DOM. React compares changes and updates the necessary parts of the UI, helping make UI updates efficient.

### B. Component-Based Architecture (Reusability)
React applications are built using small, reusable components. This makes code easier to maintain, organize, and reuse across different parts of an application.

### C. One-Way Data Binding (Predictability)
Data generally flows from parent components to child components through props. This makes data flow easier to understand, track, and debug.

### D. Massive Ecosystem and Community
React has a large community, extensive documentation, and many supporting libraries. Developers can find learning resources, reusable tools, and solutions to common problems.

</details>

<details>
<summary>3. Vite Project Setup</summary>

Vite is a frontend build tool that provides a fast development server and a modern project setup for frameworks and libraries like React.

**Step 1: Create a React project**

    npm create vite@latest my-react-app -- --template react

**Step 2: Navigate to the project folder**

    cd my-react-app

**Step 3: Install dependencies**

    npm install

**Step 4: Start the development server**

    npm run dev

**Step 5:** Open the local URL shown in the terminal to view your application.

</details>

<details>
<summary>4. Components in React</summary>

A **Component** is a reusable and independent piece of a user interface. It can contain its own JSX, logic, and data received through props.

### A. Reusability
A component can be created once and reused in multiple places. For example, a `Button` component can be used for Login, Submit, and Learn More buttons without rewriting the same UI code.

### B. Nestability
Components can be placed inside other components to build complex interfaces from smaller pieces. For example, an `App` component can contain a `Navbar`, `MainContent`, and `Footer` component.

### C. Independent Logic
Each component can manage its own UI-related logic and behavior. For example, a `Counter` component can handle counting while a `Navbar` component handles navigation, keeping their responsibilities separate.

### D. Props (Inputs)
Props are inputs passed from a parent component to a child component. They allow components to receive dynamic data, such as a user's name or a product's price, and display it without hardcoding the values.

</details>

<details>
<summary>5. Import and Export</summary>

**Export** allows a component, function, or variable to be shared with other files. **Import** allows another file to use that exported item.

- **Default Export:** Exports one main item from a file.
- **Named Export:** Exports items by their specific names.

</details>

<details>
<summary>6. State</summary>

**State** is data managed by a component that can change over time. When state updates, React re-renders the component to display the updated UI.

Example use cases include counters, form inputs, shopping carts, and toggling menus.

The `useState()` Hook is commonly used to manage state in functional components.

</details>

<details>
<summary>7. Props</summary>

**Props (Properties)** allow a parent component to pass data to a child component. They make components dynamic and reusable.

Props are read-only from the receiving component's perspective; a child should not directly modify the props it receives.

</details>

<details>
<summary>8. Events</summary>

Events allow React applications to respond to user interactions, such as clicks, typing, and form submissions.

Common examples include `onClick`, `onChange`, and `onSubmit`.

Example: `<button onClick={handleClick}>Click Me</button>`

React event handlers are passed as functions, rather than being called immediately.

</details>

<details>
<summary>9. Lifting State Up</summary>

**Lifting State Up** means moving shared state from child components to their closest common parent component.

The parent manages the state and passes the necessary data and event handlers to its children through props. This helps multiple components stay synchronized when they need to share the same data.

</details>

<details>
<summary>10. Problem: Vite Development Server Not Updating</summary>

### Problem
Sometimes, after updating Vite or its related dependencies, the development server may not reflect file changes as expected.

### Solution

**Step 1: Stop the development server.**

Press `Ctrl + C` in the terminal.

**Step 2: Delete the following from the project folder:**
- `node_modules`
- `package-lock.json`

**Step 3: Install compatible development dependencies.**

    npm install -D vite@7 @vitejs/plugin-react@4

**Step 4: Reinstall the project dependencies.**

    npm install

**Step 5: Start the development server again.**

    npm run dev

### If the problem persists
- Ensure you are editing files inside the correct project folder.
- Check that the development server is running without errors.
- Check your `vite.config.js` configuration.
- If necessary, try a forced dependency re-optimization:

      npm run dev -- --force

**Note:** Vite 7 and `@vitejs/plugin-react` 4 are version-specific choices, not a universal fix. If your project uses a different Vite version, check compatibility before changing dependencies. If the issue is caused by file watching, the cause may be unrelated to the package versions.

</details>

<br>







## 👨‍💻 Author

**Bayjid Alom**

> Progress is built through consistency, one line of code at a time.






