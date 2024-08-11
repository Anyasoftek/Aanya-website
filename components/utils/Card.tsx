"use client"
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  className,
  imgClassName,
  titleClassName,
  img,
}) => {
  return (
    <CardContainer className={className}>
      {img && <Image className={imgClassName} src={img} alt={title} />}
      <Content>
        <Title className={titleClassName}>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

export default Card;