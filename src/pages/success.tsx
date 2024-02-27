import { AppContext } from "@/ContextProvider";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import styled from "styled-components";

const DivSuccess = styled.div({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
})

export default function Success() {

  const router = useRouter();
  const { paid, done } = useContext(AppContext);

  useEffect(() => {
    if (router.asPath === '/success' && router.route.startsWith('/success') && paid === false) {
      router.push('/');
    }
    done()
  }, [router]);

  return (
    <>
      <DivSuccess>
        <h1>Success</h1>
        <p>Payment made successfully!</p>
      </DivSuccess>
    </>
  );
}
