import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getSales } from "../../reducers/products";
import ".//SalesTable.css";

const HEADER_COLUMNS = [
  "WEEK ENDING",
  "RETAIL SALES",
  "WHOLESALE SALES",
  "UNITS SOLD",
  "RETAILER MARGIN",
];

const USDFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const SalesHeader = () => {
  return (
    <tr>
      {HEADER_COLUMNS.map((column, index) => (
        <th
          key={column}
        >
          <div className="sales-header-item">
            <p>{column}</p>
            <FontAwesomeIcon icon={faChevronDown}/>
          </div>
        </th>
      ))}
    </tr>
  );
};

const SalesRow = (props) => {
  const { sale } = props;

  return (
    <tr>
      <td className="left-align">{sale.weekEnding}</td>
      <td className="center-align">{USDFormatter.format(sale.retailSales)}</td>
      <td className="center-align">
        {USDFormatter.format(sale.wholesaleSales)}
      </td>
      <td className="center-align">{sale.unitsSold}</td>
      <td className="center-align">
        {USDFormatter.format(sale.retailerMargin)}
      </td>
    </tr>
  );
};

const SalesTable = (props) => {
  const { sales } = props;

  if (!sales) {
    return null;
  }

  return (
    <table className="sales-table">
      <SalesHeader />
      {sales.map((sale) => (
        <SalesRow key={sale.weekEnding} sale={sale} />
      ))}
    </table>
  );
};

const mapStateToProps = (state) => ({
  sales: getSales(state),
});

export default connect(mapStateToProps)(SalesTable);
