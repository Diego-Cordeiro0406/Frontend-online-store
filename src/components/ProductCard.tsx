interface ProdcutCardProps {
  title: string
  img: string
  price: number
}

function ProductCard({ title, img, price }: ProdcutCardProps) {
  return (
    <section
      data-testid="product"
      className="
      w-60
      h-80
      my-8
      mx-2
      bg-white
      rounded-md
      shadow-lg
      flex
      flex-col
      items-center
      justify-center
      py-0.5
      px-7
      hover:bg-slate-100
      "
    >
      <img
        className="w-32 h-40"
        src={ img }
        alt={ title }
      />
      <h3
        className="text-center font-mono text-base font-bold"
      >
        {title}
      </h3>
      <p className="font-semibold">{`R$ ${price}`}</p>
    </section>
  );
}

export default ProductCard;
