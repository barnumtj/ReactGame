import React from 'react';
import "./card.css";
import '../../cards.json'

const styles = {
	card: {
        maxWidth: 225,
        maxHeight: 225
	}
}

class FriendCard extends React.Component {
    render() {
    return (
    <div className="cardContainer">  
            <img className='card updateCSS'  onClick={() => this.props.handleClick(this.props.id)}  id={this.props.id} style={styles.card} alt={this.props.name} src={this.props.image}/>       
    </div>
    )
}
}

export default FriendCard;