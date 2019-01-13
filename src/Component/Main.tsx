import * as React from 'react'
import { Container } from 'reactstrap'
import './Main.css'

interface ExperienceProps {
  duration: string
  title: string
  company: string
  description: string
}
class Experience extends React.Component<ExperienceProps, {}> {
  render() {
    let { duration, title, company, description } = this.props

    return (
      <div>
        <h5><strong>{title}</strong></h5>
        <div>{company}</div>
        <div className="black-light">{duration}</div>
        <div>-----</div>
      </div>
    )
  }
}

interface SkillProps {
  header: string
  description: string
}

class Skill extends React.Component<SkillProps, {}> {
  render() {
    let { header, description } = this.props

    return (
      <div>
        <h5>{header}</h5>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div>-----</div>
      </div>
    )
  }
}

interface SimpleProps {
  header: string
  description: string
}

class Simple extends React.Component<SimpleProps, {}> {
  render() {
    let { header, description } = this.props

    return (
      <div>
        <h1>{header}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    )
  }
}

export default class Main extends React.Component {
  render() {
    return (
      <Container className="App-body">
        <section className="App-section" data-aos="fade-up" data-aos-duration="4000">
          <Simple
            header={'Summary'}
            description={`
              <div>
                <p>
                I am a young man, who desires to do more research and study to be a geek in Information Technology field. And I am willing to face difficulties and try my best to overcome all the obstacles.
                <br/>
                "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine." Jack Ma
                </p>
                <b>Highlights</b>
                <br />
                <ul>
                  <li>Have a good logical thinking and problem-solving skill.</li>
                  <li>Able to write code efficiently that can be maintained, scale and reused easily.</li>
                  <li>Proficient in analysis and design algorithms, data structures, and design patterns.</li>
                  <li>I am passionate about creating awesome things that make people's lives better.</li>
                  <li>Passionated and excited about technology and platforms such as AI and Blockchain.</li>
                </ul>
              </div>
            `}
          />
        </section>
        <hr/>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <Simple
            header={'Education'}
            description={`
              <div>
                <p>
                University of Information Technology – VNU HCMC <br/>
                Bachelor of Science in Information Technology

                </p>
                <div>GPA: 7.72/10 (Rank: 1/54) - Thesis score: 9.2/10 </div>
                <div>Thesis: Object counting in static images using Deep Learning</div>
              </div>
            `}
          />
        </section>
        <hr/>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <Simple
            header={'Award'}
            description={`
              <div>
                <p>UIT Scholarship - 2015, 2016, 2017</p>
                <p>Consolation Prize in National Olympic Contest for IT Student - 2014</p>
                <p>First Prize of UIT-ACM - 2nd/2014, 4th/2015</p>
                <p>“Sinh viên 5 tốt tiêu biểu” by the University of Information Technology in 2016</p>
                <p>Second Prize of UIT-ACM 6th - 2016</p>
                <p>Third Prize in National Olympic Contest for IT Students - 2016</p>
                <p>Third Prize of UIT-ACM 7th - 2017</p>
              </div>
            `}
          />
        </section>
        <hr/>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <h2>Experience</h2>
          <Experience
            duration={'Jun 2016 – July 2017'}
            title={'Student'}
            company={'MMLAP - UIT'}
            description={`Research about machine learning, especially in using state-of-the-art Deep Learning methods for objects counting task.`}
          />
          <Experience
            duration={'Jun 2017 - Jun 2018'}
            title={'Software Developer'}
            company={'Planet'}
            description={`...`}
          />
          <Experience
            duration={'Jun 2018 - present'}
            title={'Software Developer'}
            company={'Zalo - VNG Corporation'}
            description={`....`}
          />
        </section>
        <hr/>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <h2>Skills</h2>
          
          <div>
            <Skill
              header={'Algorithms skill, Solving Problems, Competitive Programming'}
              description={``}
            />
            
            <Skill
              header={'Programming language'}
              description={`
              <p>
              C/C++, Java(proficient), Python, Qt QML, PHP, HMTL, Javascript, CSS, SQL (prior experience).
              </p>
            `}
            />
            <Skill
              header={'OS/System'}
              description={`
              <p>
              Linux, Windows, macOS, Nginx, Kamailio.
              </p>
            `}
            />
            <Skill
              header={'Database'}
              description={`
              <p>
              MySql, Sql Server, Sqlite, Kyoto Cabinet (prior experience).
              </p>
            `}
            />
            <Skill
              header={'Machine learning (prior experience)'}
              description={``}
            />
            <Skill
              header={'Version control'}
              description={`
              <p>
                Master git: GitHub, GitLab, SVN.
              </p>
            `}
            />
          </div>
        </section>
        <hr/>
        <section className="App-section" data-aos="fade-up" data-aos-duration="4000">
          <Simple
            header={'Certification'}
            description={`
              <div>
                <p>The 2013 ACM-ICPC Programming Contest Asia Danang Regional</p>
                <p>The 2014 ACM-ICPC Programming Contest Vietnam National Round</p>
                <p>The 2016 ACM-ICPC Programming Contest Asia Nhatrang Regional</p>
              </div>
            `}
          />
        </section>
        <hr/>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <Simple
            header={'Interests'}
            description={`
              <div>
                <p>Algorithm</p>
                <p>Read books</p>
                <p>Travel</p>
                <p>Football</p>
              </div>
            `}
          />
        </section>
        <hr/>
        <section className="App-section" data-aos="fade-right" data-aos-duration="4000">
          <Simple
            header={'Social'}
            description={`
              <div>
                <a href="https://www.facebook.com/ducctqb" target="_blank">
                    <i class="fab fa-facebook-square fa-lg w3-hover-opacity">facebook</i>
                </a>
                <br/>
                <a href="https://medium.com/@ntduc95" target="_blank">
                    <i class="fab fa-medium fa-lg w3-hover-opacity">medium</i>
                </a>
                <br/>
                <a href="https://twitter.com/ntduc95" target="_blank">
                    <i class="fab fa-twitter-square fa-lg w3-hover-opacity">twitter</i>
                </a>
                <br/>
                <a href="https://www.linkedin.com/in/nguyen-trung-duc-49a3a0135/" target="_blank">
                    <i class="fab fa-linkedin fa-lg w3-hover-opacity">linkedin</i>    
                </a>
                <br/>
                <a href="https://github.com/nguyentrungduc08" target="_blank">
                    <i class="fab fa-github-square fa-lg w3-hover-opacity">github</i>
                </a>
                <br/>
                <a href="https://www.goodreads.com/user/show/37672803-duc-nguyen" target="_blank">
                    <i class="fab fa-goodreads fa-lg w3-hover-opacity">goodreads</i>
                </a>
              </div>
            `}
          />
        </section>
        <hr/>
        <section className="App-section" data-aos="fade-up" data-aos-duration="4000">
          <Simple
            header={'Contact'}
            description={`
              <div>
                <p>
                  Email: <a href="mailto: nguyentrungduc08@gmail.com">nguyentrungduc08@gmail.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+84966204011">(+84) 966 204 011</a>
                </p>
              </div>
            `}
          />
        </section>
      </Container>
    )
  }
}
