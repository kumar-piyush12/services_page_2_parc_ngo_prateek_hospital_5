import React from 'react'
import './service1.css'
import { data } from '../../constants/'
import { logo, service1 } from '../../constants/images'

const Service1 = () => (
  <div className='service1--container'>
    <div className='service1--main-body'>
      <div className='service1--background'>
        {/* <img src={logo} id='service1--background'></img> */}
        <h1>Services 4</h1>
      </div>
{/* 
      <h1 id="service1--heading">Services</h1> */}

      <h2 id="service1--subheading">Hospital Service</h2>

      <div className='service1--img-2'>
        <img src={service1} id='service1--img'></img>
      </div>

      <div className='service1--description'>
        <p id='service1--description'>
          Birla Institute of Technology & Science, Pilani (BITS Pilani) is a
          deemed university in Pilani, Jhunjhunu, India.[12] It focuses
          primarily on higher education and research in engineering and
          sciences.[13] After expansion to a campus in Dubai, it has become the
          first international deemed university, spearheading in science,
          engineering, management and research with five established campuses
          and 15 academic departments. The institute is backed by the Aditya
          Birla Group and is one of the first six institutes to be awarded the
          Institute of Eminence status in 2018.[14][15] BITS conducts the
          All-India computerized entrance examination, BITSAT (BITS Admission
          Test).[16][17] Admission is purely assessed by the BITSAT
          examination.[18][19] The fully residential institute is privately
          supported. The institute was established in its present form in
          1964.[21] During this period, the institute's transformation from a
          regional engineering college to a national university was backed by
          G.D. Birla. The university has expanded its campuses from Pilani to
          Goa, Hyderabad, Dubai and Mumbai. Through its highly successful and
          widespread alumni network spanning globally across varied fields, BITS
          Pilani has made a significant impact on corporates, academia,
          research, entrepreneurship, arts and social activism.
        </p>
      </div>
    </div>
  </div>
)

export default Service1
