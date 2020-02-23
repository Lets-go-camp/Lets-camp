import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Query = props => {
  const { stateOnChange, queryCampground, petOnChange, waterHookOnChange, sewerHookOnChange, waterFrontOnChange } = props;
  return (
      <Form className="Form" onSubmit= {queryCampground}>
        {/* <h1 className="text-muted">TITLE OF PAGE</h1> */}
        <FormGroup>
          <Label for="stateSelect">What state are you looking for?</Label>
          <Input type="select" name="select" id="stateSelect" size="1" onChange={stateOnChange}>
            <option>AL</option>
            <option>AK</option>
            <option>AZ</option>
            <option>AR</option>
            <option>CA</option>
            <option>CO</option>
            <option>CT</option>
            <option>DE</option>
            <option>FL</option>
            <option>GA</option>
            <option>HI</option>
            <option>ID</option>
            <option>IL</option>
            <option>IN</option>
            <option>IA</option>
            <option>KS</option>
            <option>KY</option>
            <option>LA</option>
            <option>ME</option>
            <option>MD</option>
            <option>MA</option>
            <option>MI</option>
            <option>MN</option>
            <option>MS</option>
            <option>MO</option>
            <option>MT</option>
            <option>NE</option>
            <option>NV</option>
            <option>NH</option>
            <option>NJ</option>
            <option>NM</option>
            <option>NY</option>
            <option>NC</option>
            <option>ND</option>
            <option>OH</option>
            <option>OK</option>
            <option>OR</option>
            <option>PA</option>
            <option>RI</option>
            <option>SC</option>
            <option>SD</option>
            <option>TN</option>
            <option>TX</option>
            <option>UT</option>
            <option>VT</option>
            <option>VA</option>
            <option>WA</option>
            <option>WV</option>
            <option>WI</option>
            <option>WY</option>
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>How Can We Help? </legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" id="pet" onChange={petOnChange} />{' '}
                Pet friendly?
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" id="sewerHook" onChange={sewerHookOnChange}/>{' '}
                Need a sewer hook-up?
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio3" id="waterHook" onChange={waterHookOnChange}/>{' '}
                Need a water hook-up?
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio4" id="waterFront" onChange={waterFrontOnChange}/>{' '}
              Waterfront?
            </Label>
          </FormGroup>
          </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
  );
}

export default Query;