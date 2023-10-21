import styled from "styled-components";

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  width: 100%;
  height: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(33.1, 89.5%, 44.9%);
  padding: 0 1.5625rem;
  height: 5.625rem;
  position: absolute;
  border: 1px solid hsl(356.7, 100%, 7.1%);
  opacity: 0.7;

  h2 {
    color: hsl(0.5, 100%, 21.8%);
    font-size: 1.375rem;
    font-weight: bold;
    margin: 0 0.375rem 0;
    text-transform: uppercase;
  }

  p {
    color: hsl(356.7, 100%, 7.1%);
    font-size: 1rem;
    font-weight: lighter;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  margin: 0 0.46875rem 0.9375rem;
  min-width: 30%;
  height: 15rem;
  border: 1px solid black;
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
