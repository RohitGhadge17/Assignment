import React from "react";

// import 'jest-dom/extend-expect';
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

import Navbar from "./Navbar";

afterEach(cleanup)

test("It has to contain my navbar", () => {
    render(

        <Navbar />
    )

    const navbarClass = Navbar().type.styledComponentId
    const MyNavbarRoots = document.getElementsByClassName(navbarClass);
    const style = window.getComputedStyle(MyNavbarRoots[0])

    expect(style.backgroundColor).toBe('#5c5959')
    expect(style.color).toBe('white')
    expect(style.padding).toBe('15px')
})