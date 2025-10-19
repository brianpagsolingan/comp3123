import React from 'react'
import { Fragment } from 'react/jsx-runtime'
export default function StudentInfo(prop) {
  return (
    <Fragment>
        <h3>
            Student ID: {prop.sid}
        </h3>
        <p>
            Name: {prop.name}
        </p>
        <p>
            {prop.school}, {prop.city}
        </p>
        
    </Fragment>
  )
}
