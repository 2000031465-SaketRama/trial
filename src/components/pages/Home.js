import { Grid } from '@material-ui/core';
import React from 'react';
import '../../App.css';
import img from './img-10.jpg'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import { FooterContainer } from './footer'


export default function Home() {

  return (
    <center>
    <>
    <title className='home'>JRS RENTALS
    <br />
    BEST PLACE TO FIND HOUSES
    </title>
    <p 
 style={{
     textAlign: 'center',
     fontSize: '40px',
     padding:'40px 200px  100px',
     
 }}

    >Our main motto is to serve the products for the people which they cannot afford but they can use them with this renting system.</p>
    <p1
    style={{
        textAlign: 'center',
        fontSize: ' 40px  ',
        padding:'20px 100px 100px 135px',
    }}>In certain types of rental (sometimes known as operated or wet rental) the charge may be calculated by the rental charge + timesheets of operators or drivers supplied by the rental company to operate the equipment.</p1>

    <img src={img} class="center "  padding= '400px 200px  100px' width="99%" length="6%"></img>
      <p2
      style={{
        textAlign: 'center',
        fontSize: ' 22px  ',
        padding:'400px 200px  100px'
    }}>This is particularly relevant for crane rental companies.
    Sometimes the risk that the good is kept is reduced by it being a special model or having signs on it that cannot easily be removed, making it obvious that it is owned by the rental company; this is especially effective for goods used in public places, but even when used at home it may help due to social control.
    Persons and businesses that regularly rent goods from a particular company generally have an account with that company, which reduces the administrative procedure (transaction costs) on each occasion.</p2>
    <ImageSlider slides={SliderData} />
    <FooterContainer />
    </>
    </center>
  );
}
