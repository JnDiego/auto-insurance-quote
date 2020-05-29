import React, { Fragment } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Fragment>
      <Container>
        <Header title="Insurance Quote" />
        <ContainerForm>
          <Form />
        </ContainerForm>
      </Container>
    </Fragment>
  );
}

export default App;
