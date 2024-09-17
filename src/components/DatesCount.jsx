import { Col, Row } from "react-bootstrap"

function DatesCount({data}) {
  return (
    <Row className="justify-content-center">
    <Col sm="8" className="">
      لديك {data.length} مواعيد اليوم
    </Col>
  </Row>
  )
}

export default DatesCount