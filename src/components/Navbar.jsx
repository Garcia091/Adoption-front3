import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <Breadcrumb separator="" >
            <BreadcrumbItem >
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default Navbar
