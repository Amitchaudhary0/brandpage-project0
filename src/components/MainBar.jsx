import React from 'react'
import "../components/Main.css"

export default function MainBar() {
    return (
        <div>
            <main>
                <section className='MainText'>
                    <h1>your feet deserve the best</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore, animi dolor minus incidunt ipsa a eaque, libero cumque illo illum perspiciatis molestias reprehenderit. Ullam voluptates ut eius assumenda fuga fugit quas beatae modi.</p>
                    <div className="buttons">
                        <button>Shop Now</button>
                        <button>Category</button>
                    </div>
                    <div>
                        <div>Also Available On</div>
                        <div className="imgs">
                            <a href="https://www.flipkart.com/nike-air-jordan-2-retro-sneakers-women/p/itm316818bdc54fb?pid=SHOH3YBG4AHSH9BK&lid=LSTSHOH3YBG4AHSH9BKT7D7KJ&marketplace=FLIPKART&q=Air+Jordan+1+Mid+SE&store=osp%2Fcil%2Fe1f&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=9ee95d46-4af1-424e-a64c-445a0ffa0e3a.SHOH3YBG4AHSH9BK.SEARCH&ppt=sp&ppn=sp&ssid=7bixdyham7cv6ups1731691014344&qH=a44979b15a1be825" target='_blank'><img src="../public/flipkart-icon.png" alt="Flipkart" /></a>
                            <a href="https://www.amazon.in/AIR-JORDAN-Panda-Elephant-FB9911-001/dp/B0CKVCSQN1?crid=12BESFVJ6Y5A5&dib=eyJ2IjoiMSJ9.c3H1a867np4WRESjI__oULMfaZYn3BfYWgL5YNl1RaVo5RnKhAzUeYYLgqjKnQDqtbZzMA3s8T9OD1UnmzhnT2BsjQb15vXkIhAw4fDcCCHfDSKAe6JtTyoYzFfBZV8Tc7Ifr_BHoXPJtQQFJFKsE-yiDKxAVQsvyPs79Prb4V3FeRx_GH-cRsHQ_snWyDvPG1mJXXdCT4sEAFp_smxSOGz77nPRlaFSi2941Pk8WdSJoC_wQcd42Jn-gGs7r2hknmFiIOmzIEqr00d0FV6fOCbioDzhMp-YJgSPpLAZp0A.tKTyPRcAm6-iPQvEuLrR-7t72p55hzr3CavfqPJPGKI&dib_tag=se&keywords=Air%2BJordan%2B1%2BMid%2BSE&qid=1731691112&sprefix=air%2Bjordan%2B1%2Bmid%2Bse%2Caps%2C551&sr=8-1&th=1&psc=1" target='_blank'><img src="../public/amazon-icon.png" alt="Amazon" /></a>
                        </div>
                    </div>
                </section>
                <section className='MainImage'>
                    <img src="../public/mainImg.png" alt="Shoe Image" width={450} />
                </section>
            </main>
        </div>
    )
}
