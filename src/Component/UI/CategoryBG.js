import React from 'react'
import './CategoryBG.css'

const CategoryBG = (props) => {
  return (
    <div className={'category-bg '+ props.className} style={{backgroundColor: props.bgColor}}>
      {props.children}
    </div>
  )
}

export default CategoryBG