/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row } from 'react-bootstrap';
import ActionAreaCard from './ActionAreaCard';

export default function HomePage({ currFish }) {
  return (
    <div>
      <Row mx={3} mb={4} className="g-3">
        {currFish.map((fish, i) => (
          <ActionAreaCard
            key={`f-${i}`}
            fish={fish}
          />
        ))}
      </Row>
    </div>
  );
}
