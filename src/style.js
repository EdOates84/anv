import styled from "styled-components"


export const Container = styled.div`
max-width: 1300px;
width: 100%;
margin: 0 auto;
padding: 0 40px 0 40px;

@media (min-width:1199px) {
  max-width: 1300px;
}
@media (max-width: 991px) {
  max-width: 960px;
}
@media (max-width: 767px) {
  max-width: 720px;
}

${props =>
  props.fluid &&
  `
  max-width: 1200px !important;
`};
`
export const Section = styled.section`
padding: 40px 0 60px;
overflow: hidden;
background-color: white;
`