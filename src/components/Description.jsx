import React from 'react'
import { Flex } from '@chakra-ui/react'

function Description() {
  return (
    <Flex alignItems={"center"} textAlign={"center"} justifyContent={"center"} mt={"1.8rem"}>
        <div style={{fontFamily: 'Roboto', fontWeight: 500, width: "65%", letterSpacing: "1.2px", color: "#333"}}>
            <p>
            The BITS Goa Innovation, Incubation & Entrepreneurship Society (BGIIES) is a registered Society under the Societies Registration Act, 1860, in February 2020, having its first office in BITS Pilani, K. K. Birla Goa Campus, Zuarinagar, Goa India. BGIIES is a sector agnostic Technology Business Incubator, which acts as a wormhole to startups, connecting them with technology and business resources, vendors, and channels to help first time entrepreneurs lean and get the best mentorship from the ecosystem.
            </p>
        </div>
    </Flex>
    
  )
}

export default Description