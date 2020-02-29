import React from 'react'
import styled from 'styled-components'
import { SectionTitle, SectionHeader } from './Section'

const Container = styled.div`
  margin: 16px 0;

  @media screen and (max-width: 600px) {
    margin: 0;
    padding-bottom: 30px;
  }
`

const List = styled.ul`
  list-style: none;
  line-height: 1.3;
  margin: 0;

  li {
    margin-left: -40px;
    padding: 8px 0;
  }

  a {
    color: rgb(189, 147, 249);
  }
`

const Biography = () => (
  <Container>
    <SectionHeader>
      <SectionTitle>Current</SectionTitle>
    </SectionHeader>

    <List>
      <li>
        <span role="img" aria-label="Books">
          📚
        </span>{' '}
        Reading a book per month this year!
      </li>
      <li>
        <span role="img" aria-label="Laptop">
          💻
        </span>{' '}
        Interested in working on a project together? Let's{' '}
        <a href="mailto:yo@micmax.pw">chat</a>.
      </li>
      <li>
        <span role="img" aria-label="Running">
          🏃‍♂️
        </span>{' '}
        Going on runs most evenings / nights.
      </li>
    </List>
  </Container>
)

export default Biography
