import React, { Component } from 'react';
import Flat from './Flat';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Flat url='https://www.booking.com/hotel/mu/arkenstone-studios.he.html?aid=357009;label=gog235jc-country-XX-mu-mu-unspec-il-com-L%3Ahe-O%3AwindowsS10-B%3Achrome-N%3Ayes-S%3Abo-U%3Asalo-H%3As;sid=7b802890df0875d59c3c8defcf2b8c69;dist=0&sb_price_type=total&type=total&' 
              img='/Images/arkenstone.jpg'
              name = 'Arkenstone Studios'
              location = 'La Gaulette , Mauritius'
              description = 'Situated in La Gaulette, Arkenstone Studios offers air-conditioned accommodation with a terrace and free WiFi. The property features sea and mountain views.'
              grade = {9.7}/>

        <Flat url='https://www.booking.com/hotel/mu/residence-les-alizes.he.html?aid=357009;label=gog235jc-country-XX-mu-mu-unspec-il-com-L%3Ahe-O%3AwindowsS10-B%3Achrome-N%3Ayes-S%3Abo-U%3Asalo-H%3As;sid=7b802890df0875d59c3c8defcf2b8c69;dist=0&sb_price_type=total&type=total&' 
              img='/Images/residence.jpg'
              name = 'Résidence Les Alizés'
              location = 'La Gaulette , Mauritius'
              description = 'Situated in La Gaulette, Résidence Les Alizés features free WiFi and units fitted with a kitchen. All units feature air conditioning and a flat-screen TV.'
              grade = {9.7}/>

        <Flat url='https://www.booking.com/hotel/mu/baywatch-apartment.he.html?aid=357009;label=gog235jc-country-XX-mu-mu-unspec-il-com-L%3Ahe-O%3AwindowsS10-B%3Achrome-N%3Ayes-S%3Abo-U%3Asalo-H%3As;sid=7b802890df0875d59c3c8defcf2b8c69;dist=0&sb_price_type=total&type=total&' 
              img='/Images/baywatch.jpg'
              name = 'Baywatch Apartment'
              location = 'La Gaulette , Mauritius'
              description = 'Offering uninterrupted views of the Indian Ocean, Baywatch Apartment is a sea-front property set in La Gaulette. It features free WiFi and a garden with BBQ facilities.'
              grade = {9.3}/>              

        <Flat url='https://www.booking.com/hotel/mu/pingo-premium.he.html?aid=357009;label=gog235jc-country-XX-mu-mu-unspec-il-com-L%3Ahe-O%3AwindowsS10-B%3Achrome-N%3Ayes-S%3Abo-U%3Asalo-H%3As;sid=7b802890df0875d59c3c8defcf2b8c69;dist=0&sb_price_type=total&type=total&' 
              img='/Images/pingo.jpg'
              name = 'Pingo Premium'
              location = 'La Gaulette , Mauritius'
              description = 'Stuated just 300 metres from the Indian Ocean, Pingo Premium offers modern self-catering studios with a balcony or terrace. It also features an outdoor swimming pool with sun deck and a kite surfing school on site.'
              grade = {9.3}/>              


      </div>
    );
  }
}

export default App;
