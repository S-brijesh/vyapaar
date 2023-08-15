import React from 'react'

function Gamecard_item(props) {
  const {...style_for_placement} = props.style_for_placement;
  return (
    <div className="flex border border-black w-full h-full" style={style_for_placement}>
        {
          props.property_details["f_Card_Color"] && 
          <div style={{backgroundColor: props.property_details["f_Card_Color"],flex:1}}></div>
        }
        <div className="flex flex-col justify-evenly" style={{flex:2}}>
          <div>{props.property_details["City"]}</div>
          {
            props.property_details["Purchase_Price"] &&
            <div>{props.property_details["Purchase_Price"]}</div>
          }
        </div>
    </div>
  )
}
export default Gamecard_item