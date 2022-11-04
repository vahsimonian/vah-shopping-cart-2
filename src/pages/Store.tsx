import React from 'react'
import { Row, Col } from 'react-bootstrap'
import storedItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'

export function Store() {
  return (
    <>
      <div>Store</div>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storedItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
