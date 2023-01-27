import { ItemContainer } from './styles';

interface ProductsProps {
    name: string;
    brand: string;
    photo: string;
    description: string;
    price: number;
}

export default function ExeperienciaItem({
    name,
    brand,
    photo,
    description,
    price,
}: ProductsProps) {
  return (
    <ItemContainer>
      <div>
        <img>{photo}</img>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <h2>{brand}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}