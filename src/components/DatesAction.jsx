
import { Col, Row } from 'react-bootstrap'

function DatesAction({dataDelete, showData}) {
  return (
    <Row className="justify-content-center my-2">
    <Col sm="8" className="d-flex justify-content-between">
      <button onClick={dataDelete} className="btn-style p-2">مسح الكل</button>
      <button onClick= {showData} className="btn-style p-2">عرض البيانات</button>
    </Col>
  </Row>
  )
}

export default DatesAction