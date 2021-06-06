import React from 'react';
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
 const Tables = (props) => {
  const { headers, rows , setShow , show,setCurrentProduct } = props;
  return (
    <div>
       <Table className="table-hover table-striped">
      <TableHeader headers={headers}></TableHeader>
      <TableBody headers={headers} rows={rows} setShow={setShow} show={show} setCurrentProduct={setCurrentProduct}></TableBody>
      </Table>
    </div>
  );
}
const TableHeader = (props) => {
  const { headers } = props;
  return(
    <thead >
        <tr key="header-0">
          { headers && headers.map((value, index) => {
              return <th className="border-0" key={index}><div>{value}</div></th>
          })}
        </tr>
    </thead>
  );
}


const TableBody = (props) => {
  const { headers, rows,setShow , show,setCurrentProduct} = props;
  console.log(props,"props")
  function buildRow(row, headers) {
    console.log(row,"rpr")
    return (
         <tr key={row.id}>
         { headers.map((value, index) => {
             return <td key={index} onClick={()=>{setShow(!show);setCurrentProduct(row)}} >{row[value]}</td>
          })}
         </tr>
     )
  };

  return(
      <tbody>
        { rows && rows.map((value) => {
                return buildRow(value, headers);
            })}
      </tbody>
);
}


export default Tables;