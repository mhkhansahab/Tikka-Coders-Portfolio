import { Component } from "react";
import '../Styles/nav.css';
import Grid from '@material-ui/core/Grid';

class Nav extends Component{
  render(){
    return(
      <div className="navbar">
          <Grid container justify = "flex-end" className="nav-item">
              <Grid item xs={12}>
                <h2 className = "title">Tikka Coders</h2>
              </Grid> 
          </Grid>
      </div>
    );
  }
}

export default Nav;
