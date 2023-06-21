import styled from "styled-components";

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 5.625rem;
  padding: 0 1.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid hsl(356.7, 100%, 7.1%);
  background-color: hsl(33.1, 89.5%, 44.9%);
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 0.375rem 0;
    font-size: 1.375rem;
    color: hsl(0.5, 100%, 21.8%);
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 1rem;
    color: hsl(356.7, 100%, 7.1%);
  }

  @media screen and (max-width: 50em) {
    h2 {
      font-size: 1.125rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 15rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.46875rem 0.9375rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 0.46875rem;
  }

  &:last-child {
    margin-left: 0.46875rem;
  }

  @media screen and (max-width: 50em) {
    height: 12.5rem;
  }
`;
