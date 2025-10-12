import { Link, useLocation } from 'react-router-dom';

const categorias = ["Todos", "Mates", "Bombillas", "Yerbas", "Tes", "Termos"];

function MainButtons() {
  const {search} = useLocation();
  const params = new URLSearchParams(search);
  const activa = params.get("categoria") || "Todos";

  const base = "/productos";

  return (
     <nav style={{display:"flex", gap:8, flexWrap:"wrap", marginBottom:12}}>
      {categorias.map((cat) => {
        const to = cat === "Todos" ? "/productos" : `/productos?categoria=${encodeURIComponent(cat)}`;
        const selected = activa === cat;
        return (
          <Link
            key={cat}
            to={to}
            style={{
              padding:"8px 12px",
              borderRadius:10,
              border:"1px solid #ccc",
              textDecoration:"none",
              fontWeight:600,
              background: selected ? "#eee" : "transparent"
            }}
          >
            {cat}
          </Link>
        );
      })}
    </nav>
  );
}
    
export default MainButtons