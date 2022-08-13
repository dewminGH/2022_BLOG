import React,{Component} from "react";
import { connect } from "react-redux";

class Header extends Component {

    

    render(){
        const {user}=this.props;
        if(!user)
        return null
      
        return(<div className="ui header">
          {user.name}
        </div>)
    }
}
const mapStateToProps=(state,ownProps)=>{
    
    return {user :state.users.find(user=>user.id===ownProps.userId)}
}
export default connect(mapStateToProps,)(Header);