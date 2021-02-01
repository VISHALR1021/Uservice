import react from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'
import logo1 from '../styles/images/logo1.png'
import photography from '../styles/images/photography.svg'
import graphic from '../styles/images/graphic.svg'
import art from '../styles/images/art.svg'
import develope from '../styles/images/develope.svg'
import Navbar from './Navbar'


function Home() {
  return (
    <div className="App">
    
    <Navbar />

    <section id="main">
        <div class="main container">
            <div class="content">
                <h1>Get our best services with </h1>
                <h1>Professionals </h1>
                <a href="./discover.html" type="button" class="ctn"> Photographers</a>          
                <a href="./discover.html" type="button" class="ctn"> Developers</a>          
                <a href="./discover.html" type="button" class="ctn"> Graphic Designers</a>          
                <a href="./discover.html" type="button" class="ctn"> Illustrators</a>          
            </div>
         </div>
    </section>

    <section id="services">
        <div class="services container">
            <div class="service-top">
                <h1 class="heading">Services</h1>
                <p>Lorem ipsum dolor sit amet, vim id essent definitiones. 
                    Vim in dico commune mediocrem. Tantas pertinax et pri Apeirian platonem est ei, nam dico idque cu. 
                    Eu graeci vocent epicurei his. Eu quis expetendis has, ea dico causae hendrerit duo.
                </p>
            </div>
            <div class="service-bot">
                <div class="service-icons">
                    <a href="/discover"><img id="icon1" src={photography}/></a>
                    <h3>Photography</h3>
  
                 </div>
                <div class="service-icons">
                    <a href="./discover.html"><img id="icon" src={graphic} /></a>
                    <h3>Graphic Desgin</h3>

                </div>
            </div>
            <div class="service-bot">
                <div class="service-icons">
                    <a href="./discover.html"><img id="icon" src={art} /></a>
                    <h3>Art & Illustrations</h3>
  
                 </div>
                <div class="service-icons">
                    <a href="./discover.html"><img id="icon1" src={develope} /></a>
                    <h3>Software Developements</h3>

                </div>
            </div>
        </div>
    </section>

    <footer>
        <div id="foot">
            <div class="foot-items">
                <div class="foot-sections links">
                    <h3>USERVICE</h3>
                    <br />
                    <ul>  
                        <a href="#" >Discover</a>
                        <a href="#" >Jobs</a>
                        <a href="#" >Blogs</a>
                        <a href="#" >Applications</a>
                        <a href="#" >Professionals</a>
   
                    </ul>
                </div>
                <div class="foot-sections links">
                    <h3>Services</h3>
                    <br />
                    <ul>  
                        <a href="#" >Photography </a>
                        <a href="#" >Graphic Desgin</a>
                        <a href="#" >Art & Illustrations </a>
                        <a href="#" >Web Developement</a>
                        <a href="#" >App Developement</a>
                    </ul>
                </div>
                <div class="foot-sections links">
                    <h3>Support</h3>
                    <br />
                    <ul>  
                        <a href="#" >Join Us! </a>
                        <a href="#" >Login</a>
                        <a href="#" >Contact Us</a>
                        <a href="#" >Help</a>
                        <a href="#" >Privacy Policy</a>
                    </ul>
                </div>

                <div class="foot-sections links">
                    <h3>Contact Us</h3>
                    <br />
                        <form action="#" method="POST">
                            <input type="email" name="Email" class="text-input contacts-input" placeholder="*Email" />
                            <textarea name="message" class="text-input contacts-message" placeholder="type here...."></textarea>
                            <button type="submit" class="ctn"> Send</button>
                        </form>
                </div>
            </div>

        </div>
    </footer>
    <div class="foot">
        <p>All  &copy; USERVICE  |  Designed & Developed by Vishal Rathore, Usman Hussain & Hussain Zohair</p>
        
    </div>
      
    </div>
  );
}

export default Home