/* globals Firebase */

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://<your-firebase>.firebaseio.com")
});
