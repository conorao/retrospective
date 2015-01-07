/* globals Firebase */

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://jebbit-retrospective.firebaseio.com")
});
