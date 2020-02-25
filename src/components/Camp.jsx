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
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';

const Camp = props => {
    const { camp } = props;
    const { facilityName , latitude, longitude, sitesWithPetsAllowed, sitesWithSewerHookup, sitesWithWaterHookup, sitesWithWaterFront, state} = camp;

    return (
        // <ReactFragment className="CampFrag">
            <tr className="CampRow">
                <td>{facilityName}</td>
                <td>{sitesWithPetsAllowed}</td>
                <td>{sitesWithSewerHookup}</td>
                <td>{sitesWithWaterHookup}</td>
                <td>{sitesWithWaterFront}</td>
                <td>{longitude}</td>
                <td>{latitude}</td>
            </tr>
        // </ReactFragment>
    )
};

export default Camp;
