import Assorted_Pastries from"../assets/Assorted Pastries.jpeg"
import Breakfast_Sausage from"../assets/Breakfast Sausage.jpeg"
import breakfast1 from "../assets/braeckfast1.jpeg"
import Coffee from "../assets/coffie.jpg"
import Veggie_Garlic_Noodles from "../assets/Veggie Garlic Noodles.jpeg"
import Chicken_Biscuit from "../assets/Chicken & Biscuit Bake.jpeg"
import Chicken_Veggie_Stir_Fry from "../assets/Chicken & Veggie Stir-Fry.jpeg"
import Easy_Butter_Chicken from "../assets/Easy Butter Chicken.jpeg"
import orangejuice from "../assets/orange.jpeg"
import mango from "../assets/mango.jpeg"
export const ItemDataMenu=[
    {
        id:Math.random(),
        Titel:"Assorted Pastries",
        description:"Freshly baked assortment of Danish, Croissants and Mini-Muffinsare warmed to start the day off right",
        price:"50$",
        Itemimage:Assorted_Pastries,
        catigory:"breakfast"
    }
    ,
    {
        id:Math.random(),
        Titel:"Breakfast Sausage",
        description:"Fresh pork sausage links are grilled golden brown. Our sausage links aremade with just a hint of sage and creole seasonings.",
        price:"70$",
        Itemimage:Breakfast_Sausage,
        catigory:"breakfast"
    }
    ,
    {
        id:Math.random(),
        Titel:"Chef's Omlette Station",
        description:"Tableside Chef cooking the Omlette of your choice with an assortment of toppings",
        price:"60$",
        Itemimage:breakfast1,
        catigory:"breakfast"
    }
    ,
    {
        id:Math.random(),
        Titel:"Coffee Station",
        description:"Our coffee station is stocked with cream, sugar, sweet-n-low, and equal sugar substitute. We supply a rich New Orleans coffee blend with just the right amount of chicory.",
        price:"50$",
        Itemimage:Coffee,
        catigory:"breakfast"
    }
    ,
    {
        id:Math.random(),
        Titel:"Veggie Garlic Noodles",
        description:"Get your veggies in with this delicious and quick noodle stir-fry. Green onions and garlic pack a flavor punch, while the brown sugar and soy tie everything together in a sweet and savory sauce.",
        price:"100$",
        Itemimage:Veggie_Garlic_Noodles,
        catigory:"Dinner"
    }
    ,
    {
        id:Math.random(),
        Titel:"Chicken & Biscuit Bake",
        description:"It doesn't get easier than this: store-bought biscuits, frozen mixed veggies, and rotisserie chicken come together in a warming, hearty dish everyone will love.",
        price:"120$",
        Itemimage:Chicken_Biscuit,
        catigory:"Dinner"
    }
    ,
    {
        id:Math.random(),
        Titel:"Chicken & Veggie Stir-Fry",
        description:"Feel free to change up the protein or vegetables depending on what you have in your fridge. The simple sauce packs a flavor punch that will bring the dish together, no matter what. ",
        price:"100$",
        Itemimage:Chicken_Veggie_Stir_Fry,
        catigory:"Dinner"
    }
    ,
    {
        id:Math.random(),
        Titel:"Easy Butter Chicken",
        description:"This simplified version of the Indian classic combines chicken, tomato sauce, and a slew of aromatic spices and herbs ",
        price:"100$",
        Itemimage:Easy_Butter_Chicken ,
        catigory:"Dinner"
    }
    ,
    {
        id:Math.random(),
        Titel:"Orange juice",
        description:"fresh orange juice",
        price:"15$",
        Itemimage:orangejuice,
        catigory:"Drinks"
    }
    ,
    {
        id:Math.random(),
        Titel:"Mango juice",
        description:"fresh Mango juice",
        price:"20$",
        Itemimage:mango,
        catigory:"Drinks"
    }
]


export const filterSearch=(word)=>{

    if(word!==''){
      const newArray=ItemDataMenu.filter((el)=>el.Titel===word)
      return newArray 
    }
  }