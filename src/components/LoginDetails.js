import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Form ,Card} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
    const Example = () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        );
      };

    return (
        <Card className ="bg-light">
                        <Card.Header className ="mb-4"> Please kindly fill the below form </Card.Header>

            <Card.Body>
                 <form className="userdetails-form">
                <div className="mb-3">
                    <label className="date_of_birth">Date of Birth:<br />
                    {Example()}
                       
                    </label> <br />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address :</label>
                    <textarea className="form-control" rows="3" cols="20"></textarea>

                </div>
                <div className="md-3">
                    <label className="form-label" for="phone">Enter a phone number:</label>
                    <input

                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="+91"
                    />
                </div>
                 <label className="form-label">Upload-Image</label>
                <div className="input-group mb-3 ">
  <div className="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
                
                    <Button variant="light"><Link to="table">Submit </Link></Button>

            </form>
            </Card.Body>
           
        </Card>
    )
}


export default Home
