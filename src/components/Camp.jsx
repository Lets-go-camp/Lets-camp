import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table
} from 'reactstrap';

const Camp = props => {
    const { camp } = props;
    const name = camp[0];
    const pets = camp[1];
    const sewerHook = camp[2];
    const waterHook = camp[3];
    const longitude = camp[4];
    const latitude = camp[5];
    const waterfront = camp[6]

    return (
        <ReactFragment className="CampFrag">
            <tr className="CampRow">
                <td>{name}</td>
                <td>{pets}</td>
                <td>{sewerHook}</td>
                <td>{waterHook}</td>
                <td>{waterfront}</td>
                <td>{longitude}</td>
                <td>{latitude}</td>
            </tr>
        </ReactFragment>
    )
};

export default Camp;
