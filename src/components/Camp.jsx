import React, { Component } from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';
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
    const { facilityName , latitude, longitude, sitesWithPetsAllowed, sitesWithSewerHookup, sitesWithWaterHookup, sitesWithWaterFront, state} = camp;

    let fav = <Button type="radio" name={`fav${facilityName}`} />

    // if(star.isFav){
    //     star = solidStar
    // } else {
    //     star = regStar
    // }

    // let FavIcon;
    // if (isFav) FavIcon = (<span className="favIcon"><FAIcon onClick={() => favClicked(id)} icon={solidStar} style={{ color: 'steelblue' }} /></span>);
    // else FavIcon = (<span className="favIcon"><FAIcon onClick={() => favClicked(id)} icon={regStar} /></span>);

    return (
        // <ReactFragment className="CampFrag">
            <tr className="CampRow">
                <td><strong>{facilityName}</strong></td>
                <td><strong>{sitesWithPetsAllowed}</strong></td>
                <td><strong>{sitesWithSewerHookup}</strong></td>
                <td><strong>{sitesWithWaterHookup}</strong></td>
                <td><strong>{sitesWithWaterFront}</strong></td>
                <td><strong>{longitude}</strong></td>
                <td><strong>{latitude}</strong></td>
                <td className="fav"><strong>{fav}</strong></td>
            </tr>
        // </ReactFragment>
    )
};

export default Camp;
