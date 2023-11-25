interface ProdcutCardProps {
  title: string
  img: string
  price: number
}

function ProductCard({ title, img, price }: ProdcutCardProps) {
  return (
    <section data-testid="product">
      <h3>{title}</h3>
      <img src={ img } alt={ title } />
      <p>{`R$ ${price}`}</p>
    </section>
  );
}

export default ProductCard;
