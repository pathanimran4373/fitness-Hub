import React from 'react'
import './Contact.scss'
import newfit11 from '../../All-images/newfit11.jpg'
import fit10 from '../../All-images/fit10.jpg'
import Adress from '../../component/Map-contact/Map'

function Contact() {
    return (
        <div>
            <section class="section5_6">
                <div class="sec">
                    <div class="gmi"><img className='gmi_img' src={newfit11} alt="trainer" loading='lazy' /></div>
                    <div class="gmi"><img src={fit10} alt="trainer" loading='lazy' /></div>
                </div>
                <div class="secText">
                    <div class="one one-secText">
                        <h5>tru for free</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint sed perspiciatis optio obcaecati
                            possimus fugiat, laboriosam voluptas voluptatem itaque! At dignissimos illo aspernatur qui quos
                            itaque ea repudiandae nam libero!</p>
                        <h5>FREE 5 DAY PASS</h5>
                        <button class="btn"><a href="#">GET IN TOUCH</a></button>
                    </div>
                    <div class="one">
                        <h5>call us and true</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus alias magni asperiores perferendis
                            earum illum deleniti voluptates deserunt. Minus quam veniam, ratione magnam ipsum itaque ipsam
                            fugit
                            facilis dicta dignissimos.
                        </p>
                        <h5>9673155895</h5>
                        <button class="btn">GET IN TOUCH</button>
                    </div>
                </div>
            </section>
            <Adress/>

        </div>
    )
}

export default Contact
