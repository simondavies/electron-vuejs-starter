/**
 * a notification class based on the Web Notification API
 *
 * USAGE:
 * var notify = new Notify({title : 'A new Notification',message : 'Quotes have been set...'})
 * then call it when required as notify.display();
 */
export default class Notify {
  /**
   * @param {oject} options
   */
  constructor(options = '') {
    this.title = options.title;
    this.options = {
      body: ((options.message)
              ? options.message : 'You\'ve been notified'),
      icon: ((options.icon)
              ? options.icon
              : null)
    }
  }

  display (){
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      return;
    }

    // Let's check whether notification permissions have alredy been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(this.title, this.options);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification(this.title, this.options);
        }
      });
    }
  }

}
