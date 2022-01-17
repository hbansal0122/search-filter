import * as React from 'react';
import MUIDataTable from "mui-datatables";
import { useEffect, useReducer } from "react";
import { columns, options, backendURL } from "./utils";
import { ACTIONS } from "./reducer/actions";
import { reducer } from "./reducer/reducer";

const initialState = {
  companyList: [],
  loading: false,
  error: null,
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { companyList, loading, error } = state;
  const muiDataTableRef = React.useRef(null);

  useEffect(() => {
    dispatch({ type: ACTIONS.CALL_API });
    const getCompanyInfo = async () => {
      const response = await fetch(`${backendURL}/`);
      if (response.status === 200) {
        dispatch({ type: ACTIONS.SUCCESS, data: await response.json() });
        return;
      }
      dispatch({ type: ACTIONS.ERROR, error: response.error });
    };
    getCompanyInfo();
  }, []);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Failed to get the data {error}</div>
  return (
    <div className="App">
      <MUIDataTable
        ref={muiDataTableRef}
        title={"Cosuno assignment"}
        data={companyList}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default App;

