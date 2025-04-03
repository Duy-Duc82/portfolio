import myCV from "assets/CV.pdf";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <div className="arlo_tm_section relative" id="about">
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                >
                  <div className="image layer" data-depth="0.1">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner" data-img-url="img/about/1.jpg"></div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>
                    I'm Dương Đức Duy and{" "}
                    <span className="arlo_tm_animation_text_word">
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          "Student",
                          2000, // wait 1s
                          "unemployment :(",
                          2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: "1em", display: "inline-block" }}
                        repeat={Infinity}
                      />
                    </span>
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    Hi! My name is <strong>Dương Đức Duy</strong>. I am a
                    student, and I'm very passionate and dedicated to my
                    learning. Although I don't have professional experience yet,
                    I am constantly building my skills and knowledge to prepare
                    for future opportunities.
                    <br></br>I enjoy every step of the learning process, from
                    exploring new ideas and collaborating with others to
                    applying what I've learned in practice. What motivates me
                    most is the excitement of growth and the potential to
                    contribute meaningfully in the future.
                  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Birthday:</label>25.12.2004
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Age:</label> 20
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Study:</label> HaNoi university of science and
                        technology (HUST)
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>major:</label> computer technology
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>Bachelor's degree :</label> 2027(expected)
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>Mail:</label>{" "}
                        <a href="duongducduy825@gmail.com">
                          duongducduy825&#64;gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Phone:</label> <a href="#">0344088578</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Facebook:</label>{" "}
                        <a href="https://www.facebook.com/duc.duy.080205/">
                          Đức Duy
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={myCV} download>
                        <span>Download CV</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;