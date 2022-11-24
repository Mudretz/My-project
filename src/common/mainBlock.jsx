import React from 'react';

const MainBlock = ({ data, name, columnName1, columnName2, columnName3, numberBlock }) => {
    console.log(columnName3);
    return (
        <div className={"main__item block-"+numberBlock}>
            <h2>{name}</h2>
            <div className="plus"></div>
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>{columnName1}</th>
                        <th>{columnName2}</th>
                        { columnName3 && <th>{columnName3}</th> }
                    </tr>
                </thead>
            </table>
            <div className="scroll-table-body">
                <table cellSpacing="0">
                    <tbody>
                    {data.map( (data) => (
                        <tr key={data.id}>
                            <td>{data.date}</td>
                            <td>{data.summary}</td>
                            { columnName3 && <td>{data.source}</td> }
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default MainBlock;