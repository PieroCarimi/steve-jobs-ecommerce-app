import Link from "next/link";
import styled from "styled-components";

export const ContainerNavbar = styled.div({
    display: 'flex',
    justifyContent: 'end',
    marginLeft: '50px',
    marginRight: '100px',
    marginBottom:'50px',
    '@media (max-width: 350px)': {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:'25px'
    },
    '@media (max-width: 290px)': {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight:'25px'
    },
});

export const StyledDivHome = styled.div<{ $isActive: boolean }>(({ $isActive }) => ({
    fontSize: ($isActive) ? '1.875em' :'1.2em',
    marginLeft: '20px',
    marginRight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
}));

export const StyledDivCart = styled.div<{ $isActive: boolean }>(({ $isActive }) => ({
    fontSize: ($isActive) ? '1.875em' :'1.2em',
    marginLeft: '20px',
    marginRight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
}));

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
});