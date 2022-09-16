import React from "react";

const BlockProfit = ({ profit }) => {
    return (
        <>
            <td>{profit.date}</td> 
            <td>{profit.summary}</td>
            <td>{profit.source}</td>
        </>              
    );
}
 
export default BlockProfit;