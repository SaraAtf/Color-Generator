import Values from "values.js";
import ColorList from "./ColorList";
import Form from "./Form";
import values from 'values.js'
import { useState } from "react";
const App = () => {
  const [ colors, setColors ] = useState( new Values( '#f15035' ).all( 10 ) )
  console.log( colors )
  return <main>
    <Form />
    <ColorList colors={colors} />
  </main>;
};
export default App;
