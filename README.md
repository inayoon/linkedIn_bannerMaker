<p align="center">
<img width="427" alt="bannerMaker_fullscreenshot" src="https://github.com/inayoon/linkedIn_bannerMaker/assets/100747899/94608f92-e55c-4865-95b6-46546eed878d">
</p>

</br>

# Linkedin Background Banner Maker
> I've created LinkedIn Background Banner Maker that allows users to customize their banner. By clicking buttons, users can choose from a variety of random background colors, adjust the size, and select from three distinct keyword styles. Additionally, users have the option to download the customized banner as a PNG file, enabling application to their LinkedIn profile background.
<br/>

## Total Development Period
> 2024.02.11 ~ 2024.02.14
<br/>

## Project `Objectives`
> - I aspired to apply fundamental knowledge of TypeScript, leading to the conceptualization of a straightforward project.
> - I aimed to directly implement the concepts of types and interfaces, crucial elements in the creation of TypeScript applications.
<br/>

## Tech Stack
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<br/>

<br/>

## ✅Main Features 

> ### 1. Choosing from a variety of random background colors and random gradient 

<img width="500" alt="bannerMaker_fullscreenshot" src="https://github.com/inayoon/linkedIn_bannerMaker/assets/100747899/8c7c5292-06e5-4521-ba40-3634209d2a04">
<details>
<summary><h3>Implementing Random RGB Functionality for Background Generation</h3></summary>
<br/>

- The addition of +110 to the randomly generated number using the Math.random method was intended to create brighter colors. <br/>
- The toString(16) method is utilized to convert the random numbers into hexadecimal strings for representing the RGB values.<br/>

```Javascript
/** BgColor.tsx */
const genRanColor = () => {
    let colorCode = "";
    colorCode += Math.floor(Math.random() * 127 + 110).toString(16);
    colorCode += Math.floor(Math.random() * 127 + 110).toString(16);
    colorCode += Math.floor(Math.random() * 127 + 110).toString(16);
    return colorCode;
  };
  const handleBgColor = () => {
    getColor(`#${genRanColor()}`);
  };
  const handleGradient = () => {
    const color1 = `#${genRanColor()}`;
    const color2 = `#${genRanColor()}`;
    const color3 = `#${genRanColor()}`;
    const gradients = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
    getColor(gradients);
  };

```




## Visual Draft Before Working on the Project
<img width="650" alt="bannermaker_draft" src="https://github.com/inayoon/linkedin_bg_maker/assets/100747899/a3ad9a4b-3b8b-4ef1-8387-b960e7514d59">


