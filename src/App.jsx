import { Button, Col, Container, Row } from "react-bootstrap";
import {data} from "./data"
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
function App() {
  return (
    <>
      <div>
        <Container className="py-5">
        <DatesCount data={data}/>
        <DatesList data={data}/>
        <DatesAction/>
         
        </Container>
      </div>
    </>
  );
}

export default App;
