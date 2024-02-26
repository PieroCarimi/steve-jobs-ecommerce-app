import { AppContext } from "@/ContextProvider";
import {
  ContainerCard,
  ContainerTitleAndDescription,
  ContainerPriceQty,
  DivCart,
} from "@/styles/styledComponentCard";
import { StyledLink } from "@/styles/styledComponentNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export function CardProduct({ product }: any) {
    const { removeFromCart, addToCart } = useContext(AppContext);
    const router = useRouter();

    return (
        <ContainerCard>
            <Link href={`/${product.id}`}>
                <img src={product.thumbnail} />
            </Link>
            <ContainerTitleAndDescription>
                <StyledLink href={`/${product.id}`}>
                    <h4>{product.title}</h4>
                </StyledLink>
                <p>{product.description}</p>
            </ContainerTitleAndDescription>
            <ContainerPriceQty>
                <div>
                    <p>Price: {product.price}</p>
                </div>
                {router.pathname === "/" ? (
                <div>
                    <p>Qty: {product.qty}</p>
                </div>
                ) : router.pathname === "/cart" ? (
                <div>
                    <p>Qty: {product.quantity}</p>
                </div>
                ) : (
                <p>Error</p>
                )}
            </ContainerPriceQty>
            {router.pathname === "/" ? (
                <DivCart onClick={() => addToCart(product.id)} disabled={product.qty === 0}>
                    <p>ADD TO CART</p>
                </DivCart>
            ) : router.pathname === "/cart" ? (
                <DivCart onClick={() => removeFromCart(product.id)} disabled={false}>
                    <p>REMOVE</p>
                </DivCart>
            ) : (
                <p>Error</p>
            )}
        </ContainerCard>
    );
}
