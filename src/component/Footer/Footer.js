import React from 'react'
import './Footer.scss'
import fit16 from '../../All-images/fit16.png'
import fit17 from '../../All-images/fit17.png'
import fit18 from '../../All-images/fit18.png'
import fit15 from '../../All-images/fit15.png'
function Footer() {
    return (
        <div>
            <footer id="footer">
                <div class="footer">
                    <div class="footer_content">
                        <h5>FITNE<span>SS</span></h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quasi optio voluptates vero quos
                            rem deserunt iste maiores impedit in tempora, modi delectus, ipsam ni.</p>
                        <div class="socialicon">
                            <span> follo us:</span><i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-brands fa-google"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                        <div class="subscribe_btn"> <input type="text" placeholder="your email" />
                            <button class="subbtn">subscribe</button>
                        </div>
                    </div>
                </div>

                <div class="footer" id="blog">
                    <div class="footer-content2">
                        <h5>BLOG</h5>
                        <div class="box1">
                            <img src={fit16} alt="wallpeper" loading="lazy" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia corporis unde quisquam
                                dignissimos minima! Unde eligendi consequuntur molestiae.</p>
                        </div>
                        <div class="box1">
                            <img src={fit17} alt="wallpeper" loading="lazy" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident expedita hic dicta accusamus

                                sint. Tempore dicta aliquam facere!</p>
                        </div>
                        <div class="box1">
                            <img src={fit18} alt="wallpeper" loading="lazy" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sunt dicta quibusdam

                                Amet, quod.</p>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="content3">
                        <h5>INSTAGRAM</h5>
                        <img src={fit15} alt="wallpaper" loading="lazy" /><br />
                        <a href="#">view more photos</a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
