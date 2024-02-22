//import logo from "./logo.svg";
import "./App.css";
import CustomInput from "./CustomInput";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nuevo Usuario</h1>
        <CustomInput label="Nombre" disabled={false} type="text"/>
        <CustomInput label="Correo" disabled={false} type="text"/>
        <CustomInput label="Contraseña" disabled={false} type="password"/>
        <div className="Contenedor">
        <div>
          <input type="checkbox" disabled={false}/>
          <label>Aceptar termins y condiciones</label>
        </div>
          <Button disabled={false}>Cancelar</Button>
          <Button disabled={false}>Enviar</Button>
        </div>
      </header>
    </div>
  );
}
//meterle css ya era lucirme y mi nana me enesño a ser humilde :v

export default App;
