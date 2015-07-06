import Vue from 'vue';
import Quotes from '../assets/quotes'
import Notify from '../assets/Notify'

//var notify = new Notify({title : 'A new Notification',message : 'Quotes have been set...'})
let notify = new Notify({title : 'A new Notification',message : 'Quotes have been set...'})
let ipc;

export default class Main extends Vue{
  constructor(ipc) {

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

          notify.display();
          ipc.send('display-quotes','connections worked?');
        }//
      }//-- end methods

    }//-- end properties

    super(properties)

  }



}
