import styled from 'styled-components';

const ProfileContact = styled.main`
  font-size: 1.375em;
  line-height: 1.35em;
  margin: 1em 1.1em 0;
  width: 100%;

  & .border {
    border-top: 1px solid #bbb;
    padding-top: 2em;
    margin-top: 1em;
  }

  h2 {
    font-size: 1em;
    margin: 0 0 1.27em;
  }

  p {
    margin: 0;

    &.text {
      color: #bbb;
      font-size: 16px;
    }
  }

  a {
    color: #bbb;
    margin-right: 3em;
    text-decoration: none;
    transition: all 0.3s ease;
    width: fit-content;

    &:hover {
      color: #222;
      text-decoration: underline;
    }
  }
`;

export default ProfileContact;
