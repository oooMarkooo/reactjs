import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>
        my name
      </h1>
      <p>this is a paragraph
      </p>
      <ul>
      <li>1
        </li>
        <li>2
        </li>
        <li>3
        </li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)

