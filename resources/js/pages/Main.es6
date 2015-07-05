import Vue from 'vue';
import Quotes from '../assets/quotes'

export default class Main extends Vue{
  constructor() {
    console.log('Main Page JS loaded ...');

    var properties = {
      el: '#app',
      data: {
        quotes : Quotes,
        selectedQuote : ''
      },
      ready : function(){
        this.displayQuote();
      },
      methods : {

        displayQuote : function() {
          //-- lets prepare a random quote to display
          let totalQuotes = parseInt(this.quotes.length);
          var getQuote = Math.floor(Math.random()*totalQuotes);

          this.selectedQuote = {
            quote : this.quotes[parseInt(getQuote)].quote,
            credit : this.quotes[parseInt(getQuote)].credit
          };
        }
      }
    };

    super(properties)
  }



}
