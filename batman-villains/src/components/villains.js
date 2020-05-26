import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { logOut } from "../store/actions/actions";
import Accordion from "../functionality/accordion";
import logo from "../icons/home.jpg";
import "../App.css";
import joker from "../icons/joker.jpg";
import penguin from "../icons/penguin.jpg";
import twoface from "../icons/twoface.png";
import blackmask from "../icons/blackmask.jpg";
import hugoStrange from "../icons/hugostrange.png";
import ras from "../icons/ras.jpg";
import mrFreeze from "../icons/mrfreeze.jpg";
import riddler from "../icons/riddler.jpg";
import poisonIvy from "../icons/poisonivy.png";
import harleyQuinn from "../icons/harleyquinn.jpg";
import scarecrow from "../icons/scarecrow.png";
import deathstroke from "../icons/deathstroke.png";
import catWoman from "../icons/catwoman.jpg";
import calendarMan from "../icons/calendarman.jpg";
import talia from "../icons/talia.png";
import prometheus from "../icons/prometheus.jpg";
import manBat from "../icons/manbat.jpg";
import killerCroc from "../icons/killercroc.jpg";
import solomon from "../icons/solomongrundy.png";
import clayface from "../icons/clayface.jpg";
import bane from "../icons/bane.jpg";
import firefly from "../icons/firefly.jpg";
import madHatter from "../icons/madhatter.png";
import killerMoth from "../icons/killermoth.jpg";
import ventriloquist from "../icons/scarface.png";
import greatWhiteShark from "../icons/greatwhiteshark.jpg";
import deadshot from "../icons/deadshot.jpg";
import azrael from "../icons/azrael.png";
import hush from "../icons/hush.png";
import victor from "../icons/victorzsasz.png";
import anarky from "../icons/anarky.jpg";
import humptydumpty from "../icons/humptydumpty.jpg";
import rat from "../icons/ratcatcher.jpg";
import tweedle from "../icons/tweedle.jpg";
import professorPyg from "../icons/professorpyg.jpg";

function Villains(props) {
  const { touched, errors, logInUser, history, token } = props;
  return (
    <div className="home-container">
      <header className="Home-header">
        <div id="mySidenav" class="sidenav">
          <h1>Villains of Gotham</h1>
          <NavLink className="a" to="/home">
            Home
          </NavLink>
          <br />
          <NavLink className="a" to="/villains">
            Villains
          </NavLink>
          <br />
          <NavLink className="a" to="/register">
            Register
          </NavLink>
          <br />
          <NavLink className="a" to="/login">
            Login
          </NavLink>
          <br />
          <NavLink className="a" to="/create">
            Create
          </NavLink>
          <br />
          <NavLink className="a" to="/squads">
            Squads
          </NavLink>

          <br />
          <NavLink className="a" to="/about">
            About
          </NavLink>
        </div>
      </header>
      <div className="Home">
        <div className="text-section">
          <h1 className="top-h1">Villains</h1>
          <h3>
            Here you can find a list of Gotham's deadly criminals! <br />
            Take all of their info into consideration before creating your
            squad!
          </h3>
        </div>
        <br />
        <h3>Bosses</h3>
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={joker}
        />
        <Accordion
          title="The Joker"
          content="
          <h3></h3>
          <p>The Joker is noted for his clownlike appearance and sick humour. The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={penguin}
        />
        <Accordion
          title="The Penguin"
          content="
          <h3></h3>
          <p>Born Oswald Chesterfield Cobblepot, the Penguin was teased very much in his childhood due to his short stature, obesity, and bird-like nose. These traits made him an outcast in his rich, debutante family. Their rejection drove him to become evil</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={twoface}
        />
        <Accordion
          title="Two-Face"
          content="
          <h3></h3>
          <p> After his disfigurement, he started a crime spree as Two-Face until he was eventually stopped by Batman, who talked reason into him and convinced Dent to have his face restored with plastic surgery</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={blackmask}
        />
        <Accordion
          title="Black Mask"
          content="
        <h3></h3>
        <p>The character is commonly depicted as a brutal and ruthless crime lord in Gotham City who has a fixation with masks and derives sadistic pleasure from the act of torture.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={hugoStrange}
        />
        <Accordion
          title="Hugo Strange"
          content="
        <h3></h3>
        <p>Professor Hugo Strange first appears in Detective Comics #36 (February 1940) as a scientist who uses a stolen 'concentrated lightning' machine to generate a dense fog every night, allowing his gang to rob banks unseen, though he knows that Batman poses a threat to him.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={ras}
        />
        <Accordion
          title="Ra's al Ghul"
          content="
      <h3></h3>
      <p>As told in Birth of the Demon, Ra's al Ghul is born over six hundred years before his first appearance in Batman comics, to a tribe of desert nomads somewhere in Arabia, near a city whose inhabitants' ancestors have journeyed to the Arabian Peninsula from China.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={mrFreeze}
        />
        <Accordion
          title="Mr. Freeze"
          content="
    <h3></h3>
    <p>Dr. Victor Fries was a cryogenics expert in Gotham City who was caught in a laboratory mishap while attempting to cure his terminally ill wife, Nora; the accident drastically lowered his body temperature to sub-zero levels, forcing him to wear a cryogenic suit in order to survive</p>"
        />
        <h3>Second in Commands</h3>
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={riddler}
        />
        <Accordion
          title="The Riddler"
          content="
  <h3></h3>
  <p>The character's origin story recounts that the Riddler, whose real name is Edward Nigma (Edward Nashton, or Nygma per later writers), becomes fascinated with puzzles at a young age.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={poisonIvy}
        />
        <Accordion
          title="Poison Ivy"
          content="
          <h3></h3>
          <p>Poison Ivy's first origin saw her begin as the botanist Dr. Pamela Lillian Isley, who was betrayed by her professor, Marc LeGrande. After he gained her help in stealing a rare Egyptian artifact containing ancient herbs, LeGrande decided to poison Pamela to keep her silent.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={harleyQuinn}
        />
        <Accordion
          title="Harley Quinn"
          content="
        <h3></h3>
        <p>The character's origin story relates that Harleen Quinzel was once a psychiatrist at Arkham Asylum and was assigned to treat the Joker. ... She follows suit in the Joker's clown-themed, criminal antics and adopts the name Harley Quinn</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={scarecrow}
        />
        <Accordion
          title="Scarecrow"
          content="
      <h3></h3>
      <p> the Scarecrow is first introduced as Jonathan Crane, a professor of psychology, who turns to crime after he is fired; an expert in the psychology of fear, he had fired a gun in a classroom full of students to illustrate a point</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={deathstroke}
        />
        <Accordion
          title="Deathstroke"
          content="
    <h3></h3>
    <p>A formidable operative for the U.S. military, Col. Slade Wilson agreed to undergo an experimental process that increased his mental and physical abilities to superhuman levels. Rather than continue his career as a soldier, Slade became the masked mercenary Deathstroke</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={catWoman}
        />
        <Accordion
          title="Catwoman"
          content="
  <h3></h3>
  <p>Catwoman, then called 'the Cat', first appeared in Batman #1 (Spring 1940) as a mysterious burglar and jewel thief, revealed at the end of the story to be a young, attractive (unnamed) woman, having disguised herself as an old woman during the story and been hired to commit a burglary.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={calendarMan}
        />
        <Accordion
          title="Calendar Man"
          content="
          <h3></h3>
          <p>Calendar Man is a successful inventor, capable of designing the machinery needed to deploy his various schemes. His talents aid him as he pursues his obsession with quirks of the calendar, carefully planning and theming his crimes around holidays.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={talia}
        />
        <Accordion
          title="Talia al Ghul"
          content="
        <h3></h3>
        <p>Talia is the daughter of Ra's Al Ghul and the mother of the late Damian Wayne. Much of her background is not clearly explained though her history is relatively well known. Ra's met her mother (sometimes referred to as Melisande) at the Woodstock Musical Festival</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={prometheus}
        />
        <Accordion
          title="Prometheus"
          content="
      <h3></h3>
      <p>A dark reflection of Batman, Prometheus was raised by criminals who were gunned down by policemen right in front of him. Dedicating his life to destroying the law, Prometheus traveled the world and trained in the ways of murder</p>"
        />
        <h3>Brutes</h3>
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={manBat}
        />
        <Accordion
          title="Man-Bat
          "
          content="
    <h3></h3>
    <p>By taking his bat-gland formula, Kirk Langstrom can transform himself into a bat-like creature. By taking an antidote or if the bat-gland formula wears off, he can return to human form. As the Man-Bat, his strength, agility and endurance are all enhanced to superhuman levels.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={killerCroc}
        />
        <Accordion
          title="Killer Croc"
          content="
  <h3></h3>
  <p>Killer Croc, born Waylon Jones, is a criminal and nemesis of Batman. He was born with an extreme form of the medical condition Epidermolytic hyperkeratosis, which caused his appearance to develop progressively into that of a crocodile, hence his name. His mother died in childbirth, and his father abandoned him.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={solomon}
        />
        <Accordion
          title="Solomon Grundy"
          content="
          <h3></h3>
          <p>The undead monster known as Solomon Grundy is powerful, immortal and bad news for every hero unfortunate enough to cross his path. Grundy was a corrupt man named Cyrus Gold until his untimely death in Slaughter Swamp. Since then, his entire existence has been an unending cycle of death and rebirth. When Grundy dies, he eventually rises again, emerging from the depths of his original resting place in the swamp to wreak havoc on the living.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={clayface}
        />
        <Accordion
          title="Clayface"
          content="
        <h3></h3>
        <p>Basil Karlo was an actor who was driven mad when he heard of a re-make of the classic horror film he had starred in, Dread Castle. Adopting the persona of 'Clayface', the villain of one of his old films, he became a serial killer targeting the cast and crew.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={bane}
        />
        <Accordion
          title="Bane"
          content="
      <h3></h3>
      <p>Born in a prison on a remote Caribbean island, Bane was raised without pity or compassion. As an adult, he served as a test subject for the super-steroid called Venom. Superhumanly strong, Bane escaped his hell and headed to Gotham City—where he chose to make his mark by defeating the Batman. Though he succeeded, their initial battle was far from their last.</p>"
        />

        <h3>Henchmen</h3>
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={firefly}
        />
        <Accordion
          title="Firefly"
          content="
    <h3></h3>
    <p>Garfield Lynns was originally a pyrotechnic expert for motion pictures, but became a victim of Gotham City's severe poverty and turned to crime, displaying signs of pyromania."
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={madHatter}
        />
        <Accordion
          title="Mad Hatter"
          content="
  <h3></h3>
  <p>Jervis Tetch, a brilliant neuroscientist, embraced a delusion that he was the incarnation of a character in the story, the Mad Hatter. Using his hypnotic skills for mesmerism, Tetch as the Mad Hatter has committed many crimes, often themed around the book that inspired him and his love of hats and headgear, going so far as to plant his hats, ranging from pith helmets to bowlers, with mind control chips to amplify his hypnosis skills. Above all other headwear, he covets Batman's distinctive cowl and will stop at nothing to acquire it.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={killerMoth}
        />
        <Accordion
          title="Killer Moth"
          content="
          <h3></h3>
          <p>In his original incarnation, Killer Moth has no superhuman abilities; he relies on the vast array of equipment he has developed. Killer Moth's range of gimmicks includes a Mothmobile, a Moth-Signal, and a steel line, which allows him to swing through the skies as if he were flying.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={ventriloquist}
        />
        <Accordion
          title="The Ventriloquist and Scarface"
          content="
        <h3></h3>
        <p>Arnold Wesker was a former ventriloquist in Gotham City when he suffered from Dissociative Identity Disorder, a psychological trauma in his youth. Wesker turned to crime and carved a dummy by the name of Scarface. His disorder was manifested within the dummy, who became the dominant personality.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={greatWhiteShark}
        />
        <Accordion
          title="Great White Shark"
          content="
      <h3></h3>
      <p>Warren White has no superpowers but he's a skilled organizer and negotiator with a high-level intellect. After being deformed, he files his teeth to the point of being razor sharp.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={deadshot}
        />
        <Accordion
          title="Deadshot"
          content="
    <h3></h3>
    <p>Floyd Lawton, better known as Deadshot, is a mercenary and an old enemy of Batman.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={azrael}
        />
        <Accordion
          title="Azrael"
          content="
  <h3></h3>
  <p>Dumas, a secret organization bent on restoring justice to Gotham City. Azrael is usually depicted as an ally of the superhero Batman, though the two have also been adversaries due to the former's violent nature and twisted sense of justice indoctrinated by the Order.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={hush}
        />
        <Accordion
          title="Hush"
          content="
          <h3></h3>
          <p>Dr. Thomas 'Tommy' Elliot was a childhood friend of Bruce Wayne. He became an incredibly skilled surgeon as an adult, and planned an elaborate revenge scheme on Wayne. He disguised himself as the villain Hush, and covered his face in bandages generating complicated schemes with surgical precision.</p>"
        />
        <h3>Thugs</h3>
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={victor}
        />
        <Accordion
          title="Victor Zsasz"
          content="
        <h3></h3>
        <p>Zsasz is a serial killer and a nemesis of Batman. He usually kills with a knife and carves a tally mark somewhere on himself for every victim. Zsasz was the head of his own international company and had amassed a large personal fortune in addition to his family's wealth.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={anarky}
        />
        <Accordion
          title="Anarky"
          content="
      <h3></h3>
      <p>Anarky is introduced as Lonnie Machin, a child prodigy with knowledge of radical philosophy and driven to overthrow governments to improve social conditions.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={humptydumpty}
        />
        <Accordion
          title="Humpty Dumpty"
          content="
    <h3></h3>
    <p>Humphry Dumpler is a large, portly, well-mannered man with an egg shaped head (the source of his alias) who speaks in rhyme and is obsessed with repairing and putting back together that which he considers to be broken.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={rat}
        />
        <Accordion
          title="Ratcatcher"
          content="
  <h3></h3>
  <p>Once employed as an actual ratcatcher in Gotham City, Otis Flannegan soon started using his strange ability—an affinity with and the ability to control rats—to stage a variety of crimes. Eventually, his control over the vermin grew until he threatened Gotham with a veritable army of rodents. </p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={tweedle}
        />
        <Accordion
          title="Tweedle-Dee and Tweedle-Dum"
          content="
          <h3></h3>
          <p>Cousins with an uncanny resemblance to each other, Deever and Dumfree Tweed both shared criminal leanings and a fixation on Lewis Carroll's Alice in Wonderland. Teaming up, they've modelled themselves after Tweedledee and Tweedledum from that book, planning often outrageous, absurdist schemes to trap the Batman.</p>"
        />
        <img
          className="villain-pic"
          style={{ width: "30px;", height: "30px;" }}
          src={professorPyg}
        />
        <Accordion
          title="Professor Pyg"
          content="
        <h3></h3>
        <p>Professor Pyg is a deranged schizophrenic who has developed an obsession with making people 'perfect', which he accomplishes by transforming them into Dollotrons, a process that bonds false 'doll' faces to their own, presumably permanently.</p>"
        />
        <br />
        <br />
      </div>
      <footer class="footer pt-80 pt-xs-60">
        <div class="footer-container">
          <h1>Villains of Gotham</h1>
          <div class="copyright">
            <p>
              © 2020
              <a>
                <b> Forrest Darabian </b>
              </a>
            </p>
          </div>
          <div class="left">
            <h4 class="something">Contact / Links</h4>
            <li>
              {" "}
              <a href="mailto:forrestdarabian@gmail.com">
                <i class="ion-ios-email fa-icons"></i>
                Contact Me
              </a>{" "}
            </li>
            <li>
              <a href="https://www.forrestdarabian.com/">
                <i class="fa-angle-double-right"></i>Developers Site
              </a>
            </li>
          </div>
          <br />
          Batman is a property of Warner Bros & DC Comics.
        </div>
      </footer>{" "}
      <br />
      <br />
      <br />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
    logInUser: state.logInUser,
  };
};
export default Villains;
