import  './tableFlight.scss'
import React from 'react'

const TableFlight = () => {
    return <table className="table">
        <thead>
        <tr>
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th className="td-hiden">Flight</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><span className="terminal terminal_A">A</span></td>
            <td>7:40 AM</td>
            <td>Hurghada</td>
            <td>CX to 2:50 PM</td>
            <td className="airline">Bees Airline<img className="item-logo" src="https://api.iev.aero/media/airline/files/606aefa0c8a4a734421442.png" alt="logo"/></td>
            <td className="td-hiden">7B2101</td>
        </tr>
        <tr>
            <td><span className="terminal terminal_A">A</span></td>
            <td>6:20 AM</td>
            <td>Warsaw</td>
            <td>DP to 6:28 AM</td>
            <td className="airline">LOT
                <img className="item-logo" src="https://api.iev.aero/media/airline/files/5ab0f0c65ffa6045899216.jpg" alt="logo"/></td>
            <td className="td-hiden">LO756</td>
        </tr>
        </tbody>
    </table>
}

export default TableFlight;