import React from 'react'
import './Map.scss'
function Adress() {
    return (
        <div>
            <address>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29772.846390093095!2d79.0650018!3d21.1282766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sin!4v1678714936616!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </address>

            <div className='container'>
                <div className='contact-form'>
                    <form action="https://formspree.io/f/mvonqbvv" method='POST'>
                        <input type="text" name="username"
                            placeholder='name'
                            autoComplete="off"
                            required />
                        <input type="email" name="email"
                            placeholder='email'
                            autoComplete="off"
                            required />

                        <textarea placeholder='write your queries....' name="message" autoComplete='off' required>

                        </textarea>
                        
                            <input className='btn' type="submit" value="send" />
                        

                    </form>

                </div>
            </div>


        </div>
    )
}

export default Adress
