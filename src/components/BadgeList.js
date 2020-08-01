import React from 'react';

class BadgeList extends React.Component{
    render() {
        return (
            this.props.badges.map((badge)=>{
                return(
                    <li key={badge.id}>
                       {badge.firstName} {badge.lastName}
                    </li>
                );
            })
        );
    }
}

export default BadgeList;