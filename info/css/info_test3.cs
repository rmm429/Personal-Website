/*
Demo Styles: NOT REQUIRED
*/
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

.center-horizontal
{
    text-align: center;
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

.full-screen {
  height: 100%; /* makes panels the entire window height */
}

.margin-top-div
{
  margin: 20px 20px 0 20px;
}

.margin-div
{
  margin: 0 20px 0 20px;
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
