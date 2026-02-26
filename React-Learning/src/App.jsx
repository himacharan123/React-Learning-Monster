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

export const TheNameContainer= createContext();
export const TheAgeContainer=createContext();
function App() {
  const [count, setCount] = useState(0);//sharing state from parent to child
   const name ="Hima Charan"  
   const age =24;

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
    <TheNameContainer.Provider value={name}>

      <TheAgeContainer.Provider value={age}>
        <ComponentA/>
      </TheAgeContainer.Provider>
    </TheNameContainer.Provider>
  </>
}
export default App;