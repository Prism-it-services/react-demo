import styled from 'styled-components';

export interface Event {
  date: string;
  title: string;
  description: string;
}

export interface TimelineProps {
  events: Event[];
}

export const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  list-style: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #00BCD4;
    left: 25%;
    transform: translateX(-50%);
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #007bff;
    border: 4px solid #FFF;
    border-radius: 50%;
    left: 25%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

export const DateLabel = styled.div`
  width: 180px;
  color: #FFF;
  background: #00BCD4;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  padding: 10px;
  margin-right: 20px;
  flex-shrink: 0;
`;

export const TimelineContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  flex-grow: 1;
  margin-left: 170px;

  h2 {
    margin-top: 0;
    color: #007bff;
  }

  p {
    margin: 0;
    color: #333;
  }
`;