import { AppContext } from '@/ContextProvider';
import { DivCart } from '@/styles/styledComponentCard';
import { ProductDetailContainer, ImageContainer, ProductDetail, Image } from '@/styles/styledComponentDetails';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

const ProductDetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useContext(AppContext);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://mockend.up.railway.app/api/products/${productId}`);
      const data = await response.json();
      setProduct(data);
      console.log(data)
    } catch (error) {
      console.error('Errore durante il recupero del prodotto:', error);
    }
  }

  useEffect(() => {
    if (productId) { fetchProduct() }
  }, [productId]);


  if (!product) { return <div>Caricamento...</div> };

  return (
    <ProductDetailContainer>
      <ImageContainer>
        <Image src={product.image}></Image>
      </ImageContainer>
      <ProductDetail>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Prezzo: {product.price}</p>
        <p>Qty: {product.qty}</p>
        <DivCart onClick={() => addToCart(product.id)} disabled={product.qty === 0}>
          <p>ADD TO CART</p>
        </DivCart>
      </ProductDetail>
    </ProductDetailContainer>
  );
};

export default ProductDetailPage;