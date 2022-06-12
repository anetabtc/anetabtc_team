import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import LandingSocials from '../components/LandingSocials';



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Team`}
      description="Description will go into a meta tag in <head />">

      <main className="team_back">
<div className="ank">
      <img src={'/light/angel1.svg'}  width="402px" height="402px" className="ank1"/>
      <img src={'/light/angel2.svg'}  width="400px" height="400px" className="ank2"/></div>

          <div className="team_block">
    <h2><b>Meet our Team.</b></h2>
<div className="grid_team">

<div className="list_team">
<img src={'/avatar/austin.png'} /><br /><br />
<h3>Austin Negron</h3><b>CEO</b><p /><p className="font1" >Computer Engineering<br /> Boston University</p>
 </div>
<div className="list_team"> <img src={'/avatar/talgat.png'} /><br /><br /><h3>Talgat Manglayev</h3><p ><b>Lead Engineer</b></p><p className="font1" >Ph.D. Nazarbayev University Postdoctoral Researcher at University of Helsinki</p> </div>
<div className="list_team"> <img src={'/avatar/willie.png'} /><br /><br /><h3>Willie Mclinton</h3><p ><b>Lead Researcher</b></p><p className="font1" >Ph.D. MIT AI and Robotics Google AI Resident Researcher</p></div>
<div className="list_team"><img src={'/avatar/margie.png'} /> <br /><br /><h3>Marguerite Blair</h3><p ><b>Software Engineer</b></p><p className="font1" >Citizens Bank</p></div>
<div className="list_team"> <img src={'/avatar/robert.png'} /><br /><br /><h3>Robert Ohr</h3><p ><b>Chairman</b></p><p className="font1" >Lehman Brothers <br />Columbia University</p></div>
<div className="list_team"> <img src={'/avatar/aibek.png'} /><br /><br /><h3>Aibek Tleuliyev</h3><p ><b>Lead Security Engineer</b></p><p className="font1" >Head of the Department of Ballistic and Navigation Support of the Mission Control Center</p></div>
<div className="list_team"> <img src={'/avatar/dair.png'} /><br /><br /><h3>Dair Alayev</h3><p ><b>Full-stack Developer</b></p><p className="font1" >Astana IT University</p></div>
<div className="list_team"> <img src={'/avatar/max.png'} /><br /><br /><h3>Max Ward</h3><p ><b>UI/UX</b></p><p className="font1" >Boston University</p></div>

<div className="list_team"> <img src={'/avatar/darkhan.svg'} /><br /><br /><h3>Darkhan Baibulat</h3><p ><b>Front-end Developer</b></p><p className="font1" >Astana IT University</p></div>
<div className="list_team"> <img src={'/avatar/olzhas.svg'} /><br /><br /><h3>Olzhas Abdykalykov </h3><p ><b>Back-end Developer</b></p><p className="font1" >Astana IT University</p></div>
<div className="list_team"> <img src={'/avatar/kalbek.svg'} /><br /><br /><h3>Kalbek Saduakassov</h3><p ><b>Back-end Developer</b></p><p className="font1" >Astana IT University</p></div>
<div className="list_team"> <img src={'/avatar/aisha.svg'} /><br /><br /><h3>Aisha Kozhamseitova</h3><p > <b>Mobile Developer</b></p><p className="font1" >Astana IT University</p></div>
</div>
<div className="grid_team_2">
<div className="list_team2"> <img src={'/avatar/hayato.png'} /><br /><br />
<h3>Hayato Gin Kawai</h3><p ><b>Graphic Design</b></p><p className="font1" >gallerialovelace.io</p></div>
<div className="list_team2"> <img src={'/avatar/nathan.png'} /><br /><br />
<h3>Nathan Baskin</h3><p ><b>KYC/AML</b></p><p className="font1" >Silicon Valley Bank<br /> Santander Bank</p></div>
<div className="list_team2"> <img src={'/avatar/georgina.png'} /><br /><br />
<h3>Georgina Alcaraz</h3><p ><b>Business Development</b></p><p className="font1" >Boston University</p></div>

</div>

</div>
<br /><br /><br />
      </main>

<footer className="foot2">

<div className="grid_footer_2">

<div className="foot1"><img src={'/imgphoto/rectangle.png'} /><img src={'/imgphoto/Rectangle1.png'} className="ph1" /><br />anetaBTC is a decentralized, secure protocol that allows users to unlock the value of their Bitcoin on Ergo and Cardano.</div>

<div className="foot2"><ul><b>anetaBTC</b>
<li><a href="/team" class="active" target="_blank">Team</a></li>
<li><a href="https://docs.anetabtc.io/" class="active" target="_blank">Docs</a></li>

<li><a href="https://play.google.com/store/apps/details?id=io.anetabtc.android" class="active" target="_blank">Aneta Wallet</a></li>

<li><a href="https://medium.com/@anetaBTC" class="active" target="_blank">News & Updates</a></li>
<li><a href="https://docs.anetabtc.io/docs/user-guides/Liso/liso-faq" class="active" target="_blank">FAQ</a></li>
<li><a href="https://medium.com/@anetaBTC/neta-tokenomics-55629989de2b" class="active" target="_blank">Tokenomics</a></li>
</ul></div>

<div className="foot3"><ul> <b>Resources</b>
<li><a href="https://anetabtc-liso-calculator.herokuapp.com/" class="active" target="_blank">LISO Calculator</a></li>
<li><a href="https://drive.google.com/drive/folders/13IGRgf9wNCPfckTQ6DSMaIo9gE-wx0zm?usp=sharing" class="active" target="_blank">Media Kit</a></li>
<li><a href="https://medium.com/@anetaBTC/anetabtc-litepaper-v1-0-171f29b3276a" class="active" target="_blank">Litepaper</a></li>


<li><a href="https://medium.com/@anetaBTC/roadmap-2-0-b2fe0c47eec6" class="active" target="_blank">Roadmap</a></li>
<li><a href="https://datastudio.google.com/u/0/reporting/4cb333f9-39bf-448b-8d2d-f7ac3f44ad5d/page/FyZjC"  target="_blank" class="active">Stats</a></li>
</ul></div>

<div className="foot4"><ul> <b>Foundation</b>
<li><a href="#" class="active">Hiring</a></li>
<li><a href="mailto:info@anetabtc.io" class="active">Contact</a></li>

</ul></div>

<div className="foot5">
<div className="imgconf">
<a href="http://discord.gg/anetabtc" class="active"><img src={'/icons/discord.svg'} /></a>
<a href="https://twitter.com/anetaBTC" class="active"><img src={'/icons/twitter.svg'} /></a>
<a href="https://medium.com/@anetaBTC" class="active"><img src={'/icons/medium.svg'} /></a>
<a href="https://t.me/anetaBTC" class="active"><img src={'/icons/telegram.svg'} /></a>
</div>

<b>anetaBTC is a Singapore based DAO.</b></div>
</div>



</footer>
    </Layout>
  );
}
