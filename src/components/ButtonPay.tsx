import { AppContext } from "@/ContextProvider";
import { ButtonAndTextareaContainer, Button } from "@/styles/styledComponentButton";
import { useContext } from "react";

export function ButtonPay() {
    const { pay, calculateTotalPrice } = useContext(AppContext);

    return (
        <ButtonAndTextareaContainer>
            <Button onClick={() => { pay() }} disabled={calculateTotalPrice() === 0}>
                PAY
            </Button>
        </ButtonAndTextareaContainer>
    )
}