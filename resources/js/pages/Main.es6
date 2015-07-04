import Vue from 'vue';

export default class Main extends Vue{
  constructor() {
    console.log('Main Page loaded...');

    var properties = {
      el: '#app',
      data: {
        message : 'Welcome to the main page...'
      }
    };

    super(properties)
  }



}
