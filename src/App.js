import logo from './logo.svg';
import './App.css';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
function App() {
  let name = 'Hassan Elsheikh';
  let email="hassanta2004@gmail.com";
  let deadline = "8 jule 12P.M.";
  let price="5";
  let des =" The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!"
  let phone = '05996692013';
  let location = 'Al-Nafaq ST'
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'center'}}>
      <NotificationsActiveIcon style={{color:'gold',display:'flex',justifyContent:'center'}}/> <h2 style={{color:'gold'}}>Notifications</h2></div>
        <div class="slide-container">
          <div class="wrapper">
            <div class="clash-card wizard">
              <div class="clash-card__image clash-card__image--wizard">
                <img src="https://scontent.fgza4-2.fna.fbcdn.net/v/t1.6435-9/67347687_2339683882965141_2347712137121497088_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=sWDVuAq6rdcAX9cSeu4&tn=On5aLwiado6XDMYB&_nc_ht=scontent.fgza4-2.fna&oh=a33172ad5aad0ee6319649b2a6d6f5a6&oe=60F15CCE" alt="wizard" />
              </div>
              <div class="clash-card__level clash-card__level--wizard"> {phone}</div>
              <div class="clash-card__unit-name">{name}</div>
              <div class="clash-card__unit-description">
              {des}
              </div>
              <div >
              {email}
              </div>
              <div >
              {location}
              </div>
              <div class="clash-card__unit-stats clash-card__unit-stats--wizard clearfix">
                <div class="one-third">
                  <div class="stat">{deadline}</div>
                  <div class="stat-value">Deadline</div>
                </div>

            

                <div class="one-third no-border">
                  <div class="stat">{price}$</div>
                  
                  <div class="stat-value">Cost </div>
                </div>

              </div>

            </div> 

<button style={{margin:'25px'}}>Accept</button>

<button className="sec">Refuse</button>
      </div> 
  
</div>
    </div>
  );
}

export default App;
