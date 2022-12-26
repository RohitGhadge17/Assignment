import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { getByTestId, getByText, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Router } from "react-router-dom";


test('it displays all the links', () => {
    const {getByTestId} = render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    const navList = getByTestId('navbar-list');

    expect(navList.children.length).toBe(4);
    // expect(navList.children).toBeInTheDocument();
})


test('it displays all the links', () => {
    const {getByTestId} = render(<Navbar />);

    const navList = getByTestId('navbar-list');

    expect(navList.children.length).toBe(4);
    // expect(navList.children).toBeInTheDocument();
})

// test('renders the links in the navbar', () => {
//     render(<Navbar />);

//     const homeElement = screen.getByText(/Home/);
//     expect(homeElement).toBeInTheDocument();
// })


// test('Test navbar',() => {
//    const {container} =  render(<Navbar />);

//     const homeElem = getByText(container,'Home');

//     expect(homeElem).toBeInTheDocument();

//     // expect(homeElem).toHaveStyle(`color:red`);
// })


// test("navbar has correct backgroundcolor", () => {

//     const {container,getByTestId} = render(<Navbar />);

//     const navbarList = getByTestId('background');


//     expect(getByTestId("background")).toHaveStyle('background-color: red')

// })



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