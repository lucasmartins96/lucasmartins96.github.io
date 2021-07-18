/*hover effect: https://css-tricks.com/4-ways-to-animate-the-color-of-a-text-link-on-hover/ */

import React from 'react'
import styled from 'styled-components';

const Item = styled.li`
  flex-grow: 1;
  list-style-type: none;
  padding: 10px 0;
  text-align: center;

  a {
    color: #edf3f7;
    cursor: pointer;
    text-decoration: none;
  }

  .link {
    position: relative;
    transition: clip-path 275ms ease;
    
    &:hover span:before, &:focus span:before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    
    span {
      display: inline-block;
      position: relative;
      
      &:before {
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        content: attr(data-content);
        position: absolute;
        text-decoration: underline;
        transition: clip-path 275ms ease;
      }
    }
  }
`;

function HeaderLink({ content }) {
  return (
    <Item>
      <a className="link" href="#">
        <span data-content={ content }>{ content }</span>
      </a>
    </Item>
  )
}

export default HeaderLink;
