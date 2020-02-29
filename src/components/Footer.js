import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: rgb(59, 62, 79);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  z-index: 5;
  h1 {
    margin: 0;
  }
`
const FooterItem = styled.span`
  padding: 5px 20px;
`

const Mode = styled(FooterItem)`
  background: ${props => props.background};
  font-weight: 800;
`

const Size = styled(FooterItem)`
  background: rgb(240, 147, 43);
  margin-left: auto;
  cursor: pointer;
  @media (max-width: 600px) {
    display: none;
  }
`

const Date = styled(FooterItem)`
  background: rgb(53, 63, 92);
  @media (max-width: 600px) {
    display: none;
  }
`
export default class Footer extends React.Component {
  state = {
    isEditing: false,
  }

  toggleEdit = () => {
    if (this.state.isEditing) {
      document.body.contentEditable = 'false'
      document.designMode = 'off'
    } else {
      document.body.contentEditable = 'true'
      document.designMode = 'on'
    }
    this.setState({ isEditing: !this.state.isEditing })
  }

  componentDidMount = () => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 73 || e.keyCode === 27) {
        this.toggleEdit()
      }
    })
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', e => {}, false)
  }

  render() {
    const { isEditing } = this.state
    return (
      <FooterWrapper>
        {isEditing ? (
          <Mode background="rgb(142, 68, 173)">INSERT</Mode>
        ) : (
          <Mode background="rgb(192, 57, 43)">NORMAL</Mode>
        )}
        <FooterItem>micmax.html</FooterItem>

        <Size onClick={this.toggleEdit}>Toggle INSERT Mode</Size>
        <Date>Last Updated: 2020/02/29</Date>
      </FooterWrapper>
    )
  }
}
