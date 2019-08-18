import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  width: 480px;
  height: 640px;
  border: solid 1px black;
  background-color: hsl(215, 62%, 21%);
  overflow: hidden;
  border-radius: 30px;
`;

const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;

  ${A} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ChurchImg = styled.img`
  margin-top: 20%;
  margin-left: 5%;
  margin-right: 5%;
`;

const TextContainer = styled.div`
  color: #fff;
  width: 80%;
  text-align: center;
  margin: auto;
  padding-top: 20px;
`;

const ChurchText = styled.div`
  font-size: 40px;
`;

const NameText = styled.div`
  font-size: 50px;
  padding-top: 20px;
  text-indent: 50px;
  letter-spacing: 50px;
`;

const EkkImg = styled.img`
  margin-top: 15%;
  margin-left: 5%;
`;

const IndexPage = () => (
  <Wrapper>
    <Card>
        <ChurchImg src="/static/logo.svg" alt="Ekk" />
        <TextContainer>
          <ChurchText>新生命小組教會</ChurchText>
          <NameText>高婕苓</NameText>
        </TextContainer>
        <EkkImg src="/static/ekk.svg" alt="Ekk" />
    </Card>
    <Link href="/about" passHref>
      <A>About Page</A>
    </Link>
  </Wrapper>
);

export default IndexPage;
