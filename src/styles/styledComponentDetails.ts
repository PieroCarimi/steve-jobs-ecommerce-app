import styled from "styled-components"

export const ProductDetailContainer = styled.div({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1200px',
    height: '650px',
    boxShadow: '10px 10px 15px 5px grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    
    '@media (max-width: 1200px)': {
      width: '80%',
      height: 'auto',
      padding: '20px',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflow: 'hidden',
    },

    '@media (max-height: 820px)': {
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
      },
  
      '@media (max-height: 599px)': {
        flexDirection: 'column',
        //height: '50%'
      },
  
    '@media (max-width: 590px)': {
      flexDirection: 'column',
      height: '80%'
    },

})
  
export const ProductDetail = styled.div({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginLeft: '10px',
    marginRight: '15px',
})
  
export const ImageContainer = styled.div({
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginLeft: '20px',
    marginRight: '20px',
  
    '@media (max-width: 1200px)': {
      marginTop: '20px',
      overflow: 'hidden',
    },
})
  
export const Image = styled.img({
    '@media (max-width: 1200px)': {
      width: '100%',
      height: 'auto',
      //marginBottom: '20px',
      objectFit: 'contain'
    },
    '@media (max-height: 820px)': {
        maxWidth: '100%', 
        maxHeight: '100%', 
        //marginBottom: '20px',
        objectFit: 'contain',
        
    },
})