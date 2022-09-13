import React from "react"
import TableRowComp from "./TableRowComp.js"
// import schedule_data from "../data/retreat_data/schedule_data.js"

export default function ScheduleTableComp(props){

  return (
    <tbody>
      <TableRowComp
        time = {props.time}
        activity={props.activity} />
    </tbody>

  )
}



// export default function ScheduleTableComp(){

// const table_row = schedule_data.map(item => {
//   console.log(item)
//   return <TableRowComp 
//     key={item.id}
//     time={item.time}
//     activity={item.activity}
//   />
// })

//   return (<table className="schedule-table">
//     <tbody>
//       {table_row}
//     </tbody>
//   </table>)
// }



// const listItem = props.listItems.map(item => {
//     return (<li>{item}</li>)
//   })

//   return (<ul>{listItem}</ul>)
// }