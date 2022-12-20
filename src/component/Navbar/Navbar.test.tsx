import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { getByTestId, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";


test("navbar has correct backgroundcolor", () => {

    const {container,getByTestId} = render(<Navbar />);

    const navbarList = getByTestId('background');

    // expect(navbarList).toHaveStyle('backgroundColor: #5c5959')

    expect(getByTestId("background")).toHaveStyle('background-color: red')

})

// test("Navbar has corrent backgroundcolor", () => {
//    const {container} =  render(<Navbar />)

    // const colorNavbar = screen.getByRole('header', {name:'black navbar'})

    // expect(container).toHaveStyle("backgroundColor:'#5c5959'")
// })



// import 'jest-dom/extend-expect';
// import "@testing-library/jest-dom/extend-expect";
// import { render, cleanup } from "@testing-library/react";

// import Navbar from "./Navbar";

// afterEach(cleanup)

// test("It has to contain my navbar", () => {
//     const {container} = render(

//         <Navbar />
//     )

    // const navbarClass = Navbar().type.styledComponentId
    // const MyNavbarRoots = document.getElementsByClassName(navbarClass);
    // const style = window.getComputedStyle(MyNavbarRoots[0])

    // expect(container).toHaveStyle({backgroundColor:"#5c5959"})
    // expect(style.color).toBe('white')
    // expect(style.padding).toBe('15px')
// })



// it('it display default styling', () => {
//     const {getByTestId} = render(<Navbar />);

//     // const navbarList = getByTestId('navbar-list');
//     const navbarList = document.querySelectorAll<HTMLElement>('navbar');

//     expect(navbarList.style.backgroundColor).toBe('#5c5959');

//     expect(navbarList.style.color).toBe('white');
// })