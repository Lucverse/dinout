import React from 'react';
import "./sidenav.css";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'



const Sidenav = () => {
  return (
    
    <div className='a-sidenav-container'>

<div>
<Accordion defaultIndex={[2,1,0]} allowMultiple pl={10} >
  <AccordionItem >
    <h2 >
      <AccordionButton className='a-box-span' >
        <Box  flex='1' textAlign='left' className='accord'>
        Quick Filters
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={0} mt={-5}>
        <div className='a-sidebar-detail'>
      <div>
        <input type="text" className='sidenav-inp' placeholder='Search'/>
      </div>
     <div>
      <input type="checkbox"/> <span>Dineout Pay</span>
     </div>
     <div>
      <input type="checkbox"/> <span>Pure Veg</span>
     </div>
     <div>
      <input type="checkbox"/> <span>5 Star</span>
     </div>
     <div>
      <input type="checkbox"/> <span>Buffet</span>
     </div>
        </div>
    </AccordionPanel>
  </AccordionItem>

  <div className='spanBorder'></div>

  <AccordionItem >
    <h2>
      <AccordionButton className='a-box-span'>
        <Box  flex='1' textAlign='left' className='accord' >
        Cuisines
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={0} mt={-5}>
        <div className='a-sidebar-detail'>
      <div>
        <input type="text" className='sidenav-inp' placeholder='Search for Cuisines'/>
      </div>
     <div className='places-a'>
      <span>North Indian</span>
     </div >
     <div className='places-a'>
       <span>Fast Food</span>
     </div>
     <div className='places-a'>
       <span>Chinese</span>
     </div>
     <div className='places-a'>
     <span>Desserts</span>
     </div>
        </div>
    </AccordionPanel>
  </AccordionItem>
  <div className='spanBorder'></div>


  <AccordionItem >
    <h2>
      <AccordionButton className='a-box-span'>
        <Box  flex='1' textAlign='left' className='accord' >
        Tags
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={0} mt={-5}>
        <div className='a-sidebar-detail'>
      <div>
        <input type="text" className='sidenav-inp' placeholder='Search'/>
      </div>
     <div>
      <input type="checkbox"/> <span>Casual Dining</span>
     </div>
     <div>
      <input type="checkbox"/> <span>Case</span>
     </div>
     <div>
      <input type="checkbox"/> <span>Breakfast</span>
     </div>
     <div>
      <input type="checkbox"/> <span>Bakery</span>
     </div>
        </div>
    </AccordionPanel>
  </AccordionItem>
  <div className='spanBorder'></div>


  <AccordionItem >
    <h2>
      <AccordionButton className='a-box-span'>
        <Box  flex='1' textAlign='left' className='accord'>
        Features
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={0} mt={-5}>
        <div className='a-sidebar-detail'>
      <div>
        <input type="text" className='sidenav-inp' placeholder='Search'/>
      </div>
     <div>
      <input type="checkbox"/> <span>Card Accepted</span>
     </div>
     <div>
      <input type="checkbox"/> <span>Wallet Accepted</span>
     </div>
     <div>
      <input type="checkbox"/> <span>Home Delivery</span>
     </div>
     <div>
      <input type="checkbox"/> <span>Air Conditioned</span>
     </div>
        </div>
    </AccordionPanel>
  </AccordionItem>
  <div className='spanBorder'></div>
 
</Accordion>
</div>

<div>
  <p>Top 10 Resturent in Delhi</p>
</div>
    </div>
  )
}

export default Sidenav;