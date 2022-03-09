import * as React from "react"
import Script from "next/script"

const Form = ({ blok: cognitoForm }) => {
  return (
    <div class="cognito">
      <Script
        src="https://www.cognitoforms.com/s/xPoircp7HEGoNo_tpFEirg"
        strategy="beforeInteractive"
      />
      <Script id="cognito-custom-ovi" strategy="lazyOnload">
        {`Cognito.load("forms", { id: "${cognitoForm.cognito_form_id}" });`}
      </Script>
    </div>
  )
}

export default Form
