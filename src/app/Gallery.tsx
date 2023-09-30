interface Props {
  gallery: string[];
}

function Gallery({ gallery }: Props) {
  return (
    <div >
      <h1 className="w-full text-center font-bold">Your searches</h1>
      <div className="grid grid-cols-2 gap-3 mt-5">
        {gallery.map((img) => (
          <div className="w-28 border-solid rounded-2xl">
            <img src={img} className="rounded-2xl"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
