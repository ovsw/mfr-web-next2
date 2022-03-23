// a basic rich text component

// *********************************
// rich-text: "text"

import * as React from "react"
import { SectionThemeContext } from "./section"

const NutritionTable = ({ blok: nutritionTable }) => {
  // console.log("rich text simple", nutritionTable)

  const sectionTheme = React.useContext(SectionThemeContext)

  const rootStyles =
    sectionTheme != undefined
      ? `${
          sectionTheme.bgValue == "dark" ? "text-neutral-300" : "text-dark-body"
        }`
      : ""

  const {
    calories,
    fat,
    fat_per,
    saturated_fat,
    saturated_fat_per,
    trans_fat,
    cholesterol,
    cholesterol_per,
    sodium,
    sodium_per,
    carbs,
    carbs_per,
    fiber,
    fiber_per,
    sugars,
    added_sugars,
    added_sugars_per,
    protein,
    vit_d,
    vit_d_per,
    calcium,
    calcium_per,
    iron,
    iron_per,
    potassium,
    potassium_per,
  } = nutritionTable

  return (
    <div className={`${rootStyles} flex lg:pt-8`}>
      <div className="bg-white mx-auto px-2 border-2 border-stone-900">
        <div
          className="text-black  font-bold
        border-t-[20px] border-stone-900
        border-b-8 
        pb-3 pt-2"
        >
          <p className="text-lg">Amount per serving</p>
          <p className="flex justify-between items-baseline -mt-2">
            <span className="text-4xl">Calories</span>{" "}
            <span className="text-5xl">{calories}</span>
          </p>
        </div>
        <table
          className="nutrition-table bg-white border-collapse text-lg text-stone-800
        
        mb-3 
        table-auto font-systemsans
        "
        >
          <thead>
            <tr>
              <th>
                <span className="sr-only">nutrient</span>
              </th>
              <th>% Daily Value*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Total Fat</strong> {fat}g
              </td>
              <td className="text-right">{fat_per}%</td>
            </tr>
            <tr>
              <td className="pl-5">Saturated Fat {saturated_fat}g</td>
              <td className="text-right">{saturated_fat_per}%</td>
            </tr>

            <tr>
              <td className="pl-5">Trans Fat {trans_fat}g</td>
              <td>
                <span className="sr-only">no recommended daily value</span>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Cholesterol</strong> {cholesterol}mg
              </td>
              <td className="text-right">{cholesterol_per}%</td>
            </tr>

            <tr>
              <td>
                <strong>Sodium</strong> {sodium}mg
              </td>
              <td className="text-right">{sodium_per}%</td>
            </tr>

            <tr>
              <td>
                <strong>Total Carbohydrates</strong> {carbs}g
              </td>
              <td className="text-right">{carbs_per}%</td>
            </tr>

            <tr>
              <td className="pl-5">Dietary Fiber {fiber}g</td>
              <td className="text-right">{fiber_per}%</td>
            </tr>

            <tr>
              <td className="pl-5">Total Sugars {sugars}g</td>
              <td>
                <span className="sr-only">no recommended daily value</span>
              </td>
            </tr>

            <tr>
              <td className="pl-5">Includes {added_sugars}g Added Sugars</td>
              <td className="text-right">{added_sugars_per}%</td>
            </tr>

            <tr className="border-b-[13px] border-stone-900">
              <td>
                <strong>Protein</strong> {protein}g
              </td>
              <td>
                <span className="sr-only">no recommended daily value</span>
              </td>
            </tr>

            <tr>
              <td>Vitamin D {vit_d}mcg</td>
              <td className="text-right">{vit_d_per}%</td>
            </tr>

            <tr>
              <td>Calcium {calcium}mg</td>
              <td className="text-right">{calcium_per}%</td>
            </tr>

            <tr>
              <td>Iron {iron}mg</td>
              <td className="text-right">{iron_per}%</td>
            </tr>

            <tr className="border-b-8 border-stone-900">
              <td>Potassium {potassium}mg</td>
              <td className="text-right">{potassium_per}%</td>
            </tr>
          </tbody>
          {/* <tfoot>
          <tr>
          <td colspan="2" className="text-sm !border-b-0">
          <p className="py-2 px-1 max-w-sm">
          The % Daily Value tells you how much a nutrient in a serving of
          food contributes to a daily diet. 2,000 calories a day is used
          for general nutrition advice.
          </p>
          </td>
          </tr>
        </tfoot> */}
        </table>
      </div>
    </div>
  )
}

export default NutritionTable
