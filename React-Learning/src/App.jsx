import { useState } from "react";
import Greet from "../src/challanges/component/Greet"
import ArrayOfObjectsUseStateExample from "./challanges/component/ArrayOfObjectsUseStateExample";
import ArrayWithUseStateExample from "./challanges/component/ArrayWithUseStateExample";
import Card from "./challanges/component/Card";
import Footer from "./challanges/component/Footer";
import Greeting from "./challanges/component/Greeting";
import Greetingcd from "./challanges/component/GreetingCd";
import Header from "./challanges/component/Header"
import IconComponenet from "./challanges/component/IconComponenet";
import JSXRules from "./challanges/component/JSXRules";
import MainContent from "./challanges/component/MainContent";
import ObjectWithUseState from "./challanges/component/ObjectWithUseStateExample";
import Person from "./challanges/component/Person";
import Product from "./challanges/component/Product";
import ProductInfo from "./challanges/component/ProductInfo";
import ProductList from "./challanges/component/ProductList";
import ProfileCard from "./challanges/component/ProfileCard";
import ComponentOne from "./challanges/component/share-state-example/ComponentOne";
import StyleCard from "./challanges/component/StyleCard";
import UserList from "./challanges/component/UserList";
import UserStatus from "./challanges/component/UserStatus";
import Weather from "./challanges/component/Weather";
import WelcomeMessage from "./challanges/component/WelcomeMessage";
import ComponentTwo from "./challanges/component/share-state-example/ComponentTwo";
import Counter from "./challanges/useStateMastery/Counter";
import ShoppingList from "./challanges/useStateMastery/ShoppingList";
import Profile from "./challanges/useStateMastery/Profile";
import CopyInput from "./challanges/component/react-portal/CopyInput";
import PopupContent from "./challanges/component/react-portal/PopupContent";
import BasicEffect from "./challanges/useEffectMastery/BasicEffect";
import CounterEffect from "./challanges/useEffectMastery/CounterEffect";
import FetchDataEffect from "./challanges/useEffectMastery/FetchDataEffect";
import { createContext } from "react";
import ComponentA from "./challanges/context-api-useContextMastery/ComponentA";
import UserProfile from "./challanges/context-api-useContextMastery/UserProfile";
import UserProvider from "./challanges/context-api-useContextMastery/UserContext";
import UpdateUser from "./challanges/context-api-useContextMastery/UpdateUser";
import CounterWithUseReducer from "./challanges/useReducerMastery/CounterWithUseReducer";
import CounterReducer from "./challanges/useReducerMastery/CounterReducer"
import RefExample from "./challanges/useRefMastery/RefExample";
import FocusInput from "./challanges/useRefMastery/FocusInput";
import Timer from "./challanges/useRefMastery/Timer";
import UniqComponent from "./challanges/UseIdMastery/UniqComponenet";
import CalculatorApp from "./begginer-projects/calculator-app/CalculatorApp";
import ThemeChangeToggle from "./begginer-projects/Theme-change-Toggle/ThemeChangeToogle";
import Testimonials from "./begginer-projects/Testimonials/Testimonials";
import Accordian from "./accordian/Accordian";
// import SimpleCounter from "./begginer-projects/counter/SimpleCounter";
// import TodoApp from "./begginer-projects/Todo/TodoApp";
// import Meals from "./begginer-projects/meals-api-project/Meal";

export const TheNameContainer = createContext();
export const TheAgeContainer = createContext();



function App() {
  // const [count, setCount] = useState(0);//sharing state from parent to child
  //  const name ="Hima Charan"  
  //  const age =24;
  const accordianQNS = [
    {
      "question": "What is the capital of France?",
      "answer": "Paris"
    },
    {
      "question": "What is 2 + 2?",
      "answer": "4"
    },
    {
      "question": "What color is the sky?",
      "answer": "Blue"
    },
    {
      "question": "How many days are there in a week?",
      "answer": "7"
    },
    {
      "question": "What is water made of?",
      "answer": "Hydrogen and Oxygen (H₂O)"
    }
  ];
  return <>
    {/* <Greet /></> */}
    {/* <Header></Header>
    <MainContent />
    <Footer />*/}
    {/* <WelcomeMessage/> */}
    {/* <JSXRules/> */}
    {/* 
    <Greeting />
    <ProductInfo /> */}
    {/* <UserList/>
    <ProductList/> */}
    {/* <Person name="Hima Charan" age="24"/>
    <Product productName="Lenovo" productPrice="$650"/> */}
    {/* <Card>

      <h1>Card Header</h1>
      <p>Card Body</p>
    </Card> */}
    {/* <Weather temperature={20}/> */}
    {/* <UserStatus isAdmin={true} loggedIn={true} />
    <Greetingcd /> */}
    {/* <StyleCard />
    <ProfileCard title={"Welcome to styling in React"} description={"This by object"} />
    <IconComponenet /> */}
    {/* <ArrayWithUseStateExample/> */}
    {/* <ObjectWithUseState/> */}
    {/* <ArrayOfObjectsUseStateExample/> */}
    {/* <ComponentOne count={count} changeCounthandler={()=>setCount((prev)=>prev+1)}/>
     <ComponentTwo count={count} changeCounthandler={()=>setCount((prev)=>prev+1)}/> */}
    {/* <Counter/>
     <Profile/>
     <ShoppingList/> */}
    {/* <CopyInput/> */}
    {/* <BasicEffect/> */}
    {/* <CounterEffect /> */}
    {/* <FetchDataEffect/> */}
    {/* <TheNameContainer.Provider value={name}>

      <TheAgeContainer.Provider value={age}>
        <ComponentA/>
      </TheAgeContainer.Provider>
    </TheNameContainer.Provider> */}
    {/* <UserProvider>
      <UserProfile/>
      <UpdateUser/>
    </UserProvider> */}
    {/* <CounterWithUseReducer/> */}
    {/* <CounterReducer/> */}
    {/* <RefExample/> */}
    {/* <FocusInput/> */}
    {/* <Timer/> */}
    {/* <UniqComponent/>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut obcaecati ea veritatis accusantium sapiente accusamus eaque! Nemo aliquid, sunt, enim distinctio facere, quaerat rerum reiciendis quibusdam corrupti deserunt molestiae incidunt.
    <UniqComponent/> */}

    {/* <SimpleCounter/> */}
    {/* <TodoApp /> */}
    {/* <Meals /> */}
    {/* <CalculatorApp/> */}

    {/* <ThemeChangeToggle/> */}
    {/* <Testimonials /> */}
    <div className="container">
      {accordianQNS.map((item ,index) =>

        <Accordian key={index} question={item.question} answer={item.answer} />
      )}
    </div>
  </>
}
export default App;