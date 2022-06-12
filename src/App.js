import { useEffect } from 'react'
import './App.css';
import './custom.css';
import {useContext} from 'react';
import {ThemeContext} from './theme'

function App() {
  useEffect(() => {
    document.title = "Team | anetaBTC"
  }, [])
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div className="App" style = {{backgroundImage: theme.backgroundImage, color: theme.color, transition: theme.trans}}>
    <div className="ank">
        <img src={require('./icons/angel1.svg').default}  width="402px" height="402px" className="ank1"/>
        <img src={require('./icons/angel2.svg').default}  width="400px" height="400px" className="ank2"/></div>
    <main className="team_back">


    <div className="nav1">
    <a href="https://anetabtc.io/"><img className="logonav" src={theme.logo} /></a>
    <img className="icontheme" onClick={toggleTheme} src={theme.sun} />
    </div>
        <div className="team_block">
  <h2><b>Meet our Team.</b></h2>
<div className="grid_team">

<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}} >
<img src={require('./avatar/austin.png')} /><br /><br />
<h3>Austin Negron</h3><b>CEO</b><p /><p className="font1" >Computer Engineering<br /> Boston University</p>
</div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/talgat.png')} /><br /><br /><h3>Talgat Manglayev</h3><p ><b>Lead Engineer</b></p><p className="font1" >Ph.D. Nazarbayev University Postdoctoral Researcher at University of Helsinki</p> </div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/willie.png')} /><br /><br /><h3>Willie Mclinton</h3><p ><b>Lead Researcher</b></p><p className="font1" >Ph.D. MIT AI and Robotics Google AI Resident Researcher</p></div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}><img src={require('./avatar/margie.png')} /> <br /><br /><h3>Marguerite Blair</h3><p ><b>Software Engineer</b></p><p className="font1" >Citizens Bank</p></div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/robert.png')} /><br /><br /><h3>Robert Ohr</h3><p ><b>Chairman</b></p><p className="font1" >Lehman Brothers <br />Columbia University</p></div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/aibek.png')} /><br /><br /><h3>Aibek Tleuliyev</h3><p ><b>Lead Security Engineer</b></p><p className="font1" >Head of the Department of Ballistic and Navigation Support of the Mission Control Center</p></div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/dair.png')} /><br /><br /><h3>Dair Alayev</h3><p ><b>Full-stack Developer</b></p><p className="font1" >Astana IT University</p></div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/max.png')} /><br /><br /><h3>Max Ward</h3><p ><b>UI/UX</b></p><p className="font1" >Boston University</p></div>

<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/darkhan.svg').default} /><br /><br /><h3>Darkhan Baibulat</h3><p ><b>Front-end Developer</b></p><p className="font1" >Astana IT University</p></div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/olzhas.svg').default} /><br /><br /><h3>Olzhas Abdykalykov </h3><p ><b>Back-end Developer</b></p><p className="font1" >Astana IT University</p></div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/kalbek.svg').default} /><br /><br /><h3>Kalbek Saduakassov</h3><p ><b>Back-end Developer</b></p><p className="font1" >Astana IT University</p></div>
<div className="list_team" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/aisha.svg').default} /><br /><br /><h3>Aisha Kozhamseitova</h3><p > <b>Mobile Developer</b></p><p className="font1" >Astana IT University</p></div>
</div>
<div className="grid_team_2">
<div className="list_team2" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/hayato.png')} /><br /><br />
<h3>Hayato Gin Kawai</h3><p ><b>Graphic Design</b></p><p className="font1" >gallerialovelace.io</p></div>
<div className="list_team2" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/nathan.png')} /><br /><br />
<h3>Nathan Baskin</h3><p ><b>KYC/AML</b></p><p className="font1" >Silicon Valley Bank<br /> Santander Bank</p></div>
<div className="list_team2" style = {{backgroundColor: theme.list, color: theme.links}}> <img src={require('./avatar/georgina.png')} /><br /><br />
<h3>Georgina Alcaraz</h3><p ><b>Business Development</b></p><p className="font1" >Boston University</p></div>

</div>

</div>
<br /><br /><br />
    </main>
    </div>
  );
}

export default App;
