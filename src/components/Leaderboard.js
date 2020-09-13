import React from 'react';
import PropTypes from 'prop-types';

import './Leaderboard.scss';

/**
 * "Get" specifies a generic return
 * @param {*} object data element; see typing in the PropTypes
 */
const getTableHeaders = (object = {}) => {
  return Object.keys(object);
}

/**
 * "render" specifies JSX in the return 
 * @param {*} row data element
 */
const renderRows = (row = {}) => {
  return (
    <tr key={row.id}>
      {Object.values(row).map(
        (value, i) => <td key={i}>{value}</td>
      )}
    </tr>
  )
}

const Leaderboard = ({ data }) => {
  return (
    <div class="leaderboard">
        <h2>Leaderboard</h2>
        <div class="leaderboard-selector">
            // buttons for each + score
        </div>
        <table className="basic-table">
        <tbody>
            <tr>
            {getTableHeaders(data[0]).map(
                headerName => <th key={headerName}>{headerName}</th>
                )}
            </tr>
            {data.map(renderRows)}
        </tbody>
        </table>
    </div>
  )
}

export default Leaderboard;

/**
 * Much more substantial example of typing properties. If the data does not align to the type, an error will occur.
 */
Leaderboard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      aluminum: PropTypes.number,
      batteries: PropTypes.number,
      bottles: PropTypes.number,
      cans: PropTypes.number,
      cardboard: PropTypes.number,
      computer_parts: PropTypes.number,
      glass: PropTypes.number,
      id: PropTypes.number,
      paper: PropTypes.number,
      teacher: PropTypes.string,
      wood: PropTypes.number
    })
  )
};

Leaderboard.defaultProps = {
  data: []
};

/*Leaderboard.componentDidMount() {
    data.sh
};*/
