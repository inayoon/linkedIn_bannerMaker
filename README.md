<p align="center">
<img width="50%" alt="bannerMaker_fullscreenshot" src="https://github.com/inayoon/linkedIn_bannerMaker/assets/100747899/94608f92-e55c-4865-95b6-46546eed878d"> <img width="50%" alt="bannerMaker_applied" src="https://github.com/inayoon/linkedIn_bannerMaker/assets/100747899/062a3ebd-c2f7-4d48-8483-577d8e61b059">
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

## ✅Main Screens and Features
|                                                             1.  Add Keywords                                                               |                                                         **2. Delete Keywords**                                                             |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|  <img width="471" alt="bannerMaker_insertKeywords" src="https://github.com/inayoon/linkedIn_bannerMaker/assets/100747899/ee711396-3b72-49f3-817e-b74694a83b0d">  |  <img width="471" alt="bannerMaker_deleteKeywords" src="https://github.com/inayoon/linkedIn_bannerMaker/assets/100747899/d95b8d3d-97df-4963-84a6-a0d52667ec74">  |
  
<br/>

---
  
<br/>

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
</details>

---

<br/>

> ### 2. Customizing Keywords with Various Sizes and Styles

<img width="500" alt="bannerMaker_customizing" src="https://github.com/inayoon/linkedIn_bannerMaker/assets/100747899/9b992659-1817-431d-b9f7-8cdcd603adc9">

<br/>

---

 <br/>   
 
> ### 3. Deleting Individual Keywords or Resetting

<img width="500" alt="bannerMaker_deleting" src="https://github.com/inayoon/linkedIn_bannerMaker/assets/100747899/b9ee4920-0c67-4571-a8db-2fd80f58fa69">

<br/>

---

 <br/>   
 
> ### 4. Saving the Created Banner as a PNG File

<img width="600" alt="bannerMaker_saving" src="https://github.com/inayoon/linkedIn_bannerMaker/assets/100747899/0bf75c35-62ad-405b-a270-fbda04ec811d">
<details>
<summary><h3>Applying html2canvas lib to save the banner</h3></summary>
<br/>

- Utilize the `handleImage` function to locate and capture the content of an HTML element with the class `.dynamic-banner`, converting it into a PNG image. <br/>

```Javascript

/** App.tsx */
import html2canvas from "html2canvas";

  const handleImage = async () => {
    const target: HTMLElement | null =
      document.querySelector(".dynamic-banner");

    if (target) {
      try {
        const canvas = await html2canvas(target);
        const imageUri = canvas.toDataURL("image/png");
        downloadURI(imageUri, "banner.png");
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
  };

  const downloadURI = (uri: string, name: string) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
  };

```
</details>

---

<br/>

## Challenges Faced During the Project Development
 - Creating and applying custom types directly is still an area where I feel less comfortable and confident.
 - While I've been accustomed to using Tailwind CSS, managing everything with raw CSS presented a challenge. Building a comprehensive structure with CSS remains a difficulty for me.
<br/>

## Visual Draft Before Working on the Project
<img width="500" alt="bannermaker_draft" src="https://github.com/inayoon/linkedin_bg_maker/assets/100747899/a3ad9a4b-3b8b-4ef1-8387-b960e7514d59">

---

<br/>

> ### Used Fonts
  - [Pretendard](https://github.com/orioncactus/pretendard)

<br/>

