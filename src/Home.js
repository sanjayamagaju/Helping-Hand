import React, { Component } from 'react';
import axios from 'axios';
import Post from './blocks/Post';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/articles?_limit=4')
            .then(res => {
                this.setState({
                    articles: res.data
                })
            })
    }

    render() {
        return (
            <div>
            <div className="container">
            <div className="row">
                <div className="column">
                    <h1>S.N</h1>
                </div>
                <div className="column">
                    <h1>Poeple</h1>
                </div>
                <div className="column">
                    <h1>Medical report</h1>
                </div>
                <div className="column">
                    <h1>Donated amount</h1>
                </div>
                    </div>
                <div className="row">
                    <div className="column">
                        <h1>1</h1>
                    </div>
                    <div className="column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN5-gZEeyHLt2K7-2znxX0yKoLHShfU88hTWPwNBwklM5YqGb&s" alt="Sarita shah" height="600px" width="400px">
                    </img>   <h3>Sarita Shah</h3>
                    </div>
                    <div className="column">
                        <img src="https://i.pinimg.com/originals/7b/d1/73/7bd1734095b809ae4307524112f869c3.png" alt="Medical report" height="600px" width="400px">
                        </img> </div>
                    <div className="column">
                        1,00,000/-
                    </div>
                </div>
            <div className="row">
                    <div className="column">
                        <h1>2</h1>
                    </div>
                    <div className="column">
                    <img src="https://www.thesun.co.uk/wp-content/uploads/2019/09/NINTCHDBPICT000524235875.jpg?strip=all&w=935" alt="Shristi Nepali" height="600px" width="400px">
                    </img>   <h3>Shristi Nepali</h3>
                    </div>
                    <div className="column">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa8o1Z7ubm_beNCeZHb8QWgju0NGsWtitMlFnd0nu7tCJQx8A&s" alt="Medical report" height="600px" width="400px">
                        </img> </div>
                    <div className="column">
                        2,00,000/-
                    </div>
                </div>
                <div className="row">
                    <div class="column">
                        <h1>3</h1>
                    </div>
                    <div className="column">
                    <img src="https://24celebs.com/public/media/235x307/celebrity/2018/03/14/uneqnsf8hqxk-bradley-cooper.jpg" alt="Hari krishna Budhathoki" height="600px" width="400px">
                    </img>  <h3>Hari krishna Budhathoki</h3>
                    </div>
                    <div className="column">
                        <img src="https://i.pinimg.com/originals/7b/d1/73/7bd1734095b809ae4307524112f869c3.png" alt="Medical report" height="600px" width="400px">
                        </img> </div>
                    <div className="column">
                        50,000/-
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h1>4</h1>
                    </div>
                    <div className="column">
                    <img src="https://i.pinimg.com/originals/32/39/98/323998dd78edce18ec2266fc2edd7fcc.jpg" alt="Ram krishna Dhakal" height="600px" width="400px">
                    </img> <h3>Ram Krishna Dhakal</h3>
                    </div>
                    <div className="column">
                        <img src="https://images.template.net/wp-content/uploads/2017/04/Doctors-Medical-Report.jpg" alt="Medical report" height="600px" width="400px">
                        </img></div>
                    <div className="column">
                        4,00,000/-
                    </div>
                </div>
                <div className="row">
                    <div class="column">
                        <h1>5</h1>
                    </div>
                    <div className="column">
                    <img src="https://i.pinimg.com/originals/13/b9/13/13b913092e61ef3ec29432668b848975.jpg" alt="Kedar Chhetri" height="600px" width="400px">
                       </img> <h3>Kedar Chhetri</h3>
                    </div>
                    <div className="column">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttVUljwYiizqiN-wt80YxOiH_tC5hMFr0U48G-F4u1xCMrSO5&s" alt="Medical report" height="600px" width="400px">
                   </img> </div>
                    <div className="column">
                        3,00,000/-
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h1>6</h1>
                    </div>
                    <div className="column">
                    <img src="https://mymodernmet.com/wp/wp-content/uploads/archive/zvY94dFUiqKwu1PMVsw5_thatnordicguyredo.jpg" alt="Yojana Lamsal" height="600px" width="400px">
                    </img> <h3>Yojana Lamsal</h3>
                    </div>
                    <div className="column">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7I1t69Fn_WUxn7S4S9CXjhpEdyCAmOcm2VKio9Jjylc2dDF5N&s" alt="Medical report" height="600px" width="400px">
                        </img></div>
                    <div className="column">
                        80,000/-
                    </div>
                </div>
                </div>
                
                <footer>
                    Copyright &copy;2019
                </footer>
       
      </div>
        )
        
    }
}

export default Home;