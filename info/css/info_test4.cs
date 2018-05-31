/*
Demo Styles: NOT REQUIRED
*/


.text{
  display: inline-block;
  font-size: 15vmin;
  line-height: 1.205;
}

.text__first, .text__second{
  position: relative;
}

.text__word{
  opacity: 0;
}

.text__first-bg, .text__second-bg{
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  transform-origin: left;
  transform: scaleX(0);
}

.text__first-bg{
  background-color: #3883d8;
}

.text__second-bg{
  background-color: #eaea20;
}

.text__second{
  margin-left: 15vmin;
}




html,
body {
  margin: 0;
  height: 100%
}




h1
{
  font-size: 35px;
}

h1, h2, h3, h4, h5, h6
{
    font-family: 'Oswald', sans-serif;
    margin: 0;
    padding: 0;
    color: black;
}

p, div, ul, li, tr, th, td
{
    font-family: 'Khula', sans-serif;
    margin: 0;
    padding: 0;
    color: black;
}


.text-invisible, .text-about-me, .text-compsci-drexel, .text-tracks, .text-tracks-content,
.text-minor, .text-minor-content, .text-technical, .text-languages, .text-languages-proficient, .text-languages-proficient-content,
.text-languages-limited, .text-languages-limited-content, .text-software, .text-software-content, .text-certifications, .text-certifications-content,
.text-employment, .text-employment-current, .text-osisoft, .text-osisoft-details, .text-osisoft-content,
.text-employment-previous, .text-chop, .text-chop-details, .text-chop-content, .text-zpub, .text-zpub-details,
.text-zpub-content

{
  opacity: 0;
  flex: 1;
  justify-content: flex-start;
}

.outer-compsci-drexel, .outer-tracks, .outer-minor, .outer-languages, .outer-software, .outer-certifications
{
  opacity: 0;
  background-color: black;
  margin: 10px 10px 10px 10px;
  padding: 10px 0 10px 0;
  display: inline-block;

}

.inner-compsci-drexel, .inner-tracks, .inner-minor, .inner-languages, .inner-software, .inner-certifications
{
  opacity: 0;
  background-color: white;
  margin: 0 10px 0 10px;
  padding: 10px;
  display: inline-block;
}



.div-content-outer{

  background-color: black;
  margin: 10px 10px 10px 10px;
  padding: 10px 0 10px 0;
  display: inline-block;

}

.div-content-inner{

  background-color: white;
  margin: 0 10px 0 10px;
  padding: 10px;
  display: inline-block;
}

.side-by-side{

  display: inline-block;

}



.horizontal-spacer
{
  width: 25%;
}
.same-line-content{
    display: inline-block;
}

.center-horizontal
{
    text-align: center;
    padding: 1px;
}

.center-title {
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center
{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.center-vertical
{
  height: 10em;
  display: flex;
  align-items: center;
}



.scene {
    padding: 50px;
    height: 100%;
}

.pin {
    padding: 20px;
    background: blue;
    color: white;
    height: 100%;
}

.inside {
    padding: 20px;
    background: green;
}




header {
  position: fixed;
  top: 10px;
  left: 10px;
}

section {
  text-align: center;
  color: #EFEFEF;
}

.screen-about-me {
  height: 100em; /* makes panels the entire window height */
}

.screen-technical {
  height: 105em; /* makes panels the entire window height */
}
.screen-employment{
  height: 125em;
}


.half-screen{
  height: 50%;
}

.margin-top-div
{
  margin: 20px 20px 0 20px;
}

.margin-div
{
  margin: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: visible;
  justify-content: flex-start;
}

.blue {
  background-color: #3883d8;
}
.red {
  background-color: #cf3535;
}
.orange {
  background-color: #ea6300;
}
.gold {
  background-color: #eaea20;
}
.white {
  background-color: white;
}









.dropbtn {
    background-color: #333;;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
}

.dropdown {
    position: fixed;
		float: left;
		left: 0;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #ddd}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #ddd;
		color: #333;
}
