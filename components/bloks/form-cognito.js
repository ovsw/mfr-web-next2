import * as React from "react"
import Script from "next/script"

const Form = ({ blok: cognitoForm }) => {
  return (
    <div className="cognito">
      <Script
        src="https://www.cognitoforms.com/f/iframe.js"
        strategy="beforeInteractive"
      />
      <iframe
        src={`https://www.cognitoforms.com/f/xPoircp7HEGoNo_tpFEirg/${cognitoForm.cognito_form_id}`}
        style={{ border: "0", width: "100%" }}
        height="auto"
      />
    </div>
  )
}
export default Form
