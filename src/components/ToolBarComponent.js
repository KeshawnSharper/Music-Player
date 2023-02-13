import React from "react";
import ToolBarView from "../views/ToolBarView";
import { connect } from "react-redux";
import { getMusic } from "../redux/reducers/actions/actions";
const ToolbarComponent = ({songs,collection}) => {

return (
    <>
    <ToolBarView songs={songs["library"]} collection={collection}/>
    </>
    
)
}
function mapStateToProps(state) {
    return {
    collection:state.collection,
    songs: state.songs,
    
    };
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      getMusic: () => {
        dispatch(getMusic())
      }
  }
  }

  
  export default connect(mapStateToProps, mapDispatchToProps)(ToolbarComponent);

