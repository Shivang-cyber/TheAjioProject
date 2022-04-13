function navbar() {
  return `
  <nav id="pri_nav">
        <nav id="sec_nav">
          <div>
            <img
              src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
              alt=""
              id="main_lnk"
              onClick="https://ajio-re.herokuapp.com/"
            />
          </div>
          <div>
          <div id="top_bl_nav">
          <div id="backdrop" onClick="cl()"></div>
          <div id="bd">
          <section id="sec_a">
          <i><button onClick="cl()" class="x"><i class="fa-solid fa-x"></i></button></i>
          <h1>Welcome to AJIO</h1>
          <h3>Join / Sign In using</h3>
          <div><button onClick="cl()" id="fac"><i class="fa-brands fa-facebook-square"></i> FACEBOOK</button><button onClick="gg()" id="goo"><i class="fa-brands fa-google"></i> GOOGLE</button></div>
          <p>or</p>
          <form action="#" id="c_e">
              <h3>Enter Email*</h3>
              <input id="emai" required />
              <h3 id="pa">Enter Password*</h3>
              <input id="passw" />
              <input id="sub1" type="submit" value="SUBMIT">
          </form>
          <form action="#" id="c_f">
            <h3>Enter Email*</h3>
            <input id="emaie" required />
            <h3 id="pas">Enter Password*</h3>
            <input id="passwo" />
            <input id="sub2" type="submit" value="SUBMIT">
        </form>
          <h4 style="width:100%">By Signing In, I agree to <p> Terms and Conditions.</p></h4>
          </section>
          <section id="sec_b">
              <i><button onClick="cl()" class="x"><i class="fa-solid fa-x"></i></button></i>
              <p></p>
              <form action="#" id="c_g">
                <h3>Enter Name*</h3>
                <input id="namae"  class="in" required/>
                <h3>Enter Mobile Number*</h3>
                <input id="bango"  class="in" required/>
                <h3>Enter PinCode*</h3>
                <input  id="addre1" class="in" required/>
                <h3>Enter Address (Line - 1)*</h3>
                <input  id="addre2" class="in" required/>
                <h3>Enter State*</h3>
                <input  id="addre3" class="in" required/>
                <h3>Enter Password*</h3>
                <input id="pass"  class="in" required/>
                <input type="submit" value="SUBMIT">
              </form>
              </section>
          </div>
            <div id="sign_up">
            <a href="#" style="color: rgb(44, 65, 82)" id="sign_in_in" onClick="signUp()">Sign In / Join AJIO</a>
            </div>
            <div id="signed_up">
            <a href="#" id="us_na"></a>
            <a href="#" onClick="signOut()" style="color:#2c4152"> Sign Out</a>
            </div>
            <a href="#" style="color: rgb(44, 65, 82)">Customer Care</a>
            <a href="#" id="luxe">Visit AJIOLUXE</a>
          </div>
            <div id="bot_bl_nav">
              <div>
                <div class="drop_dow">
                  <button class="aa">MEN</button>
                  <div class="drop_menu">
                    <div class="drop_top"><div>Shop By:</div>
                    <div>CATEGORIES</div>
                    <div>BRANDS</div>
                    </div>
                    <div class="drop_bot">
                      <div>
                      <h1>CLOTHING</h1>
                      <h4>  <a href="/catologue?type=MSHOES">Shoes</a></h4>
                      <h4>  <a href="/catologue?type=MKURTAS">Kurtas</a></h4>

                      <h1>FOOTWEAR & ACCESSORIES</h1>
                      <h1>INTERNATIONAL BRANDS</h1>
                      <h1>WINTERWEAR</h1>
                      <h1>NIGHT & LOUNGEWEAR</h1>
                      <h1>GROOMING</h1>
                      <h1>ETHNIC WEAR</h1>
                     <h4> <a href="/catologue?type=MNEHRU">Nehru Jackets</a></h4>

                      </div>
                      
                      <div>
                      <h1>WESTERN WEAR</h1>
                     <h4> <a href="/catologue?type=MJACKET">Jackets</a></h4>
                      <h4>  <a href="/catologue?type=MJEANS">Jeans</a></h4>
                      <h4>  <a href="/catologue?type=MSHIRT">Shirt</a></h4>
                      <h4>  <a href="/catologue?type=MSHORTS">Shorts</a></h4>
                      <h4>  <a href="/catologue?type=MSWEAT">Sweatshirts</a></h4>
                      <h4>  <a href="/catologue?type=MTROU">Trousers & Chinos</a></h4>
                      <h1>FOOTWEAR</h1>
                      </div>
                      <div>
                      <h1>ACCESSORIES</h1>
                      <h1>PRECIOUS JWELLERY</h1>
                      <h1>INNERWEAR</h1>
                      </div>
                      <div>
                      <h1>FEATURED</h1>
                      <h1>#AJIORECOMMENDS</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop_dow">
                  <button class="aa">WOMEN</button>
                  <div class="drop_menu">
                    <div class="drop_top"><div>Shop By:</div>
                    <div>CATEGORIES</div>
                    <div>BRANDS</div>
                    </div>
                    <div class="drop_bot">
                      <div>
                      <h1>CLOTHING</h1>
                      <h1>FOOTWEAR & ACCESSORIES</h1>
                      <h1>ALL THAT's NEW</h1>
                      <h1>WINTERWEAR</h1>
                      <h1>INTERNATIONAL BRANDS</h1>
                      <h1>NIGHT & LOUNGEWEAR</h1>
                      <h1>BEAUTY</h1>
                      <h1>FUSION WEAR</h1>
                      </div>
                      
                      <div>
                      <h1>ETHNIC WEAR</h1>
                      <h1>JEWELLERY</h1>
                      </div>
                      <div>
                      <h1>WESTERN WEAR</h1>
                      <h1>LINGERIE & INNERWEAR</h1>
                      </div>
                      <div>
                      <h1>FOOTWEAR</h1>
                      <h1>ACCESSORIES</h1>
                      <h1>FEATURED</h1>
                      <h1>#AJIORECOMMENDS</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop_dow">
                  <button class="aa">KIDS</button>
                  <div class="drop_menu">
                    <div class="drop_top"><div>Shop By:</div>
                    <div>CATEGORIES</div>
                    <div>BRANDS</div>
                    </div>
                    <div class="drop_bot">
                      <div>
                      <h1>NEW IN: CLOTHING</h1>
                      <h1>NEW IN: FOOTWEAR & ACCS</h1>
                      <h1>INTERNATIONAL & SLEEPWARE</h1>
                      <h1>BOYS</h1>
                      <h1>SHOP BY AGE</h1>
                      </div>
                      
                      <div>
                      <h1>FEATURED</h1>
                      <h1>GIRLS</h1>
                      <h1>SHOP BY AGE</h1>
                      <h1>FEATURED</h1>
                      </div>
                      <div>
                      <h1>BABY</h1>
                      <h1>TOYS AND BABYCARE</h1>
                      <h1>COLLECTIONS</h1>
                      <h1>AJIO EXCLUSIVES</h1>
                      <h1>FOOTWEAR & ACCESSORIES</h1>
                      </div>
                      <div>
                      <h1>FEATURED BRANDS</h1>
                      <h1>#AJIORECOMMENDS</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop_dow">
                  <button class="aa">INDIE</button>
                  <div class="drop_menu">
                    <div class="drop_top"><div>Shop By:</div>
                    <div>CATEGORIES</div>
                    <div>BRANDS</div>
                    </div>
                    <div class="drop_bot">
                      <div>
                      <h1>NEW IN: CLOTHING</h1>
                      <h1>NEW IN: SAREES</h1>
                      <h1>NEW IN: JEWELLERY</h1>
                      <h1>NEW IN: FOOTWEAR & ACCESSORIES</h1>
                      <h1>NEW IN: HOME </h1>
                      <h1>CLOTHING</h1>
                      <h1>FOOTWEAR</h1>
                      </div>
                      
                      <div>
                      <h1>FASHION JEWELLERY</h1>
                      <h1>SILVER JEWELLERY</h1>
                      <h1>ACCESSORIES</h1>
                      <h1>MENSWEAR</h1>
                      <h1>HOME</h1>
                      <h1>WINTER CARNIVAL</h1>
                      </div>
                      <div>
                      <h1>REGIONAL SPECIALITIES</h1>
                      </div>
                      <div>
                      <h1>FEATURED BRANDS</h1>
                      <h1>WEDDING STORE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drop_dow">
                  <button class="aa">HOME & KITCHEN</button>
                  <div class="drop_menu">
                    <div class="drop_top"><div>Shop By:</div>
                    <div>CATEGORIES</div>
                    <div>BRANDS</div>
                    </div>
                    <div class="drop_bot">
                      <div>
                      <h1>CLOTHING</h1>
                      <h1>FOOTWEAR & ACCESSORIES</h1>
                      <h1>INTERNATIONAL BRANDS</h1>
                      <h1>WINDTERWEAR</h1>
                      <h1>NIGHT & LOUNGEWEAR</h1>
                      <h1>GROOMING</h1>
                      <h1>ETHNIC WEAR</h1>
                      </div>
                      
                      <div>
                      <h1>WESTERN WEAR</h1>
                      <h1>FOOTWEAR</h1>
                      </div>
                      <div>
                      <h1>ACCESSORIES</h1>
                      <h1>PRECIOUS JWELLERY</h1>
                      <h1>INNERWEAR</h1>
                      </div>
                      <div>
                      <h1>FEATURED</h1>
                      <h1>#AJIORECOMMENDS</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sub_search">
                <!-- placeholder="  Search AJIO                                           &#xF002" -->
                <input
                  id="in-ser"
                  name="searchVal"
                  type="text"
                  style="font-family: Arial, FontAwesome"
                />
                <a href="/closet"><img src="/view/stuff/images/2.png" alt="" /></a>
                <a href="/cart"><img src="/view/stuff/images/1.png" alt="" /></a>
              </div>
              </div>
              </div>
              </nav>
              <nav id="ter_nav"></nav>
              </nav>
 `
}
export default navbar
