import styled from 'styled-components';

export const Box = styled.div`
background: #043034;
bottom: 300px;
width: 100%;
paddingbottom:300px;



`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;


`;

export const FooterLink = styled.a`
color: #BC9C27;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
font-size: 10px;

&:hover {
	color: lightgrey;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #BC9C27;
margin-bottom: 40px;
font-weight: bold;
font-size: 15px;
`;
