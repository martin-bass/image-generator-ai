import { useState } from "react";
import Gallery from "../app/Gallery";

interface Props {
  gallery: string[];
}

function Drawer({ gallery }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const hideDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Botón para mostrar el cajón */}
      <div className="text-center m-5">
        <button
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          type="button"
          onClick={toggleDrawer} // Mostrar el cajón al hacer clic
          aria-controls="drawer-example"
        >
          Your searches
        </button>
      </div>

      {/* Cajón */}
      <div
        id="drawer-example"
        className={`bg-yellow-100 fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-80 dark:bg-gray-800`}
        // tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        {/* Contenido del cajón aquí */}
        <Gallery gallery={gallery} />
        {/* Botón para ocultar el cajón */}
        <button
          type="button"
          onClick={hideDrawer} // Ocultar el cajón al hacer clic
          aria-controls="drawer-example"
          className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {/* Ícono de cierre */}✕
        </button>
        {/* Resto del contenido del cajón */}
      </div>
    </>
  );
}

export default Drawer;
