import Values from "values.js";
import ColorList from "./ColorList";
import Form from "./Form";
import values from 'values.js'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [ colors, setColors ] = useState( new Values( '#5c1c6d' ).all( 10 ) )


  const addColor = ( color ) => {
    try {
      setColors( new Values( color ).all( 10 ) )

    } catch ( error ) {
      toast.error( error.message )
    }
  }
  return <main>
    <ToastContainer position="top-center" />
    <Form addColor={addColor} />
    <ColorList colors={colors} />
  </main>;
};
export default App;
