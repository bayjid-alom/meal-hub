## 🍽️ MealHub

**Explore delicious meals, discover your favorites, and order your next meal with ease.**

**Live Demo:** https://mealhub-foodzone.surge.sh/
<!-- **Live Demo:** https://mealhub-tastify.netlify.app/ -->



#### 📁 Project Structure

```

meal-hub/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── FoodSection/
│   │   │   ├── FoodSection.jsx
│   │   │   └── foodSection.css
│   │   ├── SingleFood/
│   │   │   ├── SingleFood.jsx
│   │   │   └── singleFood.css
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   └── cart.css
│   │   ├── WhyChooseUs/
│   │   │   ├── WhyChooseUs.jsx
│   │   │   └── whyChooseUs.css
│   │   ├── CustomerReview/
│   │   │   ├── CustomerReview.jsx
│   │   │   └── CustomerReview.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── footer.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

<br>





## || `MealHub` — React Learning `Notes`



#### 🔎 1. Fetch Meals by First Letter

TheMealDB API ব্যবহার করে meal-এর নামের প্রথম অক্ষর অনুযায়ী meals fetch করা যায়।

**API Endpoint:**

```text
https://themealdb.com/api/json/v1/1/search.php?f=a
```

এখানে `f=a` মানে meal-এর নাম `a` অক্ষর দিয়ে শুরু হয়েছে এমন meals search করা।

---

#### 🚀 2. Deploy a React Project

#### Problem: Can't Directly Deploy a React Project

React project সরাসরি deploy করার পরিবর্তে production build তৈরি করতে হয়।

**Solution:**

Terminal-এ নিচের command run করো:

```bash
npm run build
```

Build সফল হলে project-এর root directory-তে `dist` folder তৈরি হবে।

এই `dist` folder-এর production-ready files hosting platform-এ deploy করতে হয়। Hosting platform অনুযায়ী deployment process আলাদা হতে পারে।

---

### 🔄 3. Why Normal Variables Don't Update the UI

### Problem: Variable Change হচ্ছে, কিন্তু UI Update হচ্ছে না

```jsx
let number = 0;

const changeNumber = () => {
  number = 6;
  console.log(number);
};

<button onClick={changeNumber}>Click Me</button>
```

**কেন UI update হয় না?**

- `number` একটি normal JavaScript variable।
- এর value change হলেও React নিজে থেকে component re-render করে না।
- `console.log(number)` updated value দেখাবে, কিন্তু UI automatically update হবে না।

### Solution: Use `useState()`

```jsx
const [number, setNumber] = useState(0);
```

এখানে:

- `number` → Current state value।
- `setNumber` → State update করার function।
- `useState(0)` → Initial state value `0` নির্ধারণ করে।

### Working Example

```jsx
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    const newNumber = number + 5;
    setNumber(newNumber);
  };

  return (
    <>
      <h2>Number - {number}</h2>
      <button onClick={changeNumber}>Click Me</button>
    </>
  );
}

export default App;
```

**Output:** Button-এ click করলে number `0 → 5 → 10 → 15` এভাবে বাড়বে এবং UI update হবে।

---




#### ⚡ 4. React Component Shortcuts in VS Code

### Create a Component Quickly

VS Code-এ `rsc` লিখে `Enter` চাপলে configured snippet extension-এর মাধ্যমে React component তৈরি করা যায়।

> Note: `rsc` snippet কাজ করার জন্য উপযুক্ত React snippet extension installed থাকতে হবে।

### Auto Import a Component

অন্য file থেকে component ব্যবহার করতে component name লিখে VS Code-এর IntelliSense suggestion থেকে `Enter` চাপলে অনেক ক্ষেত্রে import statement automatically add করা যায়।

Example:

```jsx
<ComponentName />
```

---

### 🖼️ 5. Import Images in React

#### Problem: Image `Not` Showing

```jsx
<img src="./assets/food.jpg" alt="Food image!" />
```

React project-এ `src` directory-এর image এভাবে reference করলে build-এর সময় image path resolve না-ও হতে পারে।

### Solution: Import the Image

```jsx
import navImage from './assets/food.jpg';

<img src={navImage} alt="Food image!" />
```

এখানে image-টি import করার ফলে bundler image file-টি resolve করে production build-এ সঠিকভাবে include করতে পারে।

---

#### 📦 6. Receive a Promise Through Props Using `use()`

React-এর `use()` API দিয়ে একটি Promise resolve করে তার fulfilled value পাওয়া যায়।

Example:

```jsx
const FoodSection = ({ foodDataRes }) => {
  const data = use(foodDataRes);
  const foods = data.meals;

  console.log(foods);
};
```

এখানে:

- `foodDataRes` → Props-এর মাধ্যমে receive করা Promise।
- `use(foodDataRes)` → Promise resolve হলে তার result return করে।
- `data` → API response object।
- `data.meals` → Meals-এর array।

### API Response Structure

```js
{
  meals: [
    {
      idMeal: "52772",
      strMeal: "Teriyaki Chicken Casserole"
    }
  ]
}
```

এটি response structure-এর একটি simplified example।

### Important Notes

- Promise pending থাকলে React-এর `Suspense` দিয়ে loading fallback দেখানো যায়।
- Promise reject হলে error handling প্রয়োজন।
- `use()` ব্যবহার করা component-কে উপযুক্ত Suspense boundary-এর মধ্যে রাখা উচিত।

---

### 🔗 7. Pass Data from One Component to Another

React-এ **Props** ব্যবহার করে parent component থেকে child component-এ data পাঠানো যায়।

#### App.jsx — Parent Component

```jsx
import { useState } from 'react';
import './App.css';
import Home from './Home';

function App() {
  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    const newNumber = number + 5;
    setNumber(newNumber);
  };

  return (
    <>
      <h3>From App.jsx - {number}</h3>

      <Home number={number}></Home>

      <button onClick={changeNumber}>Click Me</button>
    </>
  );
}

export default App;
```

#### Home.jsx — Child Component

```jsx
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

### How It Works

1. `App.jsx`-এ `number` state তৈরি করা হয়েছে।
2. `number={number}` দিয়ে state-এর value `Home` component-এ পাঠানো হয়েছে।
3. `Home.jsx`-এ `{ number }` দিয়ে props receive করা হয়েছে।
4. `setNumber()` call হলে `App` re-render হয় এবং নতুন value `Home`-এও update হয়।

**Remember:** Props দিয়ে parent থেকে child component-এ data পাঠানো যায়।

---

#### 🎨 8. Apply Different Colors to Multiple Buttons

একই CSS class ব্যবহার করে সব button-এর common style রাখা যায়। আর `style` prop দিয়ে প্রতিটি button-এর আলাদা color দেওয়া যায়।

### App.css

```css
.add-btn {
  color: white;
  background-color: black;
  padding: 7px 20px;
  border-radius: 5px;
}
```

#### JSX Example

```jsx
<>
  <button className="add-btn">Add Now</button>

  <button
    style={{ backgroundColor: 'gray' }}
    className="add-btn"
  >
    Add Now
  </button>

  <button className="add-btn">Add Now</button>

  <button className="add-btn">Add Now</button>
</>
```

এখানে সব button-এর common style `.add-btn` class থেকে আসবে। দ্বিতীয় button-এর background color inline style-এর কারণে gray হবে।

---

### 🧩 9. Create a Reusable Button Component Using Props

একই ধরনের button বারবার না লিখে একটি reusable component তৈরি করা যায়। Props ব্যবহার করে প্রতিটি button-এর text ও background color পরিবর্তন করা যায়।

### Button.jsx

```jsx
import React from 'react';

// Props ব্যবহার করে button-এর text ও background color পরিবর্তন করা যায়।
const Button = ({ bgColor, text }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: bgColor }}
        className="add-btn"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
```

### App.jsx

```jsx
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <h2>Button From App.jsx</h2>

      <Button bgColor="black" text="Add Now" />
      <Button bgColor="navy" text="Learn More" />
      <Button bgColor="green" text="Read Now" />
    </>
  );
}

export default App;
```

### How It Works

- `bgColor` → Button-এর background color নির্ধারণ করে।
- `text` → Button-এর ভিতরের text নির্ধারণ করে।
- একই `Button` component একাধিকবার ব্যবহার করা যায়।
- Props পরিবর্তন করে নতুন component তৈরি না করেই ভিন্ন button দেখানো যায়।

**Note:** `Button.jsx`-এ `.add-btn` class ব্যবহার করা হয়েছে। তাই `App.css` বা অন্য কোনো imported CSS file-এ class-টি define থাকতে হবে।

---

#### 📝 Quick Revision

| Topic | What I Learned |
|---|---|
| TheMealDB API | First letter দিয়ে meals search করা |
| `npm run build` | React project-এর production build তৈরি করা |
| `useState()` | State update করে UI re-render করা |
| VS Code snippets | দ্রুত React component তৈরি করা |
| Image import | React project-এ local image ব্যবহার করা |
| `use()` | Promise resolve করে data পাওয়া |
| Props | Parent থেকে child component-এ data পাঠানো |
| CSS classes | Common button styles তৈরি করা |
| Reusable components | একই component বিভিন্ন props দিয়ে ব্যবহার করা |

---

> **Learning Quote:** Progress is built through consistency, one line of code at a time.











### ⏳ 10. Loading UI with Suspense

React-এর `Suspense` ব্যবহার করে API থেকে data load হওয়ার সময় একটি fallback UI দেখানো যায়। MealHub project-এ loading indicator হিসেবে Spinner অথবা Skeleton Loading ব্যবহার করা যায়।

#### 🔄 Loading Spinner (Fallback)

Simple loading animation দেখানোর জন্য DaisyUI-এর loading component ব্যবহার করা হয়েছে।

```jsx
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

**How It Works:**

- `Suspense` Promise resolve হওয়া পর্যন্ত fallback UI দেখাতে পারে।
- `fallback`-এর মধ্যে DaisyUI loading dots ব্যবহার করা হয়েছে।
- Data load হয়ে গেলে `FoodSection` component render হবে।

---
<br>







<details>
<summary>💀 Skeleton Loading</summary>

Spinner-এর পরিবর্তে খাবারের card-এর মতো placeholder দেখাতে Skeleton Loading ব্যবহার করা যায়। এতে content load হওয়ার আগেই সম্ভাব্য layout বোঝা যায়।

#### Usage in App.jsx

```jsx
<Suspense fallback={<SkeletonLoading />}>
  <FoodSection foodDataRes={foodDataRes}></FoodSection>
</Suspense>
```

#### SkeletonLoading.jsx

```jsx
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

export default SkeletonLoading;
```

#### How It Works

- `Array.from({ length: 6 })` দিয়ে ছয়টি placeholder তৈরি করা হয়।
- `.map()` ব্যবহার করে প্রতিটি skeleton card render করা হয়।
- DaisyUI-এর `skeleton` class loading placeholder-এর animation ও appearance দেয়।
- Actual meals load হলে skeleton-এর পরিবর্তে `FoodSection` render হয়।

</details>

<br>









## || Working `Flow`



### 1. Load Data and Display in UI

First, load meals data from the API and display it in the UI.

### 2. Create Cart State — `FoodSection.jsx`

```jsx
const [cart, setCart] = useState([]);
```

এর মানে হলো:

- `cart` → Current cart data
- `setCart` → Cart update করার function
- `[]` → Empty array, কারণ cart-এ multiple food items থাকতে পারে।

### 3. Create a Cart Component

**FoodSection.jsx**

```jsx
{/* Right Side */}
<div className="cart-container" style={{ backgroundColor: 'bisque', width: '25%' }}>
  <h2>Cart</h2>
  <Cart cart={cart}></Cart>
</div>
```

**Cart.jsx**

```jsx
const Cart = ({ cart }) => {};
```

এখানে `cart` props-এর মাধ্যমে Cart component-এ data পাঠানো হচ্ছে।

### 4. Think: Add to Cart

এখন চিন্তা করো, **Add to Cart** button-এ click করলে product কীভাবে Cart section-এ যাবে?

Button কোথায় আছে?

`SingleFood.jsx`

### 5. Lifting State Up

React-এ সাধারণত data parent থেকে child component-এ যায়। কিন্তু এখানে child component থেকে parent-এর state update করতে হবে।

যেখানে data manage করা হচ্ছে, সেখানে একটি function create করতে হবে। তারপর child component-এ সেই function-কে props হিসেবে পাঠাতে হবে।

### 6. Pass Function Through Props

**FoodSection.jsx**

```jsx
{/* Left Side */}
<div style={{ width: '75%' }} className="foods-container">
  {foods.map(food => (
    <SingleFood
      key={food.idMeal}
      addToCart={addToCart}
      food={food}
    />
  ))}
</div>
```

**SingleFood.jsx — Receive Props**

```jsx
const SingleFood = ({ food, addToCart }) => {
```

### 7. Call Function on Button Click

এখন button-এ click হলে function call করে সেই food-এর data পাঠিয়ে দেব।

**❌ Wrong Way — Function is called immediately**

```jsx
<button onClick={addToCart(food)} className="add-to-cart">
  <i className="fa-solid fa-cart-shopping"></i> Add to Cart
</button>
```

**✅ Right Way — Wrapper Function**

```jsx
<button onClick={() => addToCart(food)} className="add-to-cart">
  <i className="fa-solid fa-cart-shopping"></i> Add to Cart
</button>
```

### 8. Receive Food Data

এখন button-এ click করলে প্রতিটি food-এর object `foodData` হিসেবে পাওয়া যাবে।

**FoodSection.jsx**

```jsx
const addToCart = (foodData) => {
  console.log(foodData);
};
```

### 9. Update Cart State

```jsx
const addToCart = (foodData) => {
  setCart([...cart, foodData]);
};
```

এখন button-এ click করলে food-এর data `cart` array-তে যোগ হবে এবং Cart section-এ পাঠানো যাবে।






<br>

<details>
<summary>🛒 Add to Cart — Object Structure</summary>

```json
{
  "idMeal": "53262",
  "strMeal": "Adana kebab",
  "strMealAlternate": null,
  "strCategory": "Lamb",
  "strArea": "Turkish",
  "strInstructions": "Prepare the lamb mixture with spices, shape it around skewers, and grill until cooked.",
  "strMealThumb": "https://www.themealdb.com/images/media/meals/04axct1763793018.jpg",
  "strTags": null,
  "strYoutube": "https://www.youtube.com/watch?v=Wj7sXu9B_ME",
  "strIngredient1": "Romano Pepper",
  "strIngredient2": "Lamb Mince",
  "strIngredient3": "Red Pepper Paste",
  "strIngredient4": "Pul Biber",
  "strIngredient5": "Sunflower Oil",
  "strIngredient6": "",
  "strIngredient7": "",
  "strIngredient8": "",
  "strIngredient9": "",
  "strIngredient10": "",
  "strIngredient11": "",
  "strIngredient12": "",
  "strIngredient13": "",
  "strIngredient14": "",
  "strIngredient15": "",
  "strIngredient16": "",
  "strIngredient17": "",
  "strIngredient18": "",
  "strIngredient19": "",
  "strIngredient20": "",
  "strMeasure1": "2 large",
  "strMeasure2": "800g",
  "strMeasure3": "3 tablespoons",
  "strMeasure4": "1 tablespoon",
  "strMeasure5": "3 tablespoons",
  "strMeasure6": "",
  "strMeasure7": "",
  "strMeasure8": "",
  "strMeasure9": "",
  "strMeasure10": "",
  "strMeasure11": "",
  "strMeasure12": "",
  "strMeasure13": "",
  "strMeasure14": "",
  "strMeasure15": "",
  "strMeasure16": "",
  "strMeasure17": "",
  "strMeasure18": "",
  "strMeasure19": "",
  "strMeasure20": "",
  "strSource": "https://www.bbcgoodfood.com/recipes/adana-kebab",
  "strImageSource": null,
  "strCreativeCommonsConfirmed": null,
  "dateModified": null
}
```


</details>

<br>




### 🛒 SetCart — Add to Cart

```jsx
const addToCart = (foodData) => {
  // cart.push(foodData)   // Not work
  setCart([...cart, foodData]);
};
```

এখন **Add to Cart** button-এ click করলে food item cart-এ যোগ হবে।

### 🗑️ Order Button — Clear Cart

Order button-এ click করলে cart-এর সব item remove হয়ে যাবে।

```jsx
const handleOrder = () => {
  setCart([]);
  alert("Order completed.");
};

<button onClick={handleOrder} className="order-btn">
  Order
</button>
```

---

### 🔔 React Toastify — Attractive Notifications

React Toastify ব্যবহার করে সুন্দর notification দেখানো যায়।

**Install in Terminal:**

```bash
npm i react-toastify
```

**FoodSection.jsx — Import**

```jsx
import { ToastContainer, toast } from 'react-toastify';
```

**Create a Notification Function**

```jsx
function App() {
  const notify = () => toast("Wow so easy!");
}
```

শুধু `alert()`-এর পরিবর্তে ব্যবহার করা যায়:

```jsx
toast("Wow so easy!");
```

**Add ToastContainer**

Button-এর নিচে বা component-এর যেকোনো উপযুক্ত জায়গায় রাখতে পারো।

```jsx
<button onClick={handleOrder} className="order-btn">
  Order
</button>

<ToastContainer />
```

**Different Types of Notifications**

```jsx
toast.success("Order completed!");
toast.error("Something went wrong!");
toast.warning("Please check your order!");
toast.info("Your order is being processed!");
```

---

#### 📝 React Hook Form

Form handling শেখার জন্য documentation:

**Website:** https://react-hook-form.com/
<br>






### 🚀 Deploy to Surge.sh

<details>
<summary>|| Custom Domain Configuration in Surge.sh</summary>

<br>

1. Install Surge on your computer.

   `npm install -g surge`

2. Build your project.

   `npm run build`

3. Deploy your project using the `dist` folder.

   `surge dist your-project-name.surge.sh`

4. If asked, log in to your Surge account.

5. After deployment, open the website link shown in the terminal.

**Note:** Replace `your-project-name` with your preferred domain name.



#### 🌐 CNAME File

#### 📌 What is a CNAME File?
A `CNAME` file is used to specify a custom domain for a website hosted on platforms like GitHub Pages.

#### 📁 Project Structure

    my-project/
    ├── public/
    │   └── CNAME
    ├── src/
    ├── package.json
    └── vite.config.js




#### 📝 CNAME File Content

    surge dist mealhub-foodzone.surge.sh

#### ⚙️ How It Works
1. Create a `CNAME` file inside the `public` folder.
2. Write your custom domain inside the file.
3. Build and deploy your project.
4. GitHub Pages can use the file to identify your custom domain.

#### ⚠️ Important Notes
- The `CNAME` file is mainly used with GitHub Pages for custom domains.
- You must configure the domain's DNS settings correctly.
- The `CNAME` file alone does not connect a domain to your website.
- For Surge.sh, you can specify the domain directly in the deployment command.

    surge dist mealhub-foodzone.surge.sh

</details>








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

> Every project is a new step forward, every line of code brings me closer to my goals.







