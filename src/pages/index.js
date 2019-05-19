import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './home.module.scss'

import logo from '../images/nannou_logo_alpha.png' // Tell Webpack this JS file uses this image
import vulkan_icon from '../images/vulkan_symbol.png'
import led_icon from '../images/leds_symbol.png'
import lasers_icon from '../images/laser_symbol.png'
import audio_icon from '../images/speaker_symbol.png'
import gui_icon from '../images/gui_symbol.png'

export const query = graphql`
  query {
    file(relativePath: { eq: "images/nannou_logo_alpha.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({data}, props) => {
    return (
        //<Layout>
            //<SEO title="Home" keywords={["Nannou", "About", "Education", "Presentations", "Performances", "Installations"]}/>
            
            <div className={styles.grid_container}>

                <div className={styles.nested_row1}>
                    <div className={styles.header}>
                        <Header />
                            {props.children}
                    </div>
                    <div className={styles.nannou_logo}>
                      <img src={logo} alt="nannou_logo" /> 
                    </div>
                    <div className={styles.banner_description}>
                        <h4>An open-source creative-coding framework for Rust</h4>
                    </div>
                </div>


                <div className={styles.nested_row2}>
                    <div className={styles.icons}> 
                      <div> 
                        <img src={vulkan_icon} alt="vulkan_icon" /> 
                        <div className={styles.icons_text}>
                          <p><b>Graphics</b></p>
                        </div>
                      </div>
                      <div> 
                        <img src={led_icon} alt="led_icon" /> 
                        <div className={styles.icons_text}>
                          <p><b>LEDs</b></p>
                        </div>
                      </div>
                      <div> 
                        <img src={lasers_icon} alt="lasers_icon" />
                        <div className={styles.icons_text}>
                          <p><b>Lasers</b></p>
                        </div>
                      </div>
                      <div> 
                        <img src={audio_icon} alt="audio_icon" /> 
                        <div className={styles.icons_text}>
                          <p><b>Audio</b></p>
                        </div>
                      </div>
                      <div> 
                        <img src={gui_icon} alt="gui_icon" /> 
                        <div className={styles.icons_text}>
                          <p><b>GUI</b></p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.description}> 
                        <p>Nannou is a library that aims to make it easy for artists to express themselves with <b>simple, fast, reliable</b> code.</p>
                    </div>
                </div>
                <div>Box 3</div>
                <div>Box 4</div>
                <div>Box 5</div>
                <div>Box 6</div>
                <div>Box 7</div>
                <div>Box 8</div>
                <div>Box 9</div>
                <div>Box 10</div>
                <div>Box 11</div>

            </div>

            

            // 

            // <p>Nannou is a library that aims to make it easy for artists to express themselves with <b>simple, fast, reliable</b> code.</p>
            
            // <div className={styles.card}>
            //     <h4>Batteries Included</h4>
            //     <p>One of the beauties of being a creative coder is that we have the potential to create works in a wide range of domains. Nannou aims to give equal priority to a full suite of creative I/O including graphics, multi-windowing, audio, lasers, lighting and more.</p>
            // </div>

            // <div className={styles.card}>
            //     <h4>A fast, modern language</h4>
            //     <p>When experimenting with the cutting edge in audiovisual processing high performance becomes a necessity. When performing live or creating long-running installations reliability becomes equally important. Rust ticks these boxes and more.</p>
            // </div>

            // <div className={styles.card}>
            //     <h4>Open Source & Liberally Licensed</h4>
            //     <p>Access to these technologies is often expensive and locked behind proprietary systems. We believe in democratising this space by open sourcing Nannou for everyone to use.</p>
            // </div>
       // </Layout>
    )
}


export default IndexPage