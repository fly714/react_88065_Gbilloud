import { useSearchParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import MainButtons from "./MainButtons";

function Productos() {
  const [params] = useSearchParams();
  const categoria = params.get('categoria') || 'Todos';

  return (
  <>
    <div>
      <h1 style={{color: 'blue'}}>Productos</h1>
    </div>
    <MainButtons/>
    <ItemListContainer categoria={categoria}/>
  </>
  )
}
    
export default Productos