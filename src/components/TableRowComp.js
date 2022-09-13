import React from "react"
// import schedule_data from "../data/retreat_data/schedule_data1.js"



    


export default function TableRowComp(props){
// console.log(schedule_data)
// document.write(schedule_data)
  
  return ( 
    
    <tr>
    <td>{props.time}</td> 
    <td>{props.activity}</td>
    </tr>
 
  )
}

// console.log(TableRowComp(tableItems))






// export default function TableRowComp(props){


//   const table_row = props.tableItems.map(item => {
//     return (<tr>
//     <td>{item.time}</td>
//     <td>{item.activity}</td>
//   </tr>)
//   })
  
//   return ({table_row})
// }



// const table_row_data = schedule_data.map(item => {
//     return ( <tr>
//     <td>{props.time}</td> 
//     <td>{props.activity}</td>
//     </tr>)
  

//   })
  
//   return ( 
//     <tbody>
//     {table_row_data}</tbody>
 
//   )
