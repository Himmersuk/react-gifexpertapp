import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GiftGrid = ({ categoria }) => {
  const { data: imagenes, loading } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {imagenes.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
