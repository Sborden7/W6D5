import React from 'react';

class Tab extends React.Component {

  constructor(props) {
    console.log("tabs r workng");

    super(props);
    this.state = {
      selectedTab: 0
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
      this.setState({selectedTab: num});
  }


  render() {
    return (
      <span>
        <header>
          <ul className="tabs">
            <li className="one"><h1>Tab1</h1></li>
            <li className="two"><h1>Tab2</h1></li>
            <li className="three"><h1>ThirdTab</h1></li>
          </ul>
          <article></article>
        </header>
      </span>
    );
  }

}

export default Tab;
